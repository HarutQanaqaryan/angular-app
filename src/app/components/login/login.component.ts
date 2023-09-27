import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IUser } from 'app/models';
import {
  AppState,
  loginUser,
  selectCurrentUser,
  selectUserError,
} from 'app/shared';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage?: string;
  currentUser?: IUser;
  loading = false;
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.pipe(select(selectCurrentUser)).subscribe((value) => {
      this.currentUser = value;
    });
    this.store
      .pipe(select(selectUserError))
      .subscribe((value) => (this.errorMessage = value));
  }
  ngOnInit(): void {}

  get email() {
    return this.form.controls.email as FormControl;
  }

  get password() {
    return this.form.controls.password as FormControl;
  }

  login() {
    this.store.dispatch(
      loginUser({
        login: this.form.value.email as string,
        password: this.form.value.password as string,
      })
    );
    if(this.errorMessage){
      return
    }
    this.router.navigateByUrl('/claims');
  }
}
