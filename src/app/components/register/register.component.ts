import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'app/services/register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorMessage = '';
  loading = false;
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
  });

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}
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
        () => {
          this.loading = false;
          this.router.navigateByUrl('/products');
        },
        (e: any) => {
          this.loading = false;
          this.errorMessage = e.error;
        }
      );
  }
}
