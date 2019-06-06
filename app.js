var mongoclient = require("mongodb").MongoClient;
var url ="mongodb+srv://angela:glasgow24@carbsapp-hzcdu.mongodb.net/carbsDB?retryWrites=true";
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();
var mysql = require("mysql");
var port = process.env.PORT || 8082;

// Connecting to my remote mysql DB
/*app.use("/", function(req, res, next){
var con = mysql.createConnection({
         host: "remotemysql.com",
         user:"bupFWhT8t5",
         password: "HtaOPLrUi5",
         database: "bupFWhT8t5",
         port:3306
     });
	 con.query("SELECT * FROM mytable", function(err,rows){
		 if(err) throw err;
		 console.log(rows[0].name + " "+ rows[0].nutritionper100genergy);
	 });
	 next();
	 
}); 
*/

app.use(express.static("public"));
app.post("/users",urlencodedParser,function(req, res){
	res.send("Thank you, the data has been received.");
	console.log(req.body.firstname);
	console.log(req.body.lastname);
	console.log(req.body.email);
	console.log(req.body.pass_word);
	console.log(req.body.con_firm);
	mongoclient.connect(url, {useNewUrlParser:true}, function(err, db){
		if(err) throw err;
		console.log("Successful connection");
		var database = db.db("carbsDB"); 
		 var obj= {
			 firstname:req.body.firstname,
             lastname: req.body.lastname,
             email: req.body.email,
             pass_word: req.body.pass_word,
             con_firm: req.body.con_firm		 
		 };
		database.collection("users").insertOne(obj, function(err, result){
		  if(err) throw err;
		  console.log("Data has beeb added to the database");
		  
		});
		
	});
	
});


	// Route for querying all food types -
	app.get("/foods", function(req, res){
		var con = mysql.createConnection({
         host: "remotemysql.com",
         user:"bupFWhT8t5",
         password: "HtaOPLrUi5",
         database: "bupFWhT8t5",
         port:3306
     });
		
		con.query("SELECT * FROM  mytable limit 15", function(err, result){
			 if(err) throw err;
			 res.json(result);
		});
		
	});





app.get("/", function(req, res){
	res.send("Hello, my server is working.");
	console.log(" The server is listening at port" + port);
});

// Route to handle the path(home)
app.get("/home", function(req, res){
	res.sendFile(path.join(__dirname + "/home.html"));
});

// route to handle the path(/food)
app.get("/fooditem", function(req, res){
	res.sendFile(path.join(__dirname + "/food.html"));
});

// Route to handle the path(/login)
app.get("/login", function(req, res){
	res.sendFile(path.join(__dirname + "/login.html"));
});

// Route to handle the path(register)
app.get("/register", function(req, res){
	res.sendFile(path.join(__dirname + "/register.html"));
});

app.listen(port);


