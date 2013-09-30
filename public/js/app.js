/**
* goalies Module
*
* What would you like to know?
*/
angular.module('goalies', [])
  .config(goaliesRouter);


function goaliesRouter ($routeProvider) {
  $routeProvider
    .when('/',  { templateUrl: 'partials/welcome.html'})
    .when('/calculator',  { templateUrl: 'partials/time_calculator.html'})
    .when('/goals', { templateUrl: 'partials/goal_index.html'})
    .when('/about', { templateUrl: 'partials/about.html'})
    ;
}