import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
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
  });

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {}

  get email() {
    return this.form.controls.email as FormControl;
  }

  get password() {
    return this.form.controls.password as FormControl;
  }

  login() {
    this.loading = true;
    this.loginService
      .postLogin(
        this.form.value.email as string,
        this.form.value.password as string
      )
      .subscribe(
        (res) => {
          this.loading = false;
          localStorage.setItem('token', JSON.stringify(res.token));
          this.router.navigateByUrl('/home');
        },
        (e: any) => {
          this.loading = false;
          this.errorMessage = e.error;
        }
      );
  }
}
