//Routes pour application VDC utilisé avec Passport sur ce site: http://www.passportjs.org/docs/authenticate/

//Routes pour l'application
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

// Redirection si...
//A redirect is commonly issued after authenticating a request.
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',failureRedirect: '/login' }));

//Redirects are often combined with flash messages in order to display status information to the user.
app.post('/login',
   passport.authenticate('local', { successRedirect: '/',failureRedirect: '/login',failureFlash: true }));

//Disable sessions
app.get('/api/users/me',
   passport.authenticate('basic', { session: false }),
   function(req, res) {
     res.json({ id: req.user.id, username: req.user.username });
});
//Custom callback
app.get('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user.username);
      });
    })(req, res, next);
  });