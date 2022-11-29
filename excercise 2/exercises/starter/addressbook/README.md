# Address Book

You have been hired to develop online address book. Below are the feature requirements

* The address book will display the name, phone number and address for each person in the H2 database. You will need to create a SpringBoot application to support the backend and an Angular frontend to display the information.

## Starter Project
We have provided a start project for each exercise that builds on each other to complete your application

## Requirements
For exercise 2 you will be creating a single class. The class `PersonController` will be the Rest controller and will act as the gateway for our SpringBoot application.
### Person Controller

* Create a new package controllers
* Create a new class named `PersonController`.
* Add the following annotations directly above the class name


`@RestController` - Identifies this class as a Rest Controller

`@RequestMapping("people/")` - Creates a path to the controller `localhost:8080/people`

`@CrossOrigin(origins = "http://localhost:4200")` - Allows cross-origin headers to come from this URL. This is where the Angular application will be running

* Create a `PersonRepo` variable that will have the autowired annotation

`@Autowired`

`private PersonRepo personRepo;`

* Create a method `getAllPeople` that returns a list of `People` objects. To perform this operation use the `PersonRepo` class.

Example:

`return personRepo.findAll();`