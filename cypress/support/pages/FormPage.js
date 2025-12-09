/// <reference types="cypress" />
import { helper } from "../helper/helper";

export class FormPage{

    
    getInputFirstName() {
        return cy.get('#firstName');
    }
    
    getInputLastName () {
        return cy.get('#lastName');
    }

    getInputEmail () {
        return cy.get('#userEmail');
    }

    getRadioGender(genderOption){
        return cy.contains('label',genderOption);
    }

    getInputPhoneNumber () {
        return cy.get('#userNumber');
    }

    getButtonSubmit(){
        return cy.get('#submit');
    }

    getModalLabelDataCell(label){
        return cy.contains("td",label).next("td");
    }

    // Navigating to Registration Form Page
    navigateToFormPage(){
        cy.visit("/automation-practice-form");
        cy.get("h1").should("contain", "Practice Form");
    }

    /**
    *  Fill the registration Form
    */
    fillTheRegistrationForm(firstName,lastName,email,gender,mobile){
        this.getInputFirstName().clear().type(firstName);
        this.getInputLastName().clear().type(lastName);
        this.getInputEmail().clear().type(email);
        this.getRadioGender(helper.toTitleCase(gender)).click();
        this.getInputPhoneNumber().clear().type(mobile);
        this.getButtonSubmit().click();
    }
   
    /**
     * Validate submitted values in modal
     */
    checkForSubmittedValues(firstName,lastName,email,gender,mobile){
        const fullName = `${firstName} ${lastName}`;
        cy.contains("Thanks for submitting the form").should('be.visible');
        this.verifyTableValue("Student Name",fullName);
        this.verifyTableValue("Student Email",email);
        this.verifyTableValue("Gender",helper.toTitleCase(gender));
        this.verifyTableValue("Mobile",mobile);
    }

    /**
     * Verifying table row label with expected value
     */
    verifyTableValue(label,expectedValue){
        this.getModalLabelDataCell(label).should("have.text",expectedValue); 
    }

    /**
     * Verifying required fields state change on without value submission
     */
    verifyRequiredFieldError(){
        cy.get('#firstName:invalid').should('exist');
        cy.get('#lastName:invalid').should('exist');
        cy.get('#gender-radio-1:invalid').should('exist');
        cy.get('#gender-radio-2:invalid').should('exist');
        cy.get('#gender-radio-3:invalid').should('exist');
        cy.get('#userNumber:invalid').should('exist');
    }

    enterEmailOnlyAndSubmitForm(invalidEmail){
          this.getInputEmail().clear().type(invalidEmail);
          this.getButtonSubmit().click();
    }

    verifyIfEmailIsInvalid(){
        cy.get('#userEmail:invalid').should("exist");
    }

}

/**
*. Commenting out this existing 'forPage' Object, and converted into FormPage Class for true POM Design Pattern
*  Fo
 */
// export const formPage = {

//     getInputFirstName: () => {
//         return cy.get('[id="firstName]')
//     },

//     getInputLastName: () => {
//         return cy.get('[id="secondName]')
//     }
// }