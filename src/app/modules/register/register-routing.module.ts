import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const routesRegister: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesRegister)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule { }
