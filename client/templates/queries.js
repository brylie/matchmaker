Template.queries.helpers({
    'queries': function () {
        return Queries.find().fetch();
    }
});

Template.submitQuery.events({
    'click #submitQueryButton' : function (event) {
        event.preventDefault();

        // Get the query values
        var query = $('#yourQuery').val();
        var authorId = Meteor.userId();

        // Insert the response into the database
        Queries.insert({
            query: query,
            authorId: authorId
        });

        // Reset the form field value to blank
        $('#yourQuery').val('');
    }
});
