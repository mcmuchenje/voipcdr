const express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    flash       = require("connect-flash"),
    LocalStrategy   = require("passport-local"),
    User        = require("./models/user")


//REQUIRING ROUTES    
const indexRoutes = require("./routes/index"),
      dashboardRoutes = require("./routes/main");

//MONGOOSE CONNECTION
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/voip", {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
}).then(res=> {
	console.log("Mongodb Connected!")
	}).catch(err => {
		console.log(Error, err.message);
    });

mongoose.set('useCreateIndex', true)

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "munyaradzi muchenje",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next(); 
});


app.use("/", indexRoutes);
app.use("/voice", dashboardRoutes);

app.listen(3000,'192.168.100.17', function(){
    console.log("VoIP Server has Started!");
});
