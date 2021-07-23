import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './decorator/parent/parent.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./user/user.module').then( m=> m.UserModule)
  },
  {
    path:'parent',
    component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
