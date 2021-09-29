const connectToMongo = require('./db')
const express = require('express');

const encrypt = require("mongoose-encryption");

const mongoose = require("mongoose");

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const app = express();

const session = require('express-session');

const passport = require("passport");

connectToMongo();
const app = express();

app.use(express.json())

app.use(session({  //read docs to know more about these terms @express - sessions-npm. here we set up the session with some initial settings given in docs.

    secret:"our little secret",
    resave : false,
    saveUninitialized: false
}));

const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

app.use(express.urlencoded({extended:true}));



app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/ClassRoom" ,{useNewUrlParser:true});

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    googleId:String,
    googleEmail:String,
    


});

userSchema.plugin(passportLocalMongoose); //here we enabled the passportLocalMiong..to act on our userSchema.

userSchema.plugin(findOrCreate);

const User = new mongoose.model("User" , userSchema);
passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });


  passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID ,//need to take
    clientSecret: process.env.CLIENT_SECRET,//need to take
    callbackURL: "http://localhost:3000/auth/google/home",  //this is imp  **********************************

   
  },


//   here in this below functio the findorCreate is not a method in mongo it is just a pseudo code telling us to write their a function that finds or creat the user but we are using a pacakage to make the method work instead of making a function ourselves. 

function(accessToken, refreshToken, profile,    done) {
    //   console.log(profile);
       User.findOrCreate({ googleId: profile.id } ,{googleEmail:profile.emails}, function (err, user) {
         return done(err, user);
       });
  }
));

app.post("/register" , (req , res)=>{
    User.register({username:req.body.username} , req.body.password  , (err , user)=>{  //check form where this .register method came 

        if(err){
            console.log("error while registaring the user..");
            res.send("register again");
        }
        else{
            passport.authenticate("local")(req ,res ,()=>{
                res.send("this is the home page");
            });
        }
    });

    
    });
    app.post("/login" , (req ,res)=>{

        const user = new User( {
    
    
            username:req.body.username,
            password:req.body.passport
    
    
        });
    
        req.login(user , (err)=>{ //this req.login is the method from passport read docs.
    
            if(err){
                console.log("error at login the user.");
            }else{ 
                passport.authenticate("local")(req , res ,()=>{
                    res.redirect("/home"); //********** */
                })
            }
        });
        
    });

   
    app.get("/",  (req,res)=>{

        res.send("this is home page");//**** */
    });
    
    app.get("/login",  (req,res)=>{
    
        res.send("this is login page");//***** */
    });
    
    
    app.get('/auth/google',
      passport.authenticate('google', { scope: ["profile"] }));//this bring s the page to sign in with google and the "profile" sends us the profile of the user form google.
    //  in this example, will redirect the user to the home page after he is authenticated by google.
    
    app.get('/auth/google/secrets',//<= doubt what is secret here. 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/home');//********************** */
    });
    


    
app.get("/register",  (req,res)=>{

    res.send("this is the registration page");//************************** */
 
 
 });



 app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/front');
  });
// The app.use() function is used to mount the specified middleware function(s) at the path which is being specified.
// app.use(path, callback)
app.use('/api/course', require('./routes/courses'))

// express listens to the port for requests

















const port = 5000;

app.listen(port, ()=>{
    console.log(`The server is listening at http//:localhost:${port}`);
})