import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpRequest
} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { SearchFormModel } from "../models/search-form.model";
// import { HTTP_REQUEST_INTERCEPTORS } from "../interceptors/http-interceptor";

@Injectable({
  providedIn: "root"
})
export class UserService {
  serachFormData: SearchFormModel;
  personData: any;
  protected basePath = environment.baseUrl; //addresssearch2/api
  addresses: any;
  prisoners: any;
  probations: any;
  employerAddresses: any;
  constructor(
    private httpClient: HttpClient // readonly httpInterceptor: HTTP_REQUEST_INTERCEPTORS
  ) {}

  setSearchFormData(data: SearchFormModel): void {
    this.serachFormData = data;
  }

  getSearchFormData(): SearchFormModel {
    return this.serachFormData;
  }

  setData(data: any, type: string): void {
    switch (type) {
      case "personData":
        this.personData = data;
        break;
      case "address":
        this.addresses = data;
        break;
      case "prison":
        this.prisoners = data;
        break;
      case "probation":
        this.probations = data;
        break;
      case "employment":
        this.employerAddresses = data;
        break;
      default:
        break;
    }
  }

  getData(type: string): any {
    switch (type) {
      case "personData":
        return this.personData;
      case "address":
        return this.addresses;
      case "prison":
        return this.prisoners;
      case "probation":
        return this.probations;
      case "employment":
        return this.employerAddresses;
      default:
        break;
    }
  }

  getHeaderDetals(): Observable<any> {
    const apiEndPoint = this.basePath + "/user";
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.httpClient.get(apiEndPoint, httpOptions);
  }

  getSummary(data: SearchFormModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    const apiEndPoint = this.basePath + "/summary";

    return this.httpClient.post(apiEndPoint, data, httpOptions);
  }

  getDetails(data: any) {
    const apiEndPoint = this.basePath + "/detail"; // http://localhost:7001/addresssearch2/api/detail"
    return this.httpClient.post(apiEndPoint, data);
  }
}

// Content-Type:application/json
