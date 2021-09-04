import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { ForbiddenComponent } from './unauth-forbidden/forbidden/forbidden.component';
import { PagenotfoundComponent } from './unauth-forbidden/pagenotfound/pagenotfound.component';



const routes: Routes = [

  {
    path:'',
    loadChildren:()=>import('./USER/user.module').then( m=>m.USERModule)
  },

  {
    path:'admin',
    loadChildren:()=>import('./ADMIN/admin.module').then( m=>m.AdminModule)
  },
  {path:"forbidden",component: ForbiddenComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
