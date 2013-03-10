angular.module('datastoreResource', ['ngResource']).
    factory('datastoreResource', function($resource) {

      function DatastoreResourceFactory(collectionName) {

          var Resource = $resource(
            '/api/' + collectionName + '/:id',
            {}, 
            { update: { method: 'POST' } }
          );
     
          Resource.prototype.update = function(cb) {
            return Resource.update({id: this.id},
                angular.extend({}, this, {_id:undefined}), cb);
          };
     
          Resource.prototype.destroy = function(cb) {
            return Resource.remove({id: this.id}, cb);
          };

          return Resource;

      };

      return DatastoreResourceFactory;
 
    });

angular.module('datastore', ['datastoreResource']).
    factory('Project', function(datastoreResource) {
      var Project = datastoreResource('Project')
      return Project;
    });
