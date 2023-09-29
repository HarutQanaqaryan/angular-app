import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, selectCurrentUser } from 'app/states';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isSignIn: boolean;
  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(selectCurrentUser))
      .subscribe((value) => (this.isSignIn = !!value));
  }
}
