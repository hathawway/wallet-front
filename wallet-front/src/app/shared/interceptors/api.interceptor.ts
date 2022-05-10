import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

const host = 'http://localhost:3000';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let urlReq = req.clone({ url: host });

        if (req.params.get('id')) {
            urlReq = req.clone({ url: `${host}/${req.params.get('id')}` });
        }
        
        return next.handle(urlReq);
    }
}