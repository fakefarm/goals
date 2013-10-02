function CalculatorCtrl ($scope){

  $scope.setActive('calculator');

  $scope.calculateStats = function(time, freq) {
    return time * freq;
  };


  $scope.statSummary = function(goals){
    var sum = 0
      , goal;

    for (var i =0; i<goals.length; i++) {
      goal = goals[i];

      var stats = $scope.calculateStats(goal.time, goal.frequency);
      sum += stats;
    }
    return sum;
  };
}

// Array.prototype.sum = function() {
//   return this.reduce(function(a,b){return a+b;});
// };

// function CalculatorCtrl ($scope){

//   $scope.setActive('calculator');

//   $scope.calculateStats = function(goal) {
//     return goal.time * goal.freq;
//   };

//   $scope.statSummary = function(goals){
//     var sum = 0;
//     for (var i =0; i<goals.length; i++) {
//       sum += $scope.calculateStats(goals[i]);
//     }
//     return sum;
//   };
// }