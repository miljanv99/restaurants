import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pageUrl: string;

  constructor(private http: HttpClient) {
    this.pageUrl = environment.apiURL
   }

   getData(): Observable<any>{
    return this.http.get<[]>(this.pageUrl);
   }
}
