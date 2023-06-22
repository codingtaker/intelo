import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { UserComponent } from './user/user.component';
import { SignatureComponent } from './signature/signature.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "user", component: UserComponent},
  {path: "signature", component: SignatureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
