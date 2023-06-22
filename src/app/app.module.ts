import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './layouts/home/home.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { UserComponent } from './user/user.component';
import { SignatureComponent } from './signature/signature.component';
import { UserService } from './services/user.service';
import { UploadServiceService } from './services/upload-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    UserComponent,
    SignatureComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  providers: [
    UploadServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
