function AppCtrl($scope){

  $scope.setActive = function(type) {
    $scope.welcomeActive = '';
    $scope.goalsActive = '';
    $scope.calculatorActive = '';
    $scope.aboutActive = '';
    $scope.progressActive = '';

    $scope[type + 'Active'] = 'active';
  };

  $scope.goals = [
    {
      id: 1,
      name: 'learn Angular',
      category: 'personal',
      text: "I'm enjoying what I'm learning so far!",
      frequency: 0,
      time: 0,
      week: "day"
    },
    {
      id: 2,
      name: 'Earn more money',
      category: 'responsibilities',
      text: "The best way to do that is by learning Angular",
      frequency: 0,
      time: 0,
      week: "day"
    },
    {
      id: 3,
      name: 'Buy Flowers for Danae',
      category: 'relational',
      text: 'I need to thank her for being so sweet, letting me work late on Angular',
      frequency: 0,
      time:  0,
      week: "day"
    },
  ];


  // partials
  $scope.logo                 = 'partials/logo.html';
  $scope.github               = 'partials/github.html';
  $scope.navigation           = 'partials/navigation.html';
}

