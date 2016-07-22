(function () {

  'use strict';

  angular.module('webflixApp')
    .controller('MoviesController', MoviesController);

  function MoviesController(allMovies, $rootScope) {
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

    /**
     * Get the next index by moving left or right a specified number of indexes.
     *
     * @param direction
     * @returns {*}
     */
    function getIndex(direction) {
      var idx = _.indexOf(vm.movies, vm.selectedMovie),
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
        var next = getIndex(direction);
        if (dontMoveIf(next)) return;
        selectMovie(vm.movies[next]);
      });
    }

    /**
     * Move us down in the list of movies.
     */
    Mousetrap.bind('j', function () {
      move(1, function (next) {
        return next > vm.movies.length - 1;
      });
    });

    Mousetrap.bind('k', function () {
      move(-1, function (next) {
        return next < 0;
      });
    });
  }
}());
