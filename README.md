
# Curl Commands for CTC Traders API

* Download the latest folder from https://github.com/hmrc/common-transit-convention-traders-postman .The folder "Curl commands" has curl commands for CTC Arrivals and Departures.

# Postman Collections for CTC Traders API

### Pre-requisite  
* Install latest version of Postman
* Download the latest Postman collection from https://github.com/hmrc/common-transit-convention-traders-postman

### If you want to run the CTC API Trader Tests on External Test

### To test APIs

In order to test the APIs on External Test you would need register on HMRC Developer Hub and have your client credentials like client secret and client ID.

Refer to section - How to get set up for testing on the link :
https://developer.service.hmrc.gov.uk/api-documentation/docs/api/service/common-transit-convention-traders-test-support/1.0

As the CTC Traders API is user restricted endpoint, you would need to generate an access token. This can be done using the Curl commands and following instructions on:
https://developer.service.hmrc.gov.uk/api-documentation/docs/authorisation/user-restricted-endpoints

### Importing Environment Variables

1. Open Postman, select Manage Environment (top right cog icon).
2. Under the Manage Environments box select Import and add the CTC_ExternalTest JSON file to run from the EnvironmentVariables folder.
3. Select the environment CTC_ExternalTest from the drop down, if you want to run the API tests on External Test.
4. Click on Edit and key in your bearer token against the access_token variable.

### Importing the Collections

In order to submit messages using CTC Traders API you need to import the JSON files within the Collections folder, into Postman.

1. Open Postman
2. Select Import -> Upload files from collections folder (You can find details on List Collectionat the end of this file).
3. Select 05_E2E Testing Business Test collection, if you want to test the scenarios from Trader Test Pack on Business Test environment.
4. Select 06_E2E Testing Trader Test, if you want to test the scenarios from Trader Test Pack on Trader Test environment.

You must note before you can use the collections **YOU MUST import the EnvironmentVariables**

### Run the Collections

In order to run the Collections 

1. Make sure you select the Environment Variable from the drop down.CTC_ExternalTest for Trader Test environment.
2. Go back to the Collection pane, select and run the tests you want to test.

You must note: Trader Test Postman Collection needs to be run manually.



### If you want to test the CTC API Trader tests locally

* Pull in the latest service manager and service-manager-config:

  https://github.com/hmrc/service-manager
  https://github.com/hmrc/service-manager-config
  
* Make sure you have mongo db and CTC_TRADERS_API service profile running with the following arguments:

```
sm --start CTC_TRADERS_API \
  --appendArgs '{"PUSH_PULL_NOTIFICATIONS_API": ["-Dwhitelisted.useragents.0=api-subscription-fields", "-Dwhitelisted.useragents.1=transit-movements-trader-at-destination", "-Dwhitelisted.useragents.2=transits-movements-trader-at-departure"], "PUSH_PULL_NOTIFICATIONS_GATEWAY": ["-DvalidateHttpsCallbackUrl=false"]}'
```

### To test APIs

In order to test the CTC APIs locally, you would need a bearer token. Please follow the instructions below to create a bearer token:

1. Open the Auth-wizard link
   http://localhost:9949/auth-login-stub/gg-sign-in
2. Keyin the Redirect URL as -  http://localhost:9949/auth-login-stub/session.
3. Enter the values for Enrolments:
        Enrolment Key - HMCE-NCTS-ORG 
        Identifier Name- VATRegNoTURN 
        Identifier Value - 334 
4. Click on Submit and Copy the authToken, if using Postman you just need the token details after Bearer.

### Importing Environment Variables

To use the collections, Postman uses environment varaibles which needs importing before you can run any collection

1. Within Postman, select Manage Environment (top right cog icon).
2. Under the Manage Environments box select Import and CTC_Local from the EnvironmentVariables folder.
3. Select the environment as CTC_Local from the drop down, before you run the API tests. 
4. Click on Edit and key in your bearer_token created.

### Importing the Collections

In order to submit messages using CTC Traders API you need to import the JSON files within the Collections folder, into Postman.

1. Open Postman.
2. Select Import -> Upload files and click on 01_CTC API Testing Local from collections folder.

Note: Before you can use the collections **YOU MUST import the EnvironmentVariables**


### Run the Collections

In order to run the Collections 

1. Make sure you select the Environment Variable and this is set to CTC_Local.
2. Go to the Collection pane, select and run the collection 01_CTC API Testing Local. This must run all the tests for the selected collection and give you the Pass and Fail Results.

### Generate Bearer Token using Postman Collection (Alternate way to create Bearer token for internal users only)

1. If you want to create the bearer token using the Postman scripts, make sure you have added your Client credentials and eori in the Environment variable setting.
2. To generate the token,click on the collection 02_Bearer_Token_CTC_API. Hover over the collection and Click on the arrow. Select the folder "Auth_With_Enrolment_ET" from the list to create the token for External Test.
3. Hit the Run button and 02_Bearer_Token_CTC_API button again.
4. This should have created the bearer token you need for the API tests. Re-run the test if any of the step fails. Click on the environment variable and see if access_token is populated with value.
5. You can now run the collections for CTC API Testing.

### Collections

1. 01_CTC API Testing Local - Collection of APIs that can be run locally.
2. 02_Bearer Token CTC API - Generates Bearer Tokens for managed environment.
3. 03_CTC API Smoke Testing - Subset of tests used for smoke testing CTC Traders API for Dev and Staging environment.
4. 04_CTC Traders API Regression Pack - Regression Pack for CTC Traders API can be run on Dev and Staging environment.
5. 05_E2E Testing Business Test  - CTC API tests for End to End Testing on Business Test.
6. 06_E2E Testing Trader Test - Trader Test Pack Scenarios for External Test.
7. 07_10K Guarantee Handling - 10K Guarantee Changes for GB on Business Test.
8. 08_E2E Testing Business Test NCTS XI - E2E Testing for XI on Business Test.
