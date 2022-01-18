import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(3)])
      }
    );
   }

  ngOnInit(): void {
  }
  process() {

  }
  logIn(){
    //alert(JSON.stringify(this.loginForm.value));
  }

}
