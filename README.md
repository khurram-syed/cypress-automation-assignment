# Cypress Automation Challenge

This is a cypress framework designed to be used as part of the hiring process for QA Automation Engineers. Documentation for the framework can be found [here](https://docs.cypress.io/guides/overview/why-cypress).

## Guidance

The objective of this challenge is to give you a chance to experience the sorts of automation testing problems we are looking to solve at MillTechFX. It also gives us a chance to understand how you think, and how you apply yourself to a task. You will have until the day before your interview to complete this challenge, but please do not spend more than a few hours on it. We are interested in the process you go through as much as the answer you get to so please be prepared to share your thinking with us during the follow up interview.

If, as you complete the challenge, you have any questions, please reachout to your MillTechFX hiring manager.

## Context

This project is intended to test the practice form page of the [demoqa](https://demoqa.com/) website. The acceptance criteria for this feature has been provided to you in the fillForm feature file. Your task is to complete the acceptance criteria and produce a working suite of tests.

## Challenge

1. Clone and setup this repo locally
2. Convert the feature file requirements into usable scenarios
3. Complete the required scenarios using the page objects and user details provided
4. Point out what is good and what is wrong/bad practices about the existing code and fix any mistakes you find
5. Show off your skills! [Examples: environment configuration files, Reporting tool integration, Negative test scenarios, book store application, be creative!]
6. How else would you look to improve the automation testing on this project?


# 📘 Assignment Solution Detail

This project contains automated UI tests written using:

Cypress 13,
Cucumber BDD (@badeball preprocessor),
Allure reporting,
Page Object Model (POM)

The test suite covers the DemoQA Student Registration Form for Automation QA Technical Task.

## Installation and RUN OPTIONS:


1- It can be run either from commandline or IDE(VS Code or Visual Sutdio) accordingly. 

 
 (i) Tests can be run with following commandline command
   
   > npm install.       &nbsp;&nbsp;&nbsp;&nbsp;  //<-- For the first time installation

   > npm cypress run

   > npm run cy:run
 
  or
   
   > npm cypress run --env TAGS='@smoke'.  &nbsp;&nbsp;&nbsp;&nbsp;  //<-- For any specific test

   > npm run cy:run:smoke
  
 **BROWSERS** :  
 *Note#:* Following browsers can be invoked by below commands. By default it would run in Chrome

    > npm run test:headed:chrome 

    > npm run test:headed:firefox
 

       
**REPORTING** :   

 - Allure HTML Reports will be generated automatically at following location with below command execution. Screenshots will get embedded in the reports too for the Failing tests.
 
     > npm run allure:report   &nbsp;&nbsp;&nbsp;&nbsp;   // <-- This will generate and open the reports

     > npm run test:allure    &nbsp;&nbsp;&nbsp;&nbsp;    //<-- This will run all tests, generate and open the reports in browser, i.e. all in one

     > Report Location : <root>/allure-report/index.html
 
  
**Scenario EXPLAINATION**:

TASK : There are 1 Feature file with 4 total Scenario (2 positive and 2 negative) to cover all the required tasks
 
Explanation: BDD style(Feature files implementation) has been followed for more readability along with POM(Page Object Model) design pattern. 
  
  - Feature Files : Following UI feature has been implemented with the following location
      > cypress/e2e/stepDefinitions/fillForm.feature. 

  
  - Step Definition : Feature file implementation is located at following location 
     >  cypress/e2e/stepDefinitions/fillFormSteps.js


  
  - POM (Page Object Model) Files : They have been implemented through Page Object Model. FormPage.js has been located at following location
     
     > cypress/support/pages/FormPage.js
   

