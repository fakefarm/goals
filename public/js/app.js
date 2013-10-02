/**
* goalies Module
*
* What would you like to know?
*/
angular.module('goalies', [])
  .config(goaliesRouter);


function goaliesRouter ($routeProvider) {

  $routeProvider

    .when('/',
      { templateUrl: 'partials/welcome.html',
      controller: function($scope){
        $scope.setActive('welcome');
      }})

    .when('/calculator',
      { templateUrl: 'partials/time_calculator.html',
      controller: 'CalculatorCtrl'})

    .when('/goals',
      { templateUrl: 'partials/goal_index.html',
      controller: 'GoalsCtrl'})

    .when('/about',
      { templateUrl: 'partials/about.html',
      controller: 'AboutCtrl'});
}

