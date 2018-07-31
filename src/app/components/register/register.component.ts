import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../model/model.user';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.accountService.createAccount(this.user).subscribe((data: User) => {
      console.log('Value is', data);
      this.user = data;
      this.router.navigate(['/login']);
    });
  }
}
