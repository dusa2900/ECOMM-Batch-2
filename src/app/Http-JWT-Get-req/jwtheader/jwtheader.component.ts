import { Component, OnInit  } from '@angular/core';
import {
  HttpErrorResponse,
HttpEvent,
HttpHandler,
HttpInterceptor,
HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginAuthService } from 'src/app/SERVICES/login.auth.service';
@Component({
  selector: 'app-jwtheader',
  templateUrl: './jwtheader.component.html',
  styleUrls: ['./jwtheader.component.css']
})
export class JwtheaderComponent implements OnInit {


ngOnInit(){

}


token:any
  constructor(private loginauth: LoginAuthService,
    private router:Router) {}

    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      
      if (req.headers.get('No-Auth') === 'True') {
        return next.handle(req.clone());
      }
  
     this. token = this.loginauth.getToken();
  console.log("jwt-token",this.token);
  
      req = this.addToken(req, this.token);
  
      return next.handle(req).pipe(
          catchError(
              (err:HttpErrorResponse) => {
                  console.log(err.status);
                  if(err.status === 401) {
                      this.router.navigate(['/login']);
                  } else if(err.status === 403) {
                      this.router.navigate(['/forbidden']);
                  }
                  return throwError("Some thing is wrong");
              }
          )
      );
            }
  
    private addToken(request:HttpRequest<any>, token:string) {
        return request.clone(
            {
                setHeaders: {
                    Authorization : `Bearer ${token}`
                }
            }
        

        );
    }

  
}

