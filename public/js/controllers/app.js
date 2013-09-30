function AppCtrl($scope){

  $scope.setActive = function(type) {
    $scope.welcomeActive = '';
    $scope.goalsActive = '';
    $scope.calculatorActive = '';
    $scope.aboutActive = '';

    $scope[type + 'Active'] = 'active';
  };

  $scope.goals = {
    1 : {
      id: 1,
      name: 'learn Angular',
      category: 'personal',
      text: "I'm enjoying what I'm learning so far!"
    },
    2 : {
      id: 2,
      name: 'Earn more money',
      category: 'responsibilities',
      text: "The best way to do that is by learning Angular"
    },
    3 : {
      id: 3,
      name: 'Buy Flowers for Danae',
      category: 'relational',
      text: 'I need to thank her for being so sweet, letting me work late on Angular'
    },
  };

  // partials
  $scope.logo                 = 'partials/logo.html';
  $scope.github               = 'partials/github.html';
  $scope.currentGoalPartial   = 'partials/current_goal.html';
  $scope.editGoalForm         = 'partials/edit_goal.html';
  $scope.navigation           = 'partials/navigation.html';

  $scope.setGoal = function (id) {
    $scope.currentGoal = $scope.goals[id];
  };

  $scope.editGoal = function (id) {
    $scope.editing = $scope.goals[id];
  };
}

