Template.showResponses.helpers({
    'responses' : function () {
        return Responses.find({queryId: this._id});
    }
});
