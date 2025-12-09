import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { FormPage } from "../../support/pages/FormPage";

const formPage = new FormPage();

Given("the user navigates to the registration form", () => {
  formPage.navigateToFormPage();
});

When("the user submits the following student details", (dataTable) => {
  const [data] = dataTable.hashes();

  formPage.fillTheRegistrationForm(
    data.firstName,
    data.lastName,
    data.email,
    data.gender,
    data.mobile
  );
});

Then("the registration confirmation should display the matching student details", (dataTable) => {
  const [data] = dataTable.hashes();

  formPage.checkForSubmittedValues(
    data.firstName,
    data.lastName,
    data.email,
    data.gender,
    data.mobile
  );
});

When("the user submits each student details from {string} and should validate it",  (dataFixture) => {
   cy.fixture(dataFixture).then((users) => {

    users.forEach((data) => {

    formPage.fillTheRegistrationForm(
      data.firstName,
      data.lastName,
      data.email,
      data.gender,
      data.mobile
    );

    formPage.checkForSubmittedValues(
        data.firstName,
        data.lastName,
        data.email,
        data.gender,
        data.mobile
      );
      cy.reload()
    
    });
  });
 
});

When("the user submits an empty registration form", () => {
  formPage.getButtonSubmit().click();
});

Then("an error should be displayed for mandatory fields", () => {
    formPage.verifyRequiredFieldError();
});

When("the user enters invalid email {string}", (invalidEmail) => {
     formPage.enterEmailOnlyAndSubmitForm(invalidEmail)
});

Then("an error indication should appear for the email field", () => {
    formPage.verifyRequiredFieldError();
});
