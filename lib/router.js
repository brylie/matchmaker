Router.configure({
    layoutTemplate: 'main',
    loadingTemplate: 'loading',
    waitOn: function () { return Meteor.subscribe('queries'); }
});

Router.route('/', function () {
    this.render('hello');
});

Router.route('/me');

Router.route('/queries');

Router.route('/query/:_id', {
    name: 'query',
    data: function () {
        return Queries.findOne({_id: this.params._id});
    }
});
});
