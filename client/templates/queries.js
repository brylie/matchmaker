Template.queries.helpers({
    'queries': function () {
        console.log("Finding queries.");
        return Queries.find().fetch();
    }
});
