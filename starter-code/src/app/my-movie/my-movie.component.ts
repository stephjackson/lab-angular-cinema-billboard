import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [MovieService]
})
export class MyMovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieList: MovieService) { }
  movieId: number;
  movie: Object;

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.movieId = params['id']);
    this.movie = this.movieList.getMovie(this.movieId);
  }
}
