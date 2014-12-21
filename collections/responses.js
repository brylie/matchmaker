Responses = new Meteor.Collection('responses');
Responses.attachSchema(new SimpleSchema({
    response: {
        type: String,
        label: "Response"
    },
    author: {
        type: String,
        label: "Author"
    }
}));
