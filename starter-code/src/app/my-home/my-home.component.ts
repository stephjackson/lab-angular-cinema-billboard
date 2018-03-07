import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [MovieService]
})
export class MyHomeComponent implements OnInit {

  constructor(private movieList: MovieService) { }

  ngOnInit() {
  }

}
