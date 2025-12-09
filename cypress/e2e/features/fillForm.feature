#To Do - Convert following requirement into a testable feature
Feature: Student Registraction form
As an automation tester
I want to fill in and submit the form on the demoqa.com website with the details:
First Name - Jane
Last name - Smith
Email address - automation-test@tester.com
Phone number - 1234567891
So that I can make sure the form is being completed and showing the correct user details
## This has been designed in a flexible way to add and verify as many as student values

  @singleStudent @smoke
  Scenario Outline: 1-Verifying student registration form submitted successfully
    Given the user navigates to the registration form
    When the user submits the following student details
      | firstName   | lastName   | email   | gender   | mobile   |
      | <firstName> | <lastName> | <email> | <gender> | <mobile> |
    Then the registration confirmation should display the matching student details
      | firstName   | lastName   | email   | gender   | mobile   |
      | <firstName> | <lastName> | <email> | <gender> | <mobile> |

    Examples:
      | firstName | lastName | email                      | gender | mobile     |
      | Jane      | Smith    | automation-test@tester.com | Female | 1234567891 |
###As an automation tester
#So that I can make this feature run for any amount of user details passed in
#I want to be able complete the above scenario by passing in an array of user details and submit the form for each of these users

  @multipleStudent
  Scenario: 2-Checking multiple student registration form using fixture data
    When the user navigates to the registration form
    Then the user submits each student details from "userDetails" and should validate it
###This scenario the neagtive scenario when form is submitted without any value.

  @mandatoryFieldsCheck
  Scenario: 3-Verifying mandatory fields should not be empty
    Given the user navigates to the registration form
    When the user submits an empty registration form
    Then an error should be displayed for mandatory fields
###This scenario is to check the email should show error for invalid email inputs

  @emailValidationCheck
  Scenario Outline: 4-Invalid email should show error message
    Given the user navigates to the registration form
    When the user enters invalid email "<invalidEmail>"
    Then an error indication should appear for the email field

    Examples:
      | invalidEmail      |
      | abc               |
      | test@com          |
      | @missingprefix.io |
      | missingatsign.com |
