import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {

  signupForm: FormGroup;
  constructor() { 
    this.signupForm = new FormGroup(
    {
      email: new FormControl(),
      
      password: new FormControl(),
      passconfirm: new FormControl()
    }, [this.passwordMatch]
  );}

  private passwordMatch(form: AbstractControl): ValidationErrors | null {
    // AbstractControl est la super classe des FormGroup ET FormControl
    // attention sur lequel la validation personnalisée est appliquée
  
    if (form.value?.password != form.value?.passwordConfirmation) {
      return { passwordConfirmationMustMatch: true };
    } else {
      return null
    }
  }

  ngOnInit(): void {
  }
  signUp(){
    alert(JSON.stringify(this.signupForm.value));
  }

}
