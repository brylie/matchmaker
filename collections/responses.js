Responses = new Meteor.Collection('responses');
Responses.attachSchema(new SimpleSchema({
    response: {
        type: String,
        max: 1000,
        label: "Response"
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return Meteor.userId();
        }
    },
    toQuery: {
        type: String,
        label: "Query ID",
        autoValue: function () {
            return this._id;
        }
    }
}));
