Responses = new Meteor.Collection('responses');
Responses.attachSchema(new SimpleSchema({
    response: {
        type: String,
        max: 100,
        label: "Response"
    },
    authorId: {
        type: String,
        label: "Author",
        autoValue: function () {
            return Meteor.userId();
        }
    },
    queryId: {
        type: String,
        label: "Query ID",
        autoValue: function (query) {
            return query._id;
        }
    }
}));
