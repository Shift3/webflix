(function () {

  'use strict';

  angular.module('webflixApp')
    .controller('MoviesController', MoviesController);

  function MoviesController(allMovies, $rootScope, storage) {
    var vm = this;

    vm.filterRating = storage.get('filterRating') || 0;
    vm.movies = allMovies;
    vm.selectedMovie = allMovies[0];
    vm.selectMovie = selectMovie;
    vm.filterByRating = filterByRating;

    /**
     * Filter a movie by the currently selected rating.
     *
     * @param movie
     * @returns {boolean}
     */
    function filterByRating(movie) {
      return movie.webflixRating >= vm.filterRating;
    }

    /**
     * Select a movie.
     *
     * @param movie
     */
    function selectMovie(movie) {
      vm.selectedMovie = movie;
    }

    /**
     * Get the next index by moving left or right a specified number of indexes.
     *
     * @param direction
     * @returns {*}
     */
    function getIndex(direction) {
      var filteredMovies = _.filter(vm.movies, vm.filterByRating),
        idx = _.indexOf(filteredMovies, vm.selectedMovie),
        next = idx + direction;
      
      return next;
    }

    /**
     * Move up or down based on some condition.
     *
     * @param direction
     * @param dontMoveIf
     */
    function move(direction, dontMoveIf) {
      $rootScope.$apply(function () {
        var next = getIndex(direction), _movies;
        if (dontMoveIf(next)) return;
        _movies = _.filter(vm.movies, vm.filterByRating);
        selectMovie(_movies[next]);
      });
    }

    /**
     * Move us down in the list of movies.
     */
    Mousetrap.bind('j', function () {
      move(1, function (next) {
        var filteredMovies = _.filter(vm.movies, vm.filterByRating);
        return next > filteredMovies.length - 1;
      });
    });

    Mousetrap.bind('k', function () {
      move(-1, function (next) {
        return next < 0;
      });
    });
  }
}());
