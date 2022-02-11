/*
 * Copyright 2022 HM Revenue & Customs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const newman = require("newman");
const newmanHtmlExtra = require("newman-reporter-htmlextra");

(async function() {
    const authCollectionFile = `${__dirname}/../Collections/02_Bearer Token CTC API.postman_collection.json`;
    const regressionCollectionFile = `${__dirname}/../Collections/04_CTC Traders API Regression Pack.postman_collection.json`;
    const environmentFile = `${__dirname}/../EnvironmentVariables/CTC_Development.postman_environment.json`;
    const modifiedEnvironmentFile = `${__dirname}/env_modified.postman_environment.json`;

    const clientId = process.env.POSTMAN_CLIENT_ID || "";
    const clientSecret = process.env.POSTMAN_CLIENT_SECRET || "";

    const getBearerToken = function(success, failiure, count = 1) {
        console.log("Retreiving bearer token...")
        newman.run({
            collection: authCollectionFile,
            environment: environmentFile,
            envVar: [
              {
                "type": "any",
                "value": clientId,
                "key": "client_Id"
              },
              {
                "type": "any",
                "value": clientSecret,
                "key": "client_secret"
              }
            ],
            folder: [
                "Auth_Dev_With_Enrolment",
                "Auth_Dev_W/o_Enrolment"
            ],
            exportEnvironment: modifiedEnvironmentFile,
            reporters: [ "cli" ]
        }, (error, summary) => {
            if (error || summary.error || (summary.run.failures || []).length > 0) {
                console.log(`Failed to get bearer token: attempt ${count} of 3`);
                if (count < 3) {
                    setTimeout(() => getBearerToken(success, failiure, count + 1), 200);
                } else {
                    failiure(`Unable to retrieve bearer token after three attempts: ${JSON.stringify(error || summary.error || summary.run.failures)}`);
                }
            } else {
                console.log("Completed tests");
                success(0);
            }
        });
    };

    const runTests = function() {
        return new Promise((successCallback, failiureCallback) => {
            console.log("Starting regression tests...");
            newman.run({
                collection: regressionCollectionFile,
                environment: modifiedEnvironmentFile,
                reporters: [ "cli", "htmlextra" ]
            }, (error, runStatus) => {
                if (error || runStatus.error || (runStatus.run.failures || []).length > 0) {
                    if ((runStatus.run.failures || []).length > 0) {
                        failiureCallback("There were test failiures. See html output for details.");
                    } else {
                        failiureCallback(JSON.stringify(error || runStatus.error));
                    }
                }
                successCallback("All tests passed.");
            });
        });
    }

    return await new Promise(getBearerToken)
        .then(_ => runTests())
        .catch(error => {
            console.error(`Something went wrong: ${error}`);
            process.exit(-1);
        });

})();