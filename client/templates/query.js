Template.showResponses.helpers({
    'responses' : function () {
        Session.set('queryId', this._id);
        return Responses.find({queryId: this._id});
    }
});

Template.addResponse.events({
    'click #submitResponse' : function (event) {
        event.preventDefault();
        var response = $('#yourResponse').val();
        var authorId = Meteor.userId();
        var queryId = Session.get('queryId');

        Responses.insert({
            authorId: authorId,
            response: response,
            queryId: queryId
        });
    }
});
