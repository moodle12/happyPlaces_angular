import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceserviceService {

  constructor(private http:HttpClient) { }
  placeApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/place",data)
  }
}
