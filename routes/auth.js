const Authentication = require('../controllers/authentication');
const passport = require('passport');

require('../services/passport');

const requireAuth = passport.authenticate('jwt', {
    session: false
});
const requireSignIn = passport.authenticate('local', {
    session: false
});

module.exports = app => {
    app.post('/signin', requireSignIn, Authentication.signin);
    app.post('/signup', Authentication.signup);
    app.post('/get-user', requireAuth, (req, res) => {
        const user = {
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            email: req.user.email
        };
        res.send(user);
    })
}