import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../model/model.user';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, takeUntil, tap } from 'rxjs/operators';

import { DialogService } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from '../util/confirm/confirm.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router, private dialogService: DialogService) {
  }

  ngOnInit() {
  }

  register() {
    this.accountService.createAccount(this.user).subscribe((data: User) => {

      this.user = data;
      let disposable = this.dialogService.addDialog(ConfirmComponent, {
        title: 'Confirmación',
        message: 'Usuario ha sido creado satisfactoriamente',
        alertType : true
      })
        .subscribe((isConfirmed) => {
          //We get dialog result
          if (isConfirmed) {
            alert('accepted');
            this.router.navigate(['/login']);
          }
          else {
            alert('declined');
            this.router.navigate(['/login']);
          }
        });
      setTimeout(() => {
        disposable.unsubscribe();
        this.router.navigate(['/login']);
      }, 10000);
      //just with alert message
      //  alert('Usuario ha sido creado satisfactoriamente', );
      //  this.router.navigate(['/login']);
      
    });
  }
}
