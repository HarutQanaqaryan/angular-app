import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ButtonComponent,
  InputComponent,
  LoadingComponent,
  NavbarComponent,
  SelectComponent,
  StatusComponent,
  TypeComponent,
} from './shared';
import { reducers } from './states';
import {
  ClaimsComponent,
  EditingClaimComponent,
  FooterComponent,
  HeaderComponent,
  LoginComponent,
  NotFoundComponent,
  RegisterComponent,
  ViewingClaimComponent,
} from './components';
import { StoreModule } from '@ngrx/store';
import { CreatingClaimComponent } from './components/creating-claim';
import { TextareaComponent } from './shared/ui-kit/ui-textarea';
import { DeletingClaimComponent } from './components/deleting-claim';
import { LayoutComponent } from './components/layout';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    LoginComponent,
    RegisterComponent,
    LoadingComponent,
    HeaderComponent,
    ClaimsComponent,
    FooterComponent,
    NavbarComponent,
    ViewingClaimComponent,
    EditingClaimComponent,
    StatusComponent,
    TypeComponent,
    SelectComponent,
    CreatingClaimComponent,
    TextareaComponent,
    DeletingClaimComponent,
    LayoutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
