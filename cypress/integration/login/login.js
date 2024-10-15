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

Given ('I navigate to demoblaze ecommerce page', function() {

  // Visit the website
  cy.visit('https://www.demoblaze.com/')
  cy.wait(10000)
  cy.get('#login2').should('be.visible') // Ensuring the login button is visible
})


When ('I click on the login button', function() {
   // Click the login button to open the login modal
  
    cy.get('#login2').click()
   cy.get('#logInModal').should('be.visible') // Verify the login modal is visible
    cy.wait(4000)
})
When('I enter a valid username and password', function() {
  cy.wait(4000)
  // Enter valid credentials
  cy.get('#loginusername').type(this.data.Username)
  cy.wait(4000)
  cy.get('#loginpassword').type(this.data.Password)
  cy.wait(4000)
})

When('I enter an invalid username and a valid password', function (){
  cy.wait(4000)
    cy.get('#loginusername').type('Judeeth')
    cy.wait(4000)
      cy.get('#loginpassword').type('books')
        cy.wait(4000)

})
 
  When('I enter a valid username and an invalid password', function(){
      cy.get('#loginusername').type(this.data.Username)
        cy.get('#loginpassword').type(this.data.invalidPassword)
          cy.wait(4000)
})


When('I enter a invalid username and an invalid password', function(){
      cy.get('#loginusername').type('Judeeth')
        cy.get('#loginpassword').type('books')
          cy.wait(4000)
})

When('I do not input username and password', function(){
      cy.wait(4000)
})

When('I enter a valid username and leave password blank', function(){
      cy.get('#loginusername').type(this.data.Username)
          cy.wait(4000)
})


When('I click the Log in button', function() {
  // Click the "Log in" button
  cy.get("button[onclick='logIn()']").click();
})

Then('I should see the homepage after login', function() {
  // cy.get('a').contains('Home').should('be.visible') // Home button visible
  cy.wait(4000)
  cy.get('#nameofuser').should('contain.text', 'Welcome') 
  // cy.wait(4000)
    cy.get('#logout2').should('be.visible')
    cy.get('#logout2').click()

})  

    Then('I should see an error message displayed', function() {
      cy.on('window:alert', (text) => {
        expect(text).to.contain('User does not exist.').click()
          cy.get('.btn btn-secondary').contains('Close').should('be.visible')
            cy.wait(4000)
    })
    })
  
Then('I should see an error message displayed for wrong password', function(){
  cy.on('window:alert', (text) => {
      expect(text).to.contain('Wrong password.')
  
})
})

Then('I should see an error message displayed as user does not exist', function(){
    cy.on('window:alert', (text) => {
      expect(text).to.contain('User does not exist.')
  
})
})

Then('I should see an instruction to fill the blank field', function(){
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Please fill out Username and Password.')

    })
  })

Then('I should see an instruction to provide paswword', function(){
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Please fill out Password.')
    })
  })

























// cy.wait(4000)
// // select product: Samsung galaxy s6
// cy.get('[class="hrefch"]').contains('Samsung galaxy s6').click()
// cy.wait(4000)
// cy.get('[class="btn btn-success btn-lg"]').contains('Add to cart').click()



// cy.on('window:alert', (text) => {
//  expect(text).to.contain('Product added.')
//  })

// // click on home button
// cy.get('.nav-item.active').get('a').contains('Home ').click()



// cy.get('[class="card-title"]'). get('a').contains('HTC One M9').as('targetProduct');

// cy.get('@targetProduct').click();


// // click on cart button
// cy.get('[id="cartur"]').click()

// cy.wait(4000)
// // assertion on the table containing products details 
// cy.get('[id="tbodyid"]').get('[class="success"]').then((productTable1) => {
//   // Wrap the first cell of the row and alias it
// cy.wrap(productTable1).eq(0).get('td').eq(1).as('tableCell1')
// cy.wait(4000)
//   //Log the text content of the first cell
// cy.get('@tableCell1').invoke('text').then((text) => {
// console.log(text)
// })
//  cy.get('@tableCell1').should('have.text','Samsung galaxy s6')
// })

// //  cy.get('[id="tbodyid"]').get('tr').eq(0).get('td').eq(1).should('have.text','Samsung galaxy s6')




// //Automating Sign-up functionality

// /*Given ('I navigate to demoblaze ecommerce page',function(){
//     cy.visit('https://www.demoblaze.com/')
// cy.wait(10000)
// cy.get('[id="signin2"]').click()
// cy.get('[id="signInModal"]').should('be.visible')
// cy.get('[id="sign-username"]').type('Taiwol')
// cy.get('[id="sign-password"]').type('rainy')
// cy.get('[class="btn btn-primary"]').contains('Sign up').click()

// cy.on('window:alert', (text) => {
// expect(text).to.contain('Sign up successful.');

// })





// })*/