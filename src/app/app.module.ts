import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ButtonComponent,
  FooterComponent,
  HeaderComponent,
  InputComponent,
  LoadingComponent,
  ModalComponent,
  NavbarComponent,
  SelectComponent,
  StatusComponent,
  TypeComponent,
  reducers,
} from './shared';
import {
  ClaimsComponent,
  EditingClaimComponent,
  LoginComponent,
  RegisterComponent,
  ViewingClaimComponent,
} from './components';
import { StoreModule } from '@ngrx/store';
import { CreatingClaimComponent } from './components/creating-claim';
import { TextareaComponent } from './shared/ui-kit/ui-textarea';
import { DeletingClaimComponent } from './components/deleting-claim';

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
    ModalComponent,
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
