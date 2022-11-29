# Store

You have been hired to develop online for the company MyStore. The application will allow the store to provide items for customer to buy. Each item will have a name, description, price and picture. The online store will have a SpringBoot backend and a Angular 14 frontend. It will provide the following features. 

1. Display items to be purchased. From here the customer can select how many of the items they wish to purchase. 
2. Description page. When a customer selects an item it will show the items description information.
3. Online cart where items can be added. When an item is added the cart will update the total cart price.
4. Checkout page that accepts the customers name, address and credit card information (16 digit number).

MyStore wants you to focus on the skill you developed within this court by building a web application. You will need to develop the server and website and tests. However, you will not have to worry about deploying the application. MyStore will handle that work.

## Starter Project
A senior developer is assigned to be your tech lead and mentor, and they put together a starter project for you. It's a Maven project configured for all the dependencies the project requires, though you should feel free to add any additional dependencies you might require. You can download or clone the starter repository here.

## Requirements and Roadmap
There will be three layers of the application you will need to implement.

1. The back-end with Spring Boot
2. The front-end with Angular
3. Application tests with Selenium

## The Back-End
The back-end is all about security and connecting the front-end to H2 database data and actions.

1. Managing user access with Spring Security
* You have to restrict unauthorized users from accessing pages. To do this, you must create a security configuration class SpringSecurityConfig that extends the WebSecurityConfigurerAdapter class from Spring. Place this class in a package reserved for security. You will need to turn on HTTP basic security. 
* You have to use the security configuration to override the default spring security. In the resources directory you will see application.properties file that provides the system username and password. 
* All requests from the website will need to provide Authorization: 'Basic dWRhY2l0eTpwYXNzd29yZA==' in the header to be allowed access.
2. You need to write controllers for the application that bind application data and functionality to the front-end. That means you will need a product controller to provide the product information to the system and a order controller that stores order information when a cart transaction is completed. 
* The controllers you write should also be responsible for determining what, if any, error messages the application displays to the user. When a controller processes front-end requests, it should delegate the individual steps and logic of those requests to other services in the application, but it should interpret the results to ensure a smooth user experience.
* It's a good idea to keep your controllers in a single package to isolate the controller layer. Usually, we simply call this package controller!
* If you find yourself repeating tasks over and over again in controller methods, or your controller methods are getting long and complicated, consider abstracting some methods out into services! For example, consider the HashService and EncryptionService classes included in the starter code package service. These classes encapsulate simple, repetitive tasks and are available anywhere dependency injection is supported. Think about additional tasks that can be similarly abstracted and reused, and create new services to support them!
3. Making calls to the database with JPA mappers.
* You will need two model classes. One for items and the other for orders. The will need the @Entity annotation.
* To connect these model classes with database data, implement JPA mapper interfaces for each of the model types. These mappers should extend JpaRepository. You will access the database through these classes.

## Running the Backend

1. Load the application into InteliJ
2. Right click on StoreApplication and select run or from the cmd line use `mvn spring-boot:run`
3. The application will be running on  `http://localhost:8080/`

## The Frontend
Your tech lead has done a thorough job developing HTML templates for the required application pages. They have included fields, modal forms, success and error message elements, as well as styling and functional components using Bootstrap as a framework. You must edit these templates and insert Angular components and services to supply the back-end data and functionality described by the following individual page requirements:

Website
The website will contain the following components, cart, confirmation, product-item, product-item-detail and product-list

1. Product list - 
The user should be able to view all products that the site sales. It should have the name, price, picture and quantity to purchase.

The product service should pull the product list from the backend. 

2. Confirmation - 
The user should receive a confirmation dialog when they add an item to the cart. 

3. Product item - 
Provides the information that each product in the list will display to the customer.

4. Product item detail - 
Provides the detail description of the product when a customer selects the product from the product list. 

5. Cart - 
Provides a summary of the items in the cart along with the total price. Additionally, takes the customers, name, address and credit card to complete the order. 

When a customer submits a cart they are provided with the summary of the cart. The submit button will send the order to the backend. 

## Running the frontend 

1. Navigate to /webapp/angular-frontend
2. Install dependencies with `npm install`.
3. Run `ng serve ` for a dev server.
4. Navigate to `http://localhost:4200/`.

## Testing
The QA team at MyStore carries out extensive user testing. Still, your tech lead wants you to write some simple Selenium tests to verify user-facing functionality and prove that your code is feature-complete before the testers get their hands on it.

* Write tests for the product list.
* Write test for the cart functionality. 
* Write a test that verifies that the product description is displayed when a user select an item.
* Write test to verify that a confirmation dialog is displayed when an item is added to the cart.