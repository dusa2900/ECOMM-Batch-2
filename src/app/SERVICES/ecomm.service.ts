import { HttpClient ,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/////main-service//////
export class EcommService {

  //responetype : text as json
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      
    } )
  };
private handleError(error:HttpErrorResponse):Observable<any>
{
  if(error.error instanceof ErrorEvent)
  {
    console.error('An error occured:', error.message);
  } else {
    console.error(`Backend returned code ${error.status} body was: ${error.error} `);
  }

  return throwError('something bad happend; please try again later.');
}

private extractData(res:Response):Array<any> | {}
{
  const body = res;
  return body || {}
}

public apiUrl:string="http://localhost:4000/profile";

  constructor(private hc:HttpClient) { }



  //login
login(value:any):Observable<any>{

return this.hc.post(this.apiUrl,value)

}


///login for token get
loggedIn()
{
  return !!localStorage.getItem('user');
}
//forgotpassword//
  forgotpassword(value:any):Observable<any>{
    console.log("forgotpassword service",value);
    
    return this.hc.post(this.apiUrl,value)
  }
//register//
register(value:any):Observable<any>{
  console.log("register service",value);
  //  return this.hc.post(this.apiUrl,value)
  return this.hc.post("http://Shoppingapp-env.eba-itwffxiz.ap-south-1.elasticbeanstalk.com/registration/register",value,this.httpOptions).pipe(
   
    catchError(this.handleError)
  )
  
}

//user profile //
public getprofile():Observable<any>{   
  console.log(" get profile service"); 
  return this.hc.get(this.apiUrl);   

    } 

    updateprofile(res:any):Observable<any>{
      console.log("update profile service",res);
    
      return this.hc.put(this.apiUrl,res);
    
    }



}
