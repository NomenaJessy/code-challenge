import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  getArticles(){
    return this.http.get(base_url);
  }
}
