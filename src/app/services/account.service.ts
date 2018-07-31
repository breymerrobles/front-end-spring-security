import { Injectable } from '@angular/core';
import { User, AppSettings } from '../model/model.user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class AccountService {
  constructor(public http: HttpClient) { }

  createAccount(user: User) {
    return this.http.post(AppSettings.API_URL + '/account/register', user);
      //.subscribe(resp => Json.St);
  }
}
