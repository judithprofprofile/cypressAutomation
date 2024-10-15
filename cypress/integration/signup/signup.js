// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){
    cy.fixture('example').then(function(data)
    {
        this.data = data
    })
})
let userName = "darmolyn"
let password = "schoolbag"
//Scenerio: Ecommerce signup test with new username and password
Given('I navigate to demoblaze ecommerce website', function(){
    cy.viewport(1800,1000)
    cy.visit(cypress.env("baseURL"), {timeout: 1000})
    cy.wait(1000)
})
When('I click the login button', function(){
    cy.get('#login2').click()
    cy.wait(2000)
})
When ("I login with {string} and {string}", (username, password) => {
    cy.wait(2000)
    cy.get('#loginusername').type(username)
    cy.wait(2000)
    cy.get('#loginpassword').type(password)
    cy.wait(2000)
    cy.get("button[onclick='login']").click()
})
