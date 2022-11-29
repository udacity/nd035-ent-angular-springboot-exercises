# Address Book

You have been hired to develop online address book. Below are the feature requirements

* The address book will display the name, phone number and address for each person in the H2 database. You will need to create a SpringBoot application to support the backend and an Angular frontend to display the information.

## Starter Project
We have provided a start project for each exercise that builds on each other to complete your application

## Requirements
For exercise 3 you will be creating a single class. The class `PeopleApplication` will be the executable part of this application.
### People Application

* Create a new class named `PeopleApplication` that implements the `implements CommandLineRunner` interface. We will use this interface to populate data for testing directly into the database.
* Add the following annotations directly above the class name

`@SpringBootApplication` - This identifies the class as a SpringBoot application

* Autowire the `PersonRepo` class so we can populate the database


`@Autowired`


`private PersonRepo personRepo;`


* Create the main method that will be used to run the application

`  public static void main(String[] args) { SpringApplication.run(PeopleApplication.class, args); }`

* Override the run method and populate the H2 database with a few test People


`@Override`


`public void run(String... args) throws Exception {`

`personRepo.save(new Person("Mikel","555-5555", "1111 11111 Custom street"));`


`personRepo.save(new Person("Chery","555-5555", "1111 22222 Custom street"));`

`}`