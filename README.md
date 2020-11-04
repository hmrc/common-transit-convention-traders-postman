
# Postman Collections for CTC API Traders

### If you want to test the CTC API Trader tests locally

* Pull in the latest service manager and service-manager-config

  https://github.com/hmrc/service-manager
  https://github.com/hmrc/service-manager-config
  
* Make sure you have mongo db and CTC_TRADERS_ARRIVAL service profile running
* Install latest version of Postman

### To test APIs

In order to test the CTC APIs locally ,you would need a bearer token. Please follow the instructions on the page below to create a bearer token
<Link to Matthews page for creating bearer token locally>

### Importing Environment Variables

To use the collections, Postman uses environment varaibles which needs importing before you can run any collection

1. Within Postman, select Manage Environment (top right cog icon)
2. Under the Manage Environments box select Import and CTC_Local from the EnvironmentVariables folder
3. Select the environment from the drop down, before you run the API tests. 
4. Click on Edit and key in your bearer_token created.

### Importing the Collections

In order to submit messages using CTC Traders API you need to import the json files within the Collections folder, into Postman.

1. Open Postman

2. Select Import -> Drag the json file 01_CTC API Testing Local from collections folder 

In the Collections tab on the left you can click on the parent folder which would list the different collections related to CTC tests you imported.

Note: Before you can use the collections **YOU MUST import the EnvironmentVariables**

### Run the Collections

In order to run the Collections 

1. Make sure you select the Environment Variable and this is set to CTC_Local.
2. Go to the Collection pane, select and run the collection you want to test .This must run all the tests for the selected collection and give you the Pass and Fail Results.

### If you want to run the CTC API Trader Tests on External Test


### To test APIs

In order to test the APIs on External Test you would need register to GG and have your client credentails like client secret and client Id.

This is one off process and can be created by following the guidelines on the page:
<Link to Matthews page for creating bearer token on ET>

### Importing Environment Variables

> To use the collections Postman uses custom environment variables for setting bearer tokens, base_urls etc. These need importing before you can run any collection.

1. Within Postman, select Manage Environment (top right cog icon)
2. Under the Manage Environments box select Import and add the json files you want to run from the EnvironmentVariables folder
3. Select the environment CTC_ExternalTest from the drop down, if you want to run the API tests on ET.
4. Click on Edit and key in your bearer token against the access_token variable.

You should have the environment and required client credentials you can now use to run your collections against

### Importing the Collections

In order to submit messages using CTC Traders API you need to import the json files within the Collections folder, into Postman.

1. Open Postman

2. Select Import -> Drag all json files from collections folder(description of collection avaliable at the end of file)

In the Collections tab on the left you should have a list of different collections related to CTC

Note: Before you can use the collections **YOU MUST import the EnvironmentVariables**

### Run the Collections

In order to run the Collections 

1. Make sure you select the Environment Variable you want to execute the collection.
2. Go back to the Collection pane, select and run the collection you want to test .This must run all the tests for the selected collection and give you the Pass and Fail Results.


###  Generate Bearer Token using Postman Collection

1. If you want to create the bearer token using the Postman scripts, make sure you have added your Client credentials in the Environment variable setting.
2. To generate the token,click on the collection 02_Bearer_Token_CTC_API. Hover over the collection and Click on the arrow. Select the folder "Auth_With_Enrolment_ET" from the list to create the token for External Test.
3. Hit the Run button and 02_Bearer_Token_CTC_API button again.
4. This should have created the bearer token you need for the API tests.Click on the environment varaible and see if access_token is populated with value.
5. You can now run the collections for CTC API Testing

###  Collections

1. 01_CTC API Testing Local - Collection of APIs that can be run locally.
2. 02_Bearer Token CTC API - Generates Bearer Tokens for managed environment.
3. 03_CTC API Smoke Testing - Subset of tests used for smoke testing CTC Traders API.
4. 04_CTC Traders API  Arrivals - CTC API tests for Arrivals Journey.
5. 05_CTC Traders API Departures - CTC API tests for Departures Journey.
6. 06_CTC_Test_Support_API - CTC API tests for Test Support APIs.
7. 07-EIS Endpoints - CTC API test to test EIS routing endpoints.
8. 09_E2E Testing -Business Test - CTC API tests for End to End Testing.

