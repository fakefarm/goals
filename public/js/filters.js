angular.module('goaliesFilters', []).filter('parameratize', function(){
  return function(input){
    return input.replace(/\s+/g, '-').toLowerCase();
  };
});