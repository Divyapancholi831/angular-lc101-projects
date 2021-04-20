import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   newMovie(newmovie:string)
   {
      let err='';
      if(newmovie === '')
      {
         err="movie title should not be blank";
      }
      else if(this.movies.includes(newmovie))
      {
         err="movie allready in list";
      }
      else{
         this.movies.push(newmovie);
      }
      
   }
}