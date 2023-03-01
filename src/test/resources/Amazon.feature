Feature: com.amazon.mobiles

Background:
 Given user launch the browser
 And user gets the amazon url "https://www.amazon.in/"

@default @integrated
Scenario: Validating mobiles module
 Given user search for mobile with one dim list
 |samsung mobile |vivo mobile |realme mobile|
 And validate thelist of product displayed
 Then verify the Shop by Price displayed
 And verify the Bestselling Premium Smartphones displayed
 And verify the Shop by Brand displayed
 
 @optional @integrated
 Scenario: Validating mobiles module
 Given user search for mobile with one dim map
 |first search|samsung mobile|
 |second|vivo mobile|
 |third|realme mobile|
 And validate thelist of product displayed
 Then verify the Shop by Price displayed
 And verify the Bestselling Premium Smartphones displayed
 And verify the Shop by Brand displayed
 
 @default @integrated
  Scenario Outline: Validating mobiles module
 Given user search for mobile "<search>"
 And validate thelist of product displayed
 Then verify the Shop by Price displayed
 And verify the Shop by Brand displayed
 
 Examples:
 |search|
 |samsung mobile|
 |vivo mobile|
 |real mobile|