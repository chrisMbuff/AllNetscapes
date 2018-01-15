//Setup the MongoDB
var MongoClient = require('mongodb').MongoClient;
//URL of the database
//dbuser1 - username of the database
//dbuser1pass - password for the user
//file-test - name of the database
var url = 'mongodb://dbuser1:dbuser1pass@ds161022.mlab.com:61022/file-test';

//the setInterval function process the content every 1000ms
setInterval(function(){
	//get a random value, and assign it a new variable
	var random = (Math.random(100)) * 100;
	//format the date and time to use for the value log
	var date = new Date();
	//print to the console the date and the random value	
	console.log(date +": "+ random);

	//create a seconds variable to use for minute validation
	//var seconds = new Date();	
	
	//if the seconds equal to 0, then store the values to the db
	//if(seconds.getSeconds() == 0){
		console.log("Write to database")

		//format the data for the mongoDB
		var mongoLog = [{
			time: date,
			value: random
		}]

		//connect to the client
		MongoClient.connect(url, function (err, db) {
			if(err){
				console.log(err);
			}
			//Collection1 is the name of the db's collection
			var col = db.collection('Collection1');
			//insert the results, and close the connection
			col.insert(mongoLog, function(err, result){
				db.close();
			});
			console.log("Connected to server");
		}); 
	//}
}, 5000);