import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersInterface } from '../models/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  JSON_URL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersInterface> {
    return this.http.get <UsersInterface>(this.JSON_URL)
  }
}
