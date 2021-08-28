import { Component, OnInit  } from '@angular/core';
import {AuthGuard} from '../../Auth/auth.guard'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-jwtheader',
  templateUrl: './jwtheader.component.html',
  styleUrls: ['./jwtheader.component.css']
})
export class JwtheaderComponent implements OnInit {

  constructor() { }
ngOnInit(){

}
  intercept(
    request: HttpRequest<any>,next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentJWT= localStorage.getItem('accessToken');

    console.log('accessToken', currentJWT);

    if (currentJWT) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentJWT}`,
       
        },
      });
    }

  return next.handle(request);


 

  }
}

