import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User, AppSettings } from '../model/model.user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(public http: Http, private router: Router) { }

  public logIn(user: User) {

    console.log('Strat .---->');
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa(user.username + ':' + user.password);
    console.log('credential:' + base64Credential);
    headers.append('Authorization', 'Basic ' + base64Credential);

    let options = new RequestOptions();
    options.headers = headers;

    return this.http.get(AppSettings.API_URL + '/account/login', options);
  }

  logOut() {
    // remove user from local storage to log user out
   
    return this.http.post(AppSettings.API_URL + 'logout', {});

  }

  greet(name) {
    // remove user from local storage to log user out
    console.log('Strat .---->');
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    // creating base64 encoded String from user name and password
    JSON.parse(localStorage.getItem('tokenAppScheduler'));
  ///  console.log('credential:' + JSON.parse(localStorage.getItem('tokenAppScheduler')));
    headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('tokenAppScheduler')));
    headers.append('XSRF-TOKEN', 'Bearer ' + JSON.parse(localStorage.getItem('tokenAppScheduler')));
   
   
    let options = new RequestOptions();
    options.headers = headers;
    return this.http.get(AppSettings.API_URL + '/account/greet?name=' + name, options);

  }
}
