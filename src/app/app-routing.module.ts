import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtheaderComponent } from './Http-JWT-Get-req/jwtheader/jwtheader.component';

const routes: Routes = [
  {path:"jwt",component:JwtheaderComponent},
  {
    path:'',
    loadChildren:()=>import('./USER/user.module').then( m=>m.USERModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./ADMIN/admin.module').then( m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
