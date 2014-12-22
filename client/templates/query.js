Template.showResponses.helpers({
    'responses' : function () {
        Session.set('queryId', this._id);
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
