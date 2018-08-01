import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './services/account.service';
import { ProfileComponent } from './components/profile/profile.component';
import { routing } from './app.route';
import { FacebookModule } from 'ngx-facebook';
import { UrlPermission } from './urlPermission/url.permission';
import { AppComponent } from './app.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './components/util/confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, routing, FacebookModule.forRoot(),
    BootstrapModalModule.forRoot({ container: document.body })
  ],
   entryComponents: [
    ConfirmComponent
   ],
  providers: [AuthService, AccountService, UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
