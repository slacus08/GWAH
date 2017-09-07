var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressValidator = require('express-validator');
module.exports = function(app,passport){


  app.get('/', function(req, res) {
          res.render('signin.handlebars');
      });

 app.get('/signup', function(req, res) {
         res.render('signup.handlebars');
     });


app.get('/signin', function(req, res) {
        res.render('signin.handlebars');
    });



app.post('/signup', passport.authenticate('local-signup',{
  successRedirect: '/signin',
  failureRedirect: '/signup'
  }
    ));

app.get('/dashboard', isLoggedIn, function(req, res) {
    res.render('dashboard.handlebars', {
        user : req.user
            });
        });


app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.post("/signup", function(req, res) {
	console.log(req.body);

  req.checkBody('firstname', 'Name is required').notEmpty();
  req.checkBody('lastname', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('username', 'Username is required').notEmpty();

  var errors = req.validationErrors();

  if(errors){
    res.render('signup',{
      errors:errors});

  } else {
	db.Post.create({
    email: req.body.password,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username
	})
	.then(function(dbPost) {
		res.json(dbPost);
	});
  req.flash('success_msg', 'You are registered and can now login');

  res.redirect('/signin');
}
});


app.post('/signin',
  passport.authenticate('local-signin',
    { successRedirect: '/dashboard',
      failureRedirect: '/signin'}
          ));


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}

app.get('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/signin');
});


}
