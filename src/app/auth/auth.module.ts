import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayaoutPageComponent } from './pages/layaoutPage/layaoutPage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';



@NgModule({
  declarations: [
    LayaoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class AuthModule { }
