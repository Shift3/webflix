(function () {

  'use strict';

  angular.module('webflixApp')
    .controller('MoviesController', MoviesController);

  function MoviesController(allMovies) {
    var vm = this;

    vm.movies = allMovies;
    vm.selectedMovie = allMovies[0];
    vm.selectMovie = selectMovie;

    /**
     * Select a movie.
     * 
     * @param movie
     */
    function selectMovie(movie) {
      vm.selectedMovie = movie; 
    }
  }

}());
