Meteor.methods({
    'getResponses': function (queryId) {
        return Responses.find({queryId: queryId});
    }
});
