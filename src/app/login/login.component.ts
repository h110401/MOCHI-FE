import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import {TokenService} from "../service/token/token.service";
import {AuthService} from "../service/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  status = ''
  error = '';

  form = this.formBuilder.group({
    username: '',
    password: ''
  });
  hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('SIGNUP_SUCCESS')) {
      this.status = 'Sign up success! Please login!';
      localStorage.removeItem('SIGNUP_SUCCESS');
    }
  }

  login() {
    this.authService.login(this.form.value).subscribe({
      next: data => {
        this.tokenService.initData(data);
        this.router.navigate(['']);
      },
      error: err => {
        this.error = 'Login failed! Please try again!';
      }
    });
  }
}
