function GoalsCtrl ($scope) {

  $scope.setActive('goals');

  $scope.setGoal = function (id) {
    $scope.currentGoal = $scope.goals[id];
  };

  $scope.editGoal = function (id) {
    $scope.editing = $scope.goals[id];
  };

  $scope.currentGoalPartial   = 'partials/current_goal.html';
  $scope.editGoalForm         = 'partials/edit_goal.html';

}