//Setup the MongoDB
var MongoClient = require('mongodb').MongoClient;
//URL of the database, username, password, name of the database
var url = 'mongodb://username:password@ds129386.mlab.com:29386/netscapes';

//the setInterval function process the content every 1000ms
setInterval(function(){
	var name = bob;
	var careIn = 6;
	var orgaIn = 7;
	var discIn = 8;
	//agree vars
	var kindIn = 5;
	var trustIn = 6;
	var helpIn = 7;
	//neur vars
	var calmIn = 5;
	var secuIn = 4;
	var selfIn = 3;
	//open vars
	var imagIn =6;
	var variIn =5;
	var indIn = 4;
	// extra vars
	var socIn = 6;
	var funIn =5;
	var affIn = 4;
	console.log(name +" "+ agree);


		console.log("Write to database")

		//format the data for the mongoDB
		var mongoLog = [{
			"name": name,
			"Data_Canoe": {
				"Conscientiousness": {
            "Care": careIn,
            "Orga": orgaIn,
            "Disc": discIn
        },
        "Agreeableness": {
            "Kind": kindInput,
            "Trust": trustIn,
            "Help": helpIn
        },
        "Neuroticism": {
            "Calm": calmIn,
            "Secure": secuIn,
            "Self": selfIn
        },
        "Openness": {
            "imag": imagIn,
            "Variety": variIn,
            "Ind": indIn
        },
        "Extraversion": {
            "Sociable": socIn,
            "Fun": funIn,
            "Affect": affIn
        }
			}
		}]

		//connect to the client
		MongoClient.connect(url, function (err, db) {
			if(err){
				console.log(err);
			}
			//Collection1 is the name of the db's collection
			var col = db.collection('alldata');
			//insert the results, and close the connection
			col.insert(mongoLog, function(err, result){
				db.close();
			});
			console.log("Connected to server");
		});
	//}
}, 5000);
