import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movieName: string = '';
  movie: any = null;

  constructor(private http: HttpService){}

  searchMovie(){
    console.log("searchMovie by movieComponent " + this.movieName);
    this.http.movieName = this.movieName; // set the movie name in the HttpService
    this.http.getMovie().subscribe((data: any)=>{
      this.movie = data;
    });
  }
}
