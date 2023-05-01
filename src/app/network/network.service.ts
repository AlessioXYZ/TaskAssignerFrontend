import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private _baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {
  }

  post<Type>(url: string, data: any) {
    return this.http.post<Type>(this._baseUrl + url, data);
  }

  get<Type>(url: string) {
    return this.http.get<Type>(this._baseUrl + url);
  }

  put<Type>(url: string, data: any) {
    return this.http.put<Type>(this._baseUrl + url, data);
  }

  delete(url: string) {
    return this.http.delete(this._baseUrl + url);
  }

  patch(url: string, data: any) {
    return this.http.patch(this._baseUrl + url, data);
  }

  head(url: string) {
    return this.http.head(this._baseUrl + url);
  }

  options(url: string) {
    return this.http.options(this._baseUrl + url);
  }
}
