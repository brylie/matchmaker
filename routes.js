Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('hello');
});

Router.route('/me');

//// Example route
//Router.route('/', function () {
//  this.render('hello', {
//    data: function () { return Items.findOne({_id: this.params._id}); }
//  });
//});
