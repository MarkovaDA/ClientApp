import {Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import {UserProfile} from '../models/response/Profile';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private profile: UserProfile;
  private isFetched: boolean;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    console.log('ВЫ в компоненте Main!!!');
    this.isFetched = false;
    this.userService.getUserProfile().subscribe((profile) => {
      this.profile = profile;
      console.log('Main profile',profile);
      this.isFetched = true;
    }), (error) => {
      this.isFetched = true;
    };
  }
}
