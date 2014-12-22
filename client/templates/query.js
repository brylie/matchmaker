Template.showResponses.helpers({
    responses : function () {
        // Set a session variable to be used in the addResponse template
        Session.set('queryId', this._id);

        // Get all responses related to the current query
        return Responses.find({queryId: this._id});
    }
});

Template.addResponse.events({
    'click #submitResponse' : function (event) {
        event.preventDefault();

        // Get the values for the response
        var response = $('#yourResponse').val();
        var authorId = Meteor.userId();
        var queryId = Session.get('queryId');

        // Insert the response into the database
        Responses.insert({
            authorId: authorId,
            response: response,
            queryId: queryId
        });

        // Reset the form field value to blank
        $('#yourResponse').val('');
    }
});
