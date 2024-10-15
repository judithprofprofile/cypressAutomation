Feature: Demoblaze login functionality test

  Application regression

  @login1 @smoke @regression
  Scenario Outline: Testing if a list of items loads correctly on a webpage
    Given I navigate to the Demoblaze ecommerce website
    When I click the login button
    And I login with "<Username>" and "<Password>"
    Then I validate list of products

  Examples:
    |Username|Password|
    | judithh | rain |
    | darmolyn | schoolbag |
    

  Scenario Outline: Testing internal server error
    Given I navigate to the Demoblaze ecommerce website
    When I click the login button
    When I login with username and password
    Then the user should see an error message
