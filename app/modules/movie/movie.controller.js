angular.module('webflixApp')
  .controller('MovieController', MovieCtrl);

function MovieCtrl(movie) {
  debugger;
  this.movie = movie; 
}