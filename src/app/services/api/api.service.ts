import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { CashData } from '../../cash/cash';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

}
