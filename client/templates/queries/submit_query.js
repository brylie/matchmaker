Template.submitQuery.events({
    'click #submitQuery' : function (event) {
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
