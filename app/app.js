angular.module('app', ['controllers']).
    config(function($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl:'/app/partials/basic-template.html', controller:'AboutCtrl'}).
            when('/experiments', {templateUrl:'/app/partials/basic-template.html', controller:'ExperimentsCtrl'   }).
            when('/home', {templateUrl:'/app/partials/basic-template.html', controller:'HomeCtrl'   }).
            when('/phones', {templateUrl:'/app/partials/phones.html', controller:'PhoneListCtrl'   }).
            otherwise({redirectTo:'/home'});
    });

