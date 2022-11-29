# Address Book

You have been hired to develop online address book. Below are the feature requirements

* The address book will display the name, phone number and address for each person in the H2 database. You will need to create a SpringBoot application to support the backend and an Angular frontend to display the information.

## Starter Project
We have provided a start project for each exercise that builds on each other to complete your application

## Requirements
For exercise 5 you will be creating and modifying several typescript classes to build the basic functionality of our Angular application. Here is a list of the classes. The new classes will be, `People.ts` and `people.service.ts`. Additionally, we will be making changes to `app.module.ts` and `app.component.ts`.

### People

* Create a new package in the app directory named models
* Create a new class named `People.ts`
* Add the following variables to the class


```
export class People {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;


  constructor() {
    this.id = 0;
    this.name = '';
    this.phoneNumber = '';
    this.address = '';
  }
}

```

### people.service
* Create a new package in the app directory named services
* Create a new class named `people.service.ts`
* Add the following imports to the class, so we can use these APIs and classes within our new service.

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../models/People';

```
* Add the injectable annotation so Angular knows to resolve the class dependencies when injecting the class.

```
@Injectable({
  providedIn: 'root'
})

```

* Create the rest of the class and add a single function getPeople that will make an HTTP Get request to our backend service.

-note: The backend server is running on `http://localhost:8080`. Additionally, since we are going to use basic Auth to access our server the 64 bit encoded password has been provided for you `dWRhY2l0eTpwYXNzd29yZA==`

```
export class PeopleService {

  private baseUrl = "http://localhost:8080/people/all";

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People[]> {
     return this.http.get<People[]>(`${this.baseUrl}`, { headers: { Authorization: 'Basic dWRhY2l0eTpwYXNzd29yZA=='}});
  }
}
```
### app.module
* In the `app.module` class will need to import the following API `HttpClientModule` so we can ue it in the service class and `app.component`
* Add `HttpClientModule` to the list of imports
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
```
* Add `HttpClientModule` to our list of imports so other classes can use it in the application.
```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### app.component
* update the imports to add the People model, people service and HTTP client
```
import { Component, OnInit } from '@angular/core';
import { People } from '../models/People';
import { PeopleService } from '../services/people.service';
import { HttpClient } from '@angular/common/http';
```
* Create a People array, so we can store and display the people data we get back from the server.
```
export class AppComponent implements OnInit{
  title = 'People List';
  peoples: People[];

constructor(
  private peopleService: PeopleService
){
this.peoples = [];
}
```
* Add and nfOnInit function to call the people service class when the application starts up.

-Note: Since this is an async call we want to subscribe to the function so we can be alerted once the request comes bac from the server. 
```
ngOnInit(): void {
    this.peopleService
      .getPeople()
      .subscribe(response => this.peoples = response);
  }
```