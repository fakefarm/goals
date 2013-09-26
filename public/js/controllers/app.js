function GoalsCtrl($scope){
  $scope.goals = {
    1 : {
      id: 1,
      name: 'learn Angular',
      category: 'personal',
      time: 3
    },
    2 : {
      id: 2,
      name: 'Earn more money',
      category: 'responsibilities',
      time: 2.5
    },
    3 : {
      id: 3,
      name: 'Buy Flowers for Danae',
      category: 'relational',
      time: 5
    },
  };

  $scope.currentGoal = null;

  $scope.setGoal = function (id) {
    $scope.currentGoal = $scope.goals[id];
  };
}

