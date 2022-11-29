import { Component, OnInit } from '@angular/core';
import { People } from '../models/People';
import { PeopleService } from '../services/people.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'People List';
  peoples: People[];

constructor(
  private peopleService: PeopleService
){
this.peoples = [];
}

ngOnInit(): void {
    this.peopleService
      .getPeople()
      .subscribe(response => this.peoples = response);
  }
}

