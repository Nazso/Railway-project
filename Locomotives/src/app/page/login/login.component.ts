import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public userLogin(): void {
    alert('This user is logged in!')
  }

  public userReg(): void {
    alert('This user is registrated!')
  }

}
