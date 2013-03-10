angular.module('controllers',[])
  .controller('AboutCtrl', ['$scope', function($scope){
    $scope.title = 'About Page';
    $scope.body = 'This is the about page body';
  }])
  .controller('ExperimentsCtrl', ['$scope', function($scope){
    $scope.title = 'Experiments Page';
    $scope.body = 'This is the Experiments page body';
  }])
  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = 'Home Page';
    $scope.body = 'This is the Home page body';
  }])
  .controller('PhoneListCtrl', ['$scope', function($scope){
    $scope.title = 'PhoneList Page';
      $scope.phones = [
        {"name": "Nexus S",
         "snippet": "Fast just got faster with Nexus S."},
        {"name": "Motorola XOOM™ with Wi-Fi",
         "snippet": "The Next, Next Generation tablet."},
        {"name": "MOTOROLA XOOM™",
         "snippet": "The Next, Next Generation tablet."}
      ];
  }])
;
