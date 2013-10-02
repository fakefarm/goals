function CategoryCtrl ($scope, $routeParams){
  $scope.goalUrl = $routeParams.goalName;
  $scope.currentGoal = $scope.goalUrl;
  // $scope.currentGoal = $scope.goals[$routeParams.goalName]
}