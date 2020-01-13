import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("INTERCEPTOR");
    let newHeaders = req.headers;
    const authReq = req.clone({ headers: newHeaders });
    console.log("req", newHeaders);
    return next.handle(authReq).pipe(
      map(resp => {
        // Several HTTP events go through that Observable
        // so we make sure that this is a HTTP response
        if (resp instanceof HttpResponse) {
          // Just like for request, we create a clone of the response
          // and make changes to it, then return that clone
          console.log("resp-handle", resp);
          console.log(
            "jnet-roles-tagged",
            resp.headers.get("jnet-roles-tagged")
          );
          console.log("jnetid", resp.headers.get("jnetid"));
          return resp.clone({
            body: [{ title: "Replaced data in interceptor" }]
          });
        }
      })
    );
  }
}

// export abstract class HttpHandler {
//   abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
// }
