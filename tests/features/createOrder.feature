Feature: Create an order

	Background: Go to home page and login
		Given Go to home page
        When Login by username: 'standard_user' and password: 'secret_sauce'
 
	Scenario: Sort products by name (Z to A), add to cart, then create an order
		When sort the products by 'Name (Z to A)'
		Then Verify that the active option from the products sort options is 'Name (Z to A)'
		When Add all the products on the current page to the cart
		Then Verify that the count of products in the cart, which appears above the shopping cart icon is '6'
		When Click on shopping cart button
        When Scroll down to the bottom then click on checkout button
        And Fill first name by 'Hesham', last name by 'Aboshama' and postal code by '12345' then click on continue
        And Scroll down to the buttom then click on finish button
        Then Verify that the order completion message appears correctly