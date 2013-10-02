function CategoryCtrl ($scope, $routeParams){
  $scope.currentGoal = $scope.goals[$routeParams.goalId]
}