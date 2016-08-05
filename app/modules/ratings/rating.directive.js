angular.module('webflixApp')
  .controller('RatingsCtrl', RatingsCtrl)
  .directive('ratings', ratings);

function RatingsCtrl() {
  console.log(this.movie);
  this.rateMovie = rateMovie;
  this.removeRating = removeRating;

  /**
   * Rate a given movie with a given rating.
   *
   * @param movie
   * @param rating
   */
  function rateMovie(movie, rating) {
    movie.webflixRating = rating;
    storage.set(movie.id, rating);
  }

  /**
   * Remove a rating.
   *
   * @param movie
   */
  function removeRating(movie) {
    movie.webflixRating = 0;
    storage.forget(movie.id);
  }
}

function ratings() {
  //Directive Definition Object or DDO
  return {
    restrict: 'E',
    controller: 'RatingsCtrl',
    controllerAs: 'ratings',
    bindToController: true,
    scope: {
      movie: '='
    },
    templateUrl: 'ratings/ratings.html'
  };
}