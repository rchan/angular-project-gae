import webapp2
import json
from google.appengine.ext import ndb


class Project(ndb.Model):
    name = ndb.StringProperty(required=True);
    site = ndb.StringProperty(required=True);
    description = ndb.StringProperty(required=True);

    def update(self,newdata):
        for key,value in newdata.items():
            setattr(self,key,value)


class Rest(webapp2.RequestHandler):

    def post(self):
        #pop off the script name ('/api')
        self.request.path_info_pop()
        #Load the JSON values that were sent to the server
        dictionary = json.loads(self.request.body)
        try:
            #initialize the Data object using coming dictionary
            newObject = globals()[self.request.path_info[1:]](**dictionary)
            #Returns the ID that was created
            result = { 'id' : newObject.put().id() }
            self.response.write( json.dumps(result) )
        except:
            split = self.request.path_info[1:].split('/')
            #Convert the ID to an int, create a key and retrieve the object
            item = globals()[split[0]].get_by_id(int(split[1]))
            item.update( dictionary )
            item.put()

    def get(self):
        #pop off the script name ('/api')
        self.request.path_info_pop()
        #forget about the leading '/' and seperate the Data type and the ID
        split = self.request.path_info[1:].split('/')
        #If no ID, then we will return all objects of this type
        if len(split) == 1:
            everyItem = []
            for item in globals()[split[0]].query():
                item_dict = item.to_dict()
                item_dict['id'] = item.key.id()
                everyItem.append(item_dict)
            #Write JSON back to the client
            self.response.write(json.dumps(everyItem))
        else:
            #Convert the ID to an int, create a key and retrieve the object
            item = globals()[split[0]].get_by_id(int(split[1]))
            item_dict = item.to_dict()
            item_dict['id'] = item.key.id()
            #Return the values in the entity dictionary
            self.response.write(json.dumps(item_dict))

    def delete(self):
        #pop off the script name ('/api')
        self.request.path_info_pop()
        #forget about the leading '/' and seperate the Data type and the ID
        split = self.request.path_info[1:].split('/')
        ndb.Key(split[0], int(split[1])).delete()


app = webapp2.WSGIApplication([('/api.*', Rest)], debug=True)

