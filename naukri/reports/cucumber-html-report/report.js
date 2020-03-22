$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/naukri_feature.feature");
formatter.feature({
  "line": 2,
  "name": "naukri website",
  "description": "",
  "id": "naukri-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@naukri_Feature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "",
  "description": "To check that the user is able to register an account",
  "id": "naukri-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_Valid_Register"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user launchs the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user opens naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters valid details for valid register option",
  "keyword": "Then "
});
formatter.match({
  "location": "NaukriStepDefinition.user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 16767566073,
  "status": "passed"
});
formatter.match({
  "location": "NaukriStepDefinition.user_opens_naukri_homepage()"
});
formatter.result({
  "duration": 29159456163,
  "status": "passed"
});
formatter.match({
  "location": "NaukriStepDefinition.user_enters_valid_details_for_valid_register_option()"
});
formatter.result({
  "duration": 16862808358,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "",
  "description": "To check that the user is not able to register an existing account",
  "id": "naukri-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@tc02_Invalid_Register"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user launchs the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user opens naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters invalid details for invalid register option",
  "keyword": "Then "
});
formatter.match({
  "location": "NaukriStepDefinition.user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 4528617330,
  "status": "passed"
});
formatter.match({
  "location": "NaukriStepDefinition.user_opens_naukri_homepage()"
});
formatter.result({
  "duration": 23561566019,
  "status": "passed"
});
formatter.match({
  "location": "NaukriStepDefinition.user_enters_invalid_details_for_invalid_register_option()"
});
formatter.result({
  "duration": 19627870621,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "To check that the user can login naukri account",
  "id": "naukri-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@tc03_login"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user launchs the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user opens naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user login into the account for login scenario",
  "keyword": "Then "
});
formatter.match({
  "location": "NaukriStepDefinition.user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 4301668620,
  "status": "passed"
});
formatter.match({
  "location": "NaukriStepDefinition.user_opens_naukri_homepage()"
});
formatter.result({
  "duration": 16245147608,
  "status": "passed"
});
formatter.match({
  "location": "NaukriStepDefinition.user_clicks_login()"
});
formatter.result({
  "duration": 94717287909,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "",
  "description": "To check that the user is not able to login an account with invalid details",
  "id": "naukri-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@tc04_InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user launchs the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user opens naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enters invalid details for invalid login option",
  "keyword": "Then "
});
formatter.match({
  "location": "NaukriStepDefinition.user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 5455249938,
  "status": "passed"
});
formatter.match({
  "location": "NaukriStepDefinition.user_opens_naukri_homepage()"
});
formatter.result({
  "duration": 1489736981,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.naukri.pages.LoginPage.url(LoginPage.java:62)\r\n\tat com.naukri.stepdefinition.NaukriStepDefinition.user_opens_naukri_homepage(NaukriStepDefinition.java:60)\r\n\tat ✽.When user opens naukri homepage(src/main/resources/feature/naukri_feature.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NaukriStepDefinition.user_enters_invalid_details_for_invalid_login_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 37,
  "name": "",
  "description": "To check that the user can search for job",
  "id": "naukri-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@tc05_Search"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user launchs the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user opens naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user login into the account",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user search the job",
  "keyword": "Then "
});
formatter.match({
  "location": "NaukriStepDefinition.user_launched_the_chrome_browser()"
});
