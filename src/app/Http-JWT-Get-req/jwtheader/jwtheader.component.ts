import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentJWT = localStorage.getItem('accesstoken');
    //  const currentUserId = localStorage.getItem('userid');
    console.log('jwtheader', currentJWT);
    // console.log("userid",currentUserId)

    if (currentJWT) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentJWT}`,
          // UserId: currentJWT
        },
      });
    }

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });

 

    return next.handle(request);
  }
}
