import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/model.user';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  greetOut = '';
  constructor(public authService: AuthService, public router: Router) {



  }

  ngOnInit() {
    console.log(localStorage.getItem('currentUser'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  public greet() {
    this.authService.greet(this.currentUser.fullName).subscribe((response: Response) => {
      console.log('before response');
      if (response.status === 200) {
        console.log('before response : ');
        console.log(response);
        console.log('before response : ');

        console.log(response);
      }
    });
  }

  // login out from the app
  logOut() {

   
    localStorage.clear();
    this.router.navigate(['/login']);
    /* this.authService.logOut()
       .subscribe(
         data => {
           this.router.navigate(['/login']);
         },
         error => {
 
         });*/
   }
  }
