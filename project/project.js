angular.module('project', ['datastore']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'project/list.html'}).
      when('/edit/:projectId', {controller:EditCtrl, templateUrl:'project/detail.html'}).
      when('/new', {controller:CreateCtrl, templateUrl:'project/detail.html'}).
      otherwise({redirectTo:'/'});
  });
 
 
function ListCtrl($scope, Project) {
  $scope.projects = Project.query();
}
 
 
function CreateCtrl($scope, $location, Project) {
  $scope.save = function() {
    Project.save($scope.project, function(project) {
      $location.path('/');
    });
  }
}
 
 
function EditCtrl($scope, $location, $routeParams, Project) {
  var self = this;
 
  Project.get({id: $routeParams.projectId}, function(project) {
    self.original = project;
    $scope.project = new Project(self.original);
  });
 
  $scope.isClean = function() {
    return angular.equals(self.original, $scope.project);
  }
 
  $scope.destroy = function() {
    self.original.destroy(function() {
      $location.path('/list');
    });
  };
 
  $scope.save = function() {
    $scope.project.update(function() {
      $location.path('/');
    });
  };
}
