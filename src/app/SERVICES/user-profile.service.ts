import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  public apiUrl:string="http://localhost:4000/profile";
  constructor(private _http:HttpClient){}

  public getprofile():Observable<any>{   
    
    return this._http.get(this.apiUrl);   

     

      } 


      updateprofile(res:any):Observable<any>{
       
      
        return this._http.put(this.apiUrl,res);
      
      }
}


