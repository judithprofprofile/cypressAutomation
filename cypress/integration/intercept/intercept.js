/// <reference types="cypress" />

/// <reference types="cypress-iframe" />

import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Global uncaught exception handler

Cypress.on('uncaught:exception', (err, runnable) => {

   console.error(err);

   // Returning false here prevents Cypress from failing the test

   return false;

});


beforeEach(function () { 

   cy.fixture('example').then(function (data) {

       this.data = data;

   });

   // Handling Network Requests
   cy.intercept('https://api.demoblaze.com/entries').as('itemList');

   cy.intercept('https://www.demoblaze.com/config.json').as('config');

   cy.intercept('https://api.demoblaze.com/check').as('check');

   cy.intercept('https://api.demoblaze.com/viewcart').as('viewCart')




   // Mocking the /entries API response

   cy.intercept('GET', 'https://api.demoblaze.com/entries', {

       statusCode: 200,

       body: {

           cat: "laptop",

           desc: "Mac book laptop",

           id: 1000,

           img: "imgs/macBook.jpg",

           price: 1000000.0,

           title: "mac book pro"

       }

   }).as('getEntries');

});


Given('I navigate to the Demoblaze ecommerce website', function () {

   cy.visit(Cypress.env("baseURL"));

});


When('I click the login button', function () {

   cy.get('#login2').click();

   cy.wait(2000);

});


When("I login with {string} and {string}", (username, password) => {

   cy.login(username, password);

});


Then('I validate list of products', function () {

   cy.wait('@config')




   cy.wait('@getEntries').then((interception) => {

       const product = interception.response.body; // Directly access the object

       expect(product.id).to.eq(1000);

       expect(product.title).to.eq('mac book pro');

       expect(product.price).to.eq(1000000.0);

       expect(product.desc).to.eq("Mac book laptop");

       expect(product.cat).to.eq("laptop");

   });

});


When ('I login with username and password', function(){
   cy.login(this.data.Username, this.data.Password);

})


Then('the user should see an error message', () => {

   //Stubbing is similar to mocking, but more focused on controlling responses during tests.​

   // Intercept the request and force it to return a 500 error

   cy.intercept('GET', 'https://www.demoblaze.com/config.json', {

       statusCode: 500, 

       body: 'Internal Server Error',

   }).as('getCartError');


   cy.get('#cartur').click(); 

   cy.wait('@getCartError', { timeout: 10000 }).then((interception) => {

       expect(interception.response.statusCode).to.eq(500);

       expect(interception.response.body).to.eq('Internal Server Error');

   });

});


 

  