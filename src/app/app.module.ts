import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './ui-kit/ui-button/ui-button.component';
import { InputComponent } from './ui-kit/ui-input/ui-input.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoadingComponent } from './ui-kit/ui-loading/ui-loading.component';
import { HeaderComponent } from './ui-kit/ui-header/ui-header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './ui-kit/ui-product/ui-product.component';
import { ModalComponent } from './ui-kit/ui-modal/ui-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    LoginComponent,
    RegisterComponent,
    LoadingComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
