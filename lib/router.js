Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('hello');
});

Router.route('/me');

Router.route('/queries');

Router.route('/query/:_id', function () {
  this.render('query', {
    data: function () {
      return Queries.findOne({_id: this.params._id});
    }
  });
});

//// Example route
//Router.route('/', function () {
//  this.render('hello', {
//    data: function () { return Items.findOne({_id: this.params._id}); }
//  });
//});
