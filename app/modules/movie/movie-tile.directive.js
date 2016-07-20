(function () {

  'use strict';

  angular.module('webflixApp')
    .directive('movieTile', movieTile);

  function movieTile() {
    function controller() {}
    
    return {
      restrict: 'E',
      controller: controller,
      controllerAs: 'movietile',
      bindToController: true,
      scope: {
        movie: '=',
        selectedMovie: '='
      },
      templateUrl: 'build/partials/movie/movie-tile.html'
    };
  }

}());

