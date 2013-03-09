angular.module('app', []).
    config(function($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl:'/app/partials/basic-template.html', controller:AboutCtrl}).
            when('/experiments', {templateUrl:'/app/partials/basic-template.html', controller:ExperimentsCtrl   }).
            when('/home', {templateUrl:'/app/partials/basic-template.html', controller:HomeCtrl   }).
            when('/phones', {templateUrl:'/app/partials/phones.html', controller:PhoneListCtrl   }).
            otherwise({redirectTo:'/home'});
    });

function AboutCtrl($scope) {
    $scope.title = 'About Page';
    $scope.body = 'This is the about page body';
}

function ExperimentsCtrl($scope) {
    $scope.title = 'Experiments Page';
    $scope.body = 'This is the about experiments body';
}

function HomeCtrl($scope) {
    $scope.title = 'Home Page';
    $scope.body = 'This is the about home body';
}

function PhoneListCtrl($scope) {
  $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
  ];
}
