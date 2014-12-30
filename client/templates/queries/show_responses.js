Template.showResponses.helpers({
    responses : function () {
        // Set a session variable to be used in the addResponse template
        Session.set('queryId', this._id);

        // Get all responses related to the current query
        return Responses.find({queryId: this._id});
    }
});
