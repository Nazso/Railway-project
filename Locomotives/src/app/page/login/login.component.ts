import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // @Input() visibility: boolean = false;
  // @Output() login = new EventEmitter();

  loginForm: FormGroup = this.fb.group({
    username: [''],
    email: ['']
  })


  regForm: FormGroup = this.fb.group({
    username: [''],
    email: ['']
  })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  // loginClick(visibility: boolean):void {
  //   // this.login.emit(visibility)
  // }

  onSubmit(loginForm: FormGroup) {
    // alert ('logged in!');
    console.log(loginForm.value);
    alert('This function has not been implemented yet!');
    this.auth.login(loginForm.value.username, loginForm.value.email);
    // this.loginClick(this.visibility)
  }

  // public userLogin(loginForm: FormGroup): void {
  //   this.auth.login(loginForm.value.username, loginForm.value.email)
  //   console.log(loginForm.value);
  //   loginForm.reset()
  //   alert('This function has not been implemented yet!')
  // }

  public userReg(regForm: FormGroup): void {

    console.log(regForm.value);
    regForm.reset();
    alert('This function has not been implemented yet!')
  }

}
