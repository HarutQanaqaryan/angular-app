import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth-mock.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isRegistered: boolean;
  isUserAlreadyExist: boolean;
  loading = false;
  form = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.min(4)]),
    password: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  get registerForm() {
    return this.form.controls;
  }

  register() {
    if (
      this.registerForm.firstname.value &&
      this.registerForm.lastname.value &&
      this.registerForm.login.value &&
      this.registerForm.password.value
    ) {
      const result = this.authService.signUp(
        this.registerForm.firstname.value,
        this.registerForm.lastname.value,
        this.registerForm.login.value,
        this.registerForm.password.value
      );
      if (result) {
        this.isRegistered = result;
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 2000);
      } else {
        this.isUserAlreadyExist = true;
      }
    }
  }
}
