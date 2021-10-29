//////////////////////////////////////////////////////////////////////////
//localStrategy.js
//The following code sets up the app with authentication using
//the 'local' strategy in passport.js.
//////////////////////////////////////////////////////////////////////////
import passportLocal from 'passport-local'; 
import User from '../models/User.js';


passport.use(new passportLocal.Strategy({passReqToCallback: true},
    //Called when user is attempting to log in with local username and password. 
    //userId contains the email address entered into the form and password
    //contains the password entered into the form.
    async (req, userId, password, done) => {
      let thisUser;
      try {
        thisUser = await User.findOne({id: userId});
        if (thisUser) {
          if (thisUser.password === password) {
            return done(null, thisUser);
          } else {
            req.authError = "The password is incorrect. Please try again" + 
                             " or reset your password.";
            return done(null, false)
          }
        } else { //userId not found in DB
          req.authError = "There is no account with email " + userId + 
                          ". Please try again.";
          return done(null, false);
        }
      } catch (err) {
        return done(err);
      }
    }
  ));
  