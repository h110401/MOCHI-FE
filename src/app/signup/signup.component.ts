import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide_password: boolean = true;
  hide_repeat: boolean = true;
  valid: boolean = false;
  error: string = '';

  form = this.formBuilder.group({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    repeat: ''
  })

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  signup() {
    console.log(this.form.value)
    this.authService.signup(this.form.value).subscribe({
      next: value => {
        console.log(value)
        if (value.message === 'signup-success') {
          localStorage.setItem('SIGNUP_SUCCESS', 'success');
          this.router.navigate(['login'])
        }
      },
      error: err => {
        console.log(err)
        this.error = 'Register Failed! Try again!'
      },
      complete: () => {
        console.log('complete')
      }
    })
  }

  checkPassword() {
    let password = this.form.value.password;
    let repeat = this.form.value.repeat;
    this.valid = password == repeat && password?.trim() !== '' && repeat?.trim() !== ''
  }

}
