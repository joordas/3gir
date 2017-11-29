// require("dotenv").config({ path: __dirname + "/process.env" });
require("dotenv").config({
  path: process.env.HOME + "/var/www/3gir.com/process.env"
});

var express = require("express");
var app = express();
var path = require("path");
var mailer = require("express-mailer");
var bodyParser = require("body-parser");

app.use("/public", express.static("public")); //serve public folder with /public prefix

app.set("views", __dirname + "/public/views");
app.set("view engine", "pug");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

mailer.extend(app, {
  from: "app@3gir.com",
  host: "smtp.zoho.eu", // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: "SMTP", // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSWORD
  }
});

app.post("/contact", function(req, res) {
  if (!req.body) {
    console.log("didn't work.");
    res.redirect("back");
    return;
  }
  app.mailer.send(
    "email",
    {
      to: "contact@3gir.com",
      subject: req.body.subject,
      messageContent: req.body.messageContent
    },
    function(err) {
      if (err) {
        console.log("Sending Mail Failed!");
        console.log(err);
        return;
      }
      console.log("sent");
      console.log(req.body);
      res.redirect("back");
    }
  );
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(3000, function() {
  console.log(process.env.MAILER_EMAIL);
  console.log("Magic is happening on port 3000!");
});
