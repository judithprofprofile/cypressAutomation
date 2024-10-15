Feature: Demoblaze login functionality test

    Application regression​

    @login1 @smoke @regression​
    Scenario Outline: Login with different credentials
    Given I navigate to demoblaze ecommerce website
    When I click the login button
    When I login with "<username>" and "<password>"
    | Username | password |
    | judithtaiwo | rain |
    | darmolyn | schoolbag |
    Then verify successful login
    
    
    
    