Responses = new Meteor.Collection('responses');
Responses.attachSchema(new SimpleSchema({
    response: {
        type: String,
        max: 1000,
        label: "Response",
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
        },
        authorId: {
            type: String,
            label: "Author",
            autoValue: function () {
                console.log("User ID: " + this.userId);
                return this.userId;
            }
        },
        queryId: {
            type: String,
            label: "Query ID"
        }
    }));
