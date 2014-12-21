// Publish all Queries
Meteor.publish('queries', function () {
    return Queries.find();
});
// Get responses for a given Query
Meteor.publish('queryResponses', function(queryId) {
    return Responses.find({queryId: queryId});
});

//Try to get the Query Responses by URL slug instead of DB Id?
//Meteor.publish('queryResponses', function(slug) {
//    query = Query.findOne({slug: slug});
//    return Responses.find({queryId: query._id});
//});
