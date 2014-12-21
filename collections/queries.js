Queries = new Meteor.Collection('queries');
Queries.attachSchema(new SimpleSchema({
    query: {
        type: String,
        label: "Query"
    }
}));
