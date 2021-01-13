Feature: Show and hide event details

  Scenario: An event is collapsed by default
    Given app is loaded
    And the list of events had been loaded
    When user did not click show details button
    Then event elements will be collapsed

  Scenario: User can expand an event to see details
    Given app is loaded
    And the list of events had been loaded
    When user clicks show details button
    Then the event element should expand and show details of that event

  Scenario: User can collapse an event to hide its details
    Given app is loaded
    And the event element is expanded
    When user clicks hide details button
    Then the event element should collapse