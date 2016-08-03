(function () {
  'use strict';

  angular.module('webflixApp', [
    'ui.router', 
    'ui.bootstrap',
    'webflixApp.filters'
  ])
    .config(config);

  function config($stateProvider, $urlRouterProvider, $httpProvider, storageProvider) {
    
    storageProvider.setPrefix('webflixApp');
    
    /**
     * Default state
     */
    $urlRouterProvider.otherwise('/movies');

    /**
     * State provider
     */

    // TODO: Use ui-router resolve function to initialize movies. Will make movies array available in child states.
    // TODO: Make a child state for individual movie view.
    $stateProvider
      .state('movies', {
        url: '/movies',
        templateUrl: 'build/partials/movies/movies.html',
        controller: 'MoviesController',
        controllerAs: 'moviesCtl',
        resolve: {
          allMovies: function (MoviesService) {
            return MoviesService.getMovies();
          }
        }
      })
      .state('movies.movie', {
        url: '/:movieId',
        templateUrl: 'build/partials/movie/movie.html',
        controller: 'MovieController',
        controllerAs: 'movie',
        resolve: {
          movie: function (allMovies, $stateParams) {
            return _.find(allMovies, {id: parseInt($stateParams.movieId, 10)});
          }
        }
      });
      // .state('search', {
      //   url: '/search/:keyword',
      //   templateUrl: 'build/partials/movies/search.html',
      //   controller: 'SearchController',
      //   controllerAs: 'search',
      //   resolve: {
      //     searchResults: function (MoviesService, $stateParams) {
      //       return MoviesService.search($stateParams.keyword);
      //     }
      //   }
      // });
  }

}());
