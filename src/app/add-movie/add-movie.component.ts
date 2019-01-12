import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie = new Movie();
  constructor() { }

  ngOnInit() {
  }

  formOnSubmit(movieForm) {
    alert('wysylamy!');
    console.log(movieForm);
    movieForm.resetForm();
  }
}
