import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { authServerError, authUserError } from '../app.errors';
import { UserProfile } from '../models/response/Profile';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  errorMessage = '';

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
  }


  onLogin(loginForm: NgForm) {
    let testData: UserProfile = {
      email: 'darya.markova.95@mail.ru',
      role: 'Contragent',
      roleName:'Контрагент',
      userName:'darya_markova',
      userId: '0',
      message: ''
    };

    this.authService.login(loginForm.form.value).then((response) => {
      //отсылаем логин и пароль, получаем accessToken & expiresIn
      this.authService.saveUserMetadata(response); //сохраняем в кеше
       this.authService.ensureAuthorized()
         .subscribe((profile) => {
           //получаем мета-информацию о пользователе,сохраняем
           this.authService.saveUserMetadata(profile);
           this.router.navigateByUrl(`/${profile.role}`);
         }, (error) => {
           this.errorMessage = authServerError;
         })
    }).catch((error) => {
        this.errorMessage = authUserError;
        //для теста - типо авторизовалась я, и данные ушли
        this.userService.setUserProfile(testData);
        this.router.navigateByUrl(`/${testData.role}`);
    });
  }
}
