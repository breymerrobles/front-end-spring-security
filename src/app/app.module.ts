import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, routing, FacebookModule.forRoot()
  ],
  providers: [AuthService, AccountService, UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
