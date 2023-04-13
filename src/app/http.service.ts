import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  movieName: string = '';
  // movie: any = null;
  apiKey: string = 'baea9773';

  constructor(private http: HttpClient) { }
  getMovie(){
    console.log("getMovie by service" + " " + this.movieName);
    const url = `http://www.omdbapi.com/?t=${this.movieName}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}
