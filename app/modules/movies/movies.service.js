(function () {

  'use strict';

  angular.module('webflixApp')
    .service('MoviesService', MoviesService);

  MoviesService.$inject = ['Movie', '$http'];

  function MoviesService(Movie, $http) {

    var vm = this;

    vm.getMovies = getMovies;
    vm.makeMovies = makeMovies;
    vm.movies = [];

    function getMovies() {
      return $http.get('http://api.themoviedb.org/3/genre/18/movies?api_key=ff562fe235d88443c78581b04f7edb57')
        .then(function (res) {
          return vm.makeMovies(res.data.results);
        }, function (err) {
          console.log(err);
          return 'Sorry, there was a problem getting movies.';
        });
    }

    function makeMovies(data) {
      _.forEach(data, function (l) {
        if (/Wife/.test(l.title)) return; //naughty movie poster the api is returning
        vm.movies.push(new Movie(l));
      });
      
      return vm.movies;
    }
  }

}());
