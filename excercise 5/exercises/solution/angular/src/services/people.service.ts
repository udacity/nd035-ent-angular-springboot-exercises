import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl = "http://localhost:8080/people/all";

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People[]> {
     return this.http.get<People[]>(`${this.baseUrl}`, { headers: { Authorization: 'Basic dWRhY2l0eTpwYXNzd29yZA=='}});
  }
}