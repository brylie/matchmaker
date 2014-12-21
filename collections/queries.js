Queries = new Meteor.Collection('queries');
Queries.attachSchema(new SimpleSchema({
    query: {
        type: String,
        label: "Query"
    },
    author: {
        type: String,
        label: 'Author',
        autoValue: function () {
            return Meteor.userId();
        }
    }
}));
