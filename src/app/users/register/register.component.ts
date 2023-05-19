import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  registerForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private userService: UsersService , private router: Router ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const formData = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };
  
    console.log('Registering user:', formData);


      this.userService.registerUser(formData).subscribe(
        (response: any) => {
          console.log(response);
          
          this.router.navigateByUrl(``);
          alert('Register User successfully!');
        },
        (error) => {
          console.log(error);
        }
      );

  }

  isFieldInvalid(fieldName: string) {
    const field = this.registerForm.get(fieldName);
    return field?.invalid && (field.dirty || field.touched);
  }

  isConfirmPasswordInvalid() {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password !== confirmPassword && this.registerForm.get('confirmPassword')?.touched;
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }



}
