import { Router } from '@angular/router';
import { Credentials } from './../models/credentials.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) { }

  login(credentials: Credentials): void {
    localStorage.setItem('token', credentials.password);
    this.updateLoggedIn()
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    localStorage.clear();
    this.updateLoggedIn()
    this.router.navigate(['/login'])
  }

  updateLoggedIn(): void {
    const token = localStorage.getItem('token');

    if(token){
      this.loggedIn.next(true);
    }else{
      this.loggedIn.next(false)
    }
  }

}
