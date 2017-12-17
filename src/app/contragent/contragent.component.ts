import { Component, OnInit } from '@angular/core';
import { Contragent } from '../models/Сontragent';
import { ApiService } from '../services/api/api.service';
import { UserService } from '../services/user/user.service';
import { validationError } from '../app.errors';
import {UserProfile} from '../models/response/Profile';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-contragent',
  templateUrl: './contragent.component.html',
  styleUrls: ['./contragent.component.css']
})
export class ContragentComponent implements OnInit{

  contragent: Contragent;
  errorMessage =  '';
  notFoundMessage = 'Компания не найдена. Введите название вручную.';
  private profile: UserProfile;
  private isFetched:boolean;

  constructor(private apiService: ApiService,
              private userService: UserService,
              private route: ActivatedRoute) {


    this.contragent = new Contragent();
  }

  ngOnInit() {
    this.isFetched = false;

    /*this.route.snapshot.data['profile'].subscribe((profile) => {
      this.profile = profile;
      console.log('PROFILE resolved', this.profile);
      this.isFetched = true;
    }, (error) => {
      this.isFetched = true;
    });*/

    this.userService.getUserProfile().subscribe((profile) => {
      //console.log('Contragent', profile);
      this.profile = profile;
      this.isFetched = true;
    }), (error) => {
      this.isFetched = true;
    };
  }

  onLogin() {
    // если есть хотя бы одно пустое поле - генерируем сообщениe об ошибке
    if (Object.keys(this.contragent).find((key) => this.contragent[key] === '')) {
      this.errorMessage = validationError;
      return false;
    }
  }

  onSearch() {

  }
}
