import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//import { catchError,map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiUrl: string="http://localhost:2000/data";

  httpOptions=
  {
    headers: new HttpHeaders({'content-type':'application/json'})
  }
  
  constructor(private _http:HttpClient) { }

 /**
  *  private handleError(error:HttpErrorResponse): Observable<string>
  {
    if( error.error instanceof ErrorEvent)
    {
      console.error('An error occured:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status} body was: ${error.error}`);
    }

    return throwError('something bad happend; please try again later.');
  }


  private exactData(res: Response): Array<string> | {}
  {
  const body = res;
  return body || {};
  }
  */
  
  
   public getUsers(): Observable<any> {
    return this._http.get(this.apiUrl,this.httpOptions);
  }

    public getUserById(userId:number): Observable<any> 
    {
      const api=`${this.apiUrl}/${userId}`;
      return this._http.get(api,this.httpOptions)
    }
    
    public postUser(userRecord:any): Observable<any> 
    {
      return this._http.post(this.apiUrl,userRecord,this.httpOptions)
      
    }

    public updateUser(userId:number,userRecord:any): Observable<any> 
    { 
      const api=`${this.apiUrl}/${userId}`;
      return this._http.put(api,userRecord,this.httpOptions)
    }

    public deleteUser(userID:number): Observable<any> {
      const url= ` ${this.apiUrl}/${userID}`;
      return this._http.delete(url,this.httpOptions)
    }
  }
