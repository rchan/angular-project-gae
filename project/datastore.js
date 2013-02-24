angular.module('datastore', ['ngResource']).
    factory('Project', function($resource) {

      var Project = $resource(
        '/api/Project/:id',
        {}, 
        { update: { method: 'POST' } }
      );
 
      Project.prototype.update = function(cb) {
        return Project.update({id: this.id},
            angular.extend({}, this, {_id:undefined}), cb);
      };
 
      Project.prototype.destroy = function(cb) {
        return Project.remove({id: this.id}, cb);
      };
 
      return Project;
    });
