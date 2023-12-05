const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const models = require('./app/models');
const dbConfig = require("./app/config/db.config");
var passport = require('passport')
let authRouts = require("./app/routes/auth.routes")
let userRouts = require("./app/routes/user.routes")

const app = express();

models.sequelize.sync({}).then(() => {
  console.log("table created-----------")
});

// app.use(cors());
/* for Angular Client (withCredentials) */
app.use(
  cors({
    origin: "https://expense-app-99c18.web.app",
    //  origin: "http://localhost:4200",
    credentials: true,
  })
);
app.use(passport.initialize());
require('./config/passport')(passport);
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true
  })
);

const db = require("./app/models");
const Role = db.role;

// db.mongoose
//   .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//     initial();
//   })
//   .catch(err => {
//     console.error("Connection error", err);
//     process.exit();
//   });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();

})

// require("./app/routes/auth.routes")(app);
// require("./app/routes/user.routes")(app);
app.use('/api/auth', authRouts);
app.use('/api/test', userRouts);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
