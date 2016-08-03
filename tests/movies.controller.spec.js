describe('MoviesController', function () {

  beforeEach(module('webflixApp'));

  var controller,
    allMovies = [1, 2, 3];

  beforeEach(inject(function($controller){
    controller = $controller('MoviesController', {
      allMovies: allMovies 
    });
  }));

  describe('filterRating', function () {
    it('should be set to 0 by default', function () {
      expect(controller.filterRating).toBe(0); 
    }); 
  });
  
  describe('movies', function () {
    it('should be set to whatever is resolved in', function () {
      expect(controller.movies).toBe(allMovies);
    }); 
  });
  
  describe('selectedMovie', function () {
    it('should be set to the first thing in the movies array', function () {
      expect(controller.selectedMovie).toBe(allMovies[0]);
    });
  });
 
  describe('the select movie function', function () {
    it('should be a function', function () {
      expect(angular.isFunction(controller.selectMovie)).toBeTruthy();
    });
    
    it('should set on the controller instance the new selected movie', function () {
      var newMovie = 'Shawshank Redemption';
      expect(controller.selectedMovie).toBe(allMovies[0]);
      controller.selectMovie(newMovie);
      expect(controller.selectedMovie).toBe(newMovie);
    });
  });
  
  describe('filter by rating function', function () {
    it('should be a function', function () {
      expect(angular.isFunction(controller.filterByRating)).toBeTruthy();
    });
    
    it('should return true if webflixRating is greater than filterRating', function () {
      var res;
      
      controller.filterRating = 0;
      
      res = controller.filterByRating({
        webflixRating: 1
      });
      
      expect(res).toBeTruthy(); 
    });
    
    it('should return false if webflixRating is less than filterRating', function () {
      var res;

      controller.filterRating = 4;

      res = controller.filterByRating({
        webflixRating: 1
      });

      expect(res).toBeFalsy();
    });
  });
  
  
});