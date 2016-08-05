describe('rating directive', function () {
  var $scope, $compile;
  
  beforeEach(module('webflixApp'));

  beforeEach(inject(function (_$rootScope_, _$compile_) {
    $scope = _$rootScope_.$new();
    $scope.movie = {webflixRating: 4};
    
    $compile = _$compile_;
  }));

  it('it should render five stars', function () {
    var element = $compile('<ratings movie="movie"></ratings>')($scope);
    $scope.$digest();
    expect(element.find('li i.fa-star').length).toBe(4);
    expect(element.find('li i.fa-star-o').length).toBe(1);
  });
  
  it('it should render an x to clear things out', function () {
    var element = $compile('<ratings movie="movie"></ratings>')($scope);
    $scope.$digest();
  
    expect(element.find('li i.fa.fa-times').length).toBe(1);
  });


});