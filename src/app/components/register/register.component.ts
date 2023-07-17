import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorMessage = '';
  loading = false;
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i),
    ]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^[a-zA-Z0-9_-]{6,18}$/i),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^[a-zA-Z0-9_-]{6,18}$/i),
    ]),
    firstname: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^[a-zA-Z0-9_-]{6,18}$/i),
    ]),
  });

  constructor(private registerService: RegisterService) {}
  ngOnInit(): void {}

  get email() {
    return this.form.controls.email as FormControl;
  }

  get password() {
    return this.form.controls.password as FormControl;
  }

  register() {
    this.loading = true;
    this.registerService
      .registerLogin(
        this.form.value.email as string,
        this.form.value.password as string,
        this.form.value.firstname as string,
        this.form.value.lastname as string
      )
      .subscribe(
        (res) => {
          this.loading = false;
          console.log(res);
        },
        (e: any) => {
          this.loading = false;
          this.errorMessage = e.error;
        }
      );
  }
}
