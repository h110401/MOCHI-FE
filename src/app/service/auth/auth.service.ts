import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtResponse} from "../../model/JwtResponse";
import {environment} from "../../../environments/environment";

const API_LOGIN = environment.API + '/api/auth/login';
const API_SIGNUP = environment.API + '/api/auth/signup';
const API_AUTH = environment.API + '/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(formLogin: any) {
    return this.http.post<JwtResponse>(API_LOGIN, formLogin);
  }

  signup(formRegister: any) {
    return this.http.post<any>(API_SIGNUP, formRegister);
  }

  auth() {
    return this.http.post<JwtResponse>(API_AUTH, {});
  }
}
