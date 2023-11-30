import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { passwordValidator } from '../core/services/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})


export class SignUpComponent {
  // visible: boolean = true;
  // changetype: boolean = true;

  // viewpass(){
  //   this.visible = !this.visible;
  //   this.changetype = !this.changetype;
  // }
  isFormSubmitted: boolean = false;

  updaIsFormSubmitted(){
    this.isFormSubmitted = false;
  }



  signUpForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator]),
    rePassword: new FormControl('', Validators.required)
  });

  handleSubmit(): void {
    this.isFormSubmitted = true;
    console.log(this.signUpForm);

  }

  isInputValid(form:FormGroup, input: string): boolean{
    return !(!form.get(input)?.valid && form.get(input)?.touched && this.isFormSubmitted)
  }

  isRePasswordIdentical(form:FormGroup, password: string, rePassword: string): boolean{
    return password===rePassword;
  }

  // changeIsPasswordHiiden(): void{
  //   isPasswordHiiden = !isPasswordHiiden;
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
