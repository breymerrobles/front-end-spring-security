import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../model/model.user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, takeUntil, tap } from 'rxjs/operators';
import { Response } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }



  ngOnInit() {
  }

  login() {
    // localStorage.setItem('tokenAppScheduler', null);
    //localStorage.setItem('currentUser', null);
    // this.user = new User();
    console.log('login');
    this.authService.logIn(this.user).subscribe((response: Response) => {


      // the returned user object is a principal object
      if (response.status === 200) {
        let data = response.json();
        console.log(data);
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('tokenAppScheduler', JSON.stringify(data.token));
        localStorage.setItem('currentUser', JSON.stringify(data.userDetails));
        this.router.navigate(['/profile']);



      } else {
        console.log('error :  Username or password is incorrect');
        this.errorMessage = 'error :  Username or password is incorrect';

      }
    }, err => {
      console.log('error :  Username or password is incorrect');
      this.errorMessage = 'error :  Username or password is incorrect';
    });




  }
}
