angular.module('webflixApp')
  .directive('ratings', ratings);

function ratings() {
  function controller($window) {
    this.rateMovie = rateMovie;
    
    /**
     * Rate a given movie with a given rating.
     *
     * @param movie
     * @param rating
     */
    function rateMovie(movie, rating) {
      movie.webflixRating = rating;
      $window.localStorage.setItem(movie.id, rating);
    }
  }
  
  //Directive Definition Object or DDO
  return {
    restrict: 'E',
    controller: controller,
    controllerAs: 'ratings',
    bindToController: true,
    scope: {
      movie: '='
    },
    templateUrl: 'build/partials/ratings/ratings.html'
  };
}