import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../core/services/password.validator';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  isFormSubmitted: boolean = false;

  updaIsFormSubmitted(){
    this.isFormSubmitted = false;
  }

  signInForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator]),
  });

  handleSubmit(): void {
    this.isFormSubmitted = true;
    console.log(this.signInForm);

  }

  isInputValid(form:FormGroup, input: string): boolean{
    return !(!form.get(input)?.valid && form.get(input)?.touched && this.isFormSubmitted)
  }

  // isRePasswordIdentical(form:FormGroup, password: string, rePassword: string): boolean{
  //   return password===rePassword;
  // }

  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  buttonColor: string = '#ff7100';

  onMouseOver(): void {
    this.buttonColor = '#c25c09'; // Change to the desired color on hover
  }

  onMouseOut(): void {
    this.buttonColor = '#ff7100'; // Change back to the original color on mouse out
  }
}
