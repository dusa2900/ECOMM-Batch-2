import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{LoginAuthService} from '../SERVICES/login.auth.service';
@Injectable({
  providedIn: 'root'
})

/////main-service//////
export class EcommService {

    
  httpOptions = {​​​​​​​​ headers: new HttpHeaders({​​​​​​​​ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", }​​​​​​​​ ),responseType: 'text' as 'json' }​​​​​​​​;
 
  constructor(private hc:HttpClient,private LoginAuthService:LoginAuthService ) { }

  public profile:string="http://localhost:4000/profile";


 

 
    //login
    login(value:any):Observable<any>{​​​
      console.log("login service",value);
      
    return this.hc.post<any>("http://ec2-54-172-210-123.compute-1.amazonaws.com:8080/tokenbased-0.0.1-SNAPSHOT/api/auth/signin",value,this.httpOptions)
    }​​​

//     loggedIn()
// {​​​
// return !!localStorage.getItem('user');
// }​​​

///login for token get

// public roleMatch(allowedRoles:any): boolean|any {
//   let isMatch = false;
//   const userRoles: any = this.LoginAuthService.getRoles();
//   console.log("user roless",userRoles);

//   if (userRoles != null && userRoles) {
//     for (let i = 0; i < userRoles.length; i++) {
//       for (let j = 0; j < allowedRoles.length; j++) {
//         if (userRoles[i] === allowedRoles[j]) {
//           console.log("check-roles",userRoles[i] === allowedRoles[j])
//           isMatch = true;
//           return isMatch;
//         } else {
//           return isMatch;
          
//         }
//       }
//     }
//   }
// }


//forgotpassword//
  forgotpassword(value:any):Observable<any>{
    console.log("forgotpassword service",value);
    const userPhoneNumber:any = sessionStorage.getItem('mobilenumber');
    console.log("forgotpassword user-number",userPhoneNumber);

    const params = new HttpParams().append('mobilenumber', userPhoneNumber );
    
    return this.hc.get("http://shoppingapp-env.eba-itwffxiz.ap-south-1.elasticbeanstalk.com/login/user",{params})

  }


//register//
register(value:any):Observable<any>{
  console.log("register service",value);
  return this.hc.post<any>("http://ec2-54-172-210-123.compute-1.amazonaws.com:8080/tokenbased-0.0.1-SNAPSHOT/api/auth/signup",value,this.httpOptions)
  
}
////SecondNavbar List function////
getSecondNavbar():Observable<any>
{​​​​​​​​
return this.hc.get("http://localhost:4000/secondNavbar")
}​​​​​​​​


////profile///////////////////////////////////
////Get-profile/////


public getprofile():Observable<any>{   
  console.log(" get profile service");
  return this.hc.get("http://ec2-54-172-210-123.compute-1.amazonaws.com:8080/tokenbased-0.0.1-SNAPSHOT/api/auth/signup");   
    } 

    ///Update-profile/////
    updateprofile(res:any):Observable<any>{
      console.log("update profile service",res);
    
      return this.hc.put(this.profile,res);
    
    }


}
