import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private authService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.authService.loadingStatus(true)

    const cloneReq = request.clone({
      setHeaders:{
        "auth":"Token from local Storage",
        "content-type":"application/json"
      }
    })
    return next.handle(cloneReq)
      .pipe(
        finalize(()=>{
          this.authService.loadingStatus(false)
        })
      )
  }
}
