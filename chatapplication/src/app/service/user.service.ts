import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  BehaviorSubject, Observable } from 'rxjs';
import { User } from '../auth/login/user';
import { tap, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Friend } from '../auth/login/friend';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginSubject : boolean = false;
  // loginSubject$ = this.loginSubject.asObservable();

  private readonly apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient , private router: Router) { }

  $login = (user : User ) => <Observable<User>> this.http.post<User>(`${this.apiUrl}/login`, user)
  .pipe(
    tap(console.log)

  );

  $register = (user : User) => <Observable<User>> this.http.post<User>(`${this.apiUrl}/register`, user)
  .pipe(
    tap(console.log)

  );

  $friends = (user : User) => <Observable<Friend[]>> this.http.post<Friend[]>(`${this.apiUrl}/friend`,user)
  .pipe(
    tap(console.log)
  );

  isAuthenticated() : boolean{
    return this.loginSubject;
  }

  setAuthenticated(state : boolean) : void{
    this.loginSubject = state;
  }
}
