function ProgressCtrl ($scope) {
  $scope.setActive('progress');

  $scope.entries = {
    1: {
      id: 1,
      title: 'A progress journal',
      date: '10/1/13',
      post: "I built this progress journal first, to review everything I've learned so far. I hope to use it to also keep track of questions, links, and other things as I learn more and more!",
      focus: ['nested controllers', 'getting the parts figured out'],
      resources: [
        ['lynda.com/AngularJS-tutorials/Up-Running-AngularJS/133318-2.html', 'Lynda\'s up and running with Angular'],
        ['thinkster.io','thinkster.io']
      ]
    }
  };

  $scope.entry = 'partials/entry.html';
  $scope.entryDetails = function(id){
    $scope.theEntry = $scope.entries[id];
  };
}