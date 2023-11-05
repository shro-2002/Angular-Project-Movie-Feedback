import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  trendingmovies: any[] = [];
  theatremovies: any[] = [];
  popularmovies: any[] = [];

  constructor(private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {

    this.http
    .get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies: any) => {
      this.trendingmovies=movies;
    });

  }

  getTheatreMovies() {

    this.http
    .get('http://localhost:4200/assets/data/theatre-movies.json')
    .subscribe((movies: any) => {
      this.theatremovies=movies;
    });

  }

  getPopularMovies() {

    this.http
    .get('http://localhost:4200/assets/data/popular-movies.json')
    .subscribe((movies: any) => {
      this.popularmovies=movies;
    });

  }

  gotomovie(type:string,id:string){
    this.route.navigate(['movie',type,id]);
  }


}
