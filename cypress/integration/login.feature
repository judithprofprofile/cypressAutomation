Feature: Demoblaze login functionality test

    Application regression​

    @login1
    
    Scenario: Navigating to the Demoblaze homepage
        Given I navigate to demoblaze ecommerce page
        When I click on the login button
        When I enter a valid username and password
        When I click the Log in button
        Then I should see the homepage after login

        @login1 
    Scenario: Login with invalid username and valid password
        Given I navigate to demoblaze ecommerce page
        When I click on the login button
        When I enter an invalid username and a valid password
        When I click the Log in button
        Then I should see an error message displayed
@login1 
    Scenario: Login with valid username and invalid password
        Given I navigate to demoblaze ecommerce page
        When I click on the login button
        When I enter a valid username and an invalid password
        When I click the Log in button
        Then I should see an error message displayed for wrong password
@login1 
    Scenario: Login with invalid username and invalid password
        Given I navigate to demoblaze ecommerce page
        When I click on the login button
        When I enter a invalid username and an invalid password
        When I click the Log in button
        Then I should see an error message displayed as user does not exist 
@login1
    Scenario: Login without inputing username and password
        Given I navigate to demoblaze ecommerce page
        When I click on the login button
        When I do not input username and password
        When I click the Log in button
        Then I should see an instruction to fill the blank field  
@login1
    Scenario: Login by entering only username without password
        Given I navigate to demoblaze ecommerce page
        When I click on the login button
        When I enter a valid username and leave password blank
        When I click the Log in button
        Then I should see an instruction to provide paswword