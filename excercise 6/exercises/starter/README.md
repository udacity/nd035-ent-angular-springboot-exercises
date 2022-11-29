# Address Book

You have been hired to develop online address book. Below are the feature requirements

* The address book will display the name, phone number and address for each person in the H2 database. You will need to create a SpringBoot application to support the backend and an Angular frontend to display the information.

## Starter Project
We have provided a start project for each exercise that builds on each other to complete your application

## Requirements
For exercise 6 you will be updating the template to include variable expressions that will display the people data in a table.
### app.component.html

* Start to add the table in the `app.component.html` template. The following code will create a new table with the headers name, number and address.
```
<div class="people-container">
  <div class="people-index">
    <h2>AddressBook</h2>
    <br>
    <br>
    <table style="width:100%">
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Address</th>
      </tr>
    </table>
  </div>
</div>
```
* Next we will add another table row. However, this one will be different. It will use and Angular for loop to iterate over the peoples array.
```
<div class="people-container">
  <div class="people-index">
    <h2>AddressBook</h2>
    <br>
    <br>
    <table style="width:100%">
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Address</th>
      </tr>
      <tr *ngFor="let people of peoples">
      </tr>
     </table>
  </div>
</div>
```
* Add three variable expressions to list the people objects name, number and address.
```
<div class="people-container">
  <div class="people-index">
    <h2>AddressBook</h2>
    <br>
    <br>
    <table style="width:100%">
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Address</th>
      </tr>
      <tr *ngFor="let people of peoples">
        <td>{{people.name}}</td>
        <td>{{people.phoneNumber}}</td>
        <td>{{people.address}}</td>
      </tr>
    </table>
  </div>
</div>
```