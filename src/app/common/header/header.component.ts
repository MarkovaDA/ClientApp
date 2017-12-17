import {Component, Input, OnInit} from '@angular/core';
import {UserProfile} from '../../models/response/Profile';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() profile: UserProfile;
  constructor(private authService:AuthService,
              private userService: UserService,
              private router: Router) {}

  onLogin() {
    //токена нет или он просрочен
    if (!this.authService.isTokenCorrect()) {
      //переходим на форму авторизации:
      this.router.navigateByUrl('/login');
    } else {
      //токен активный - получаем профиль
      this.authService.ensureAuthorized().subscribe((profile) => {
        this.userService.setUserProfile(this.profile);
      }, (error) => {
        //передать ошибку в родительский компонент
      });
    }
  }

  onLogout() {
    this.userService.resetUserProfile();
    this.authService.clearUserMetaData();
    this.router.navigateByUrl('');
  }
}
