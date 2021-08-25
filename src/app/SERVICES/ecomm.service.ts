import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/////main-service//////
export class EcommService {

    
  httpOptions = {​​​​​​​​ headers: new HttpHeaders({​​​​​​​​ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", }​​​​​​​​ ),responseType: 'text' as 'json' }​​​​​​​​;
 
  constructor(private hc:HttpClient) { }

  public profile:string="http://localhost:4000/profile";


 

 
    //login
login(value:any):Observable<any>{​​​
// return this.hc.post<any>("http://shoppingapp-env.eba-itwffxiz.ap-south-1.elasticbeanstalk.com/login/user",value,this.httpOptions)
return this.hc.post<any>("http://localhost:4000/login",value)
}​​​
///login for token get

loggedIn()
{​​​
return !!localStorage.getItem('user');
}​​​

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
  return this.hc.post<any>("http://shoppingapp-env.eba-itwffxiz.ap-south-1.elasticbeanstalk.com/registration/register",value,this.httpOptions)
  
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
  return this.hc.get(this.profile);   
    } 

    ///Update-profile/////
    updateprofile(res:any):Observable<any>{
      console.log("update profile service",res);
    
      return this.hc.put(this.profile,res);
    
    }


}
