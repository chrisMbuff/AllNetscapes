/*
  code built with help from Chris Booth
  Modified dle code for sending to DB
  includes code referenced from BSP documentation - blluetooth-serial-port https://www.npmjs.com/package/bluetooth-serial-port
  & ref from express docs - https://expressjs.com/en/guide/routing.html
  & json body parser - https://www.npmjs.com/package/body-parser-json
  & path - https://nodejs.org/api/path.html
  & ref Mongo Client - https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html
*/

var express = require('express');
var app = express();

var path = require('path');
var MongoClient = require('mongodb').MongoClient

var db = require('./config/db.js');

//below: Create bluetooth connection
var btConn = require('bluetooth-serial-port');  // include Bluetooth serial
var serial = new btConn.BluetoothSerialPort();
var btAddress;


serial.on('found', function returnFound(btAddress, name) { //run function every time found event happens, returns address and name of found device
    if (name == 'HC-05') {
      serial.findSerialPortChannel(btAddress, function(channel) { //checks if device has serial port running, returns channel you need to use
        serial.connect(btAddress, channel, function connectSuccess() {  //connect to remote bluetooth device, only connects when function gets called - asynchronus/runs in bg
        serial.write(new Buffer('a', 'utf-8'), function(err, bytesWritten) { //write to bluetooth device - 'a' is setup to turn LED on
        });
      });
    });
  }
});

serial.inquire(); //Start searching for bluetooth device - asynchronous/runs in bg


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/range_sliders'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/range_sliders/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.post('/add', (req, res) => {
    serial.write(new Buffer('a', 'utf-8'), function(err, bytesWritten) { //write to bluetooth device - 'b' is begin RGB & breathe
        });

    var name = "Steph";
    var careIn = req.body.careIn;
    var orgaIn = req.body.orgaIn;
    var discIn = req.body.discIn;
    //agree vars
    var kindIn = req.body.kindIn;
    var trustIn = req.body.trustIn;
    var helpIn = req.body.helpIn;
    //neur vars
    var calmIn = req.body.calmIn;
    var secuIn = req.body.secuIn;
    var selfIn = req.body.selfIn;
    //open vars
    var imagIn = req.body.imagIn;
    var variIn = req.body.variIn;
    var indIn = req.body.indIn;
    // extra vars
    var socIn = req.body.socIn;
    var funIn = req.body.funIn;
    var affIn = req.body.affIn;

    console.log("Write to database")
    console.log(req.body.orgaIn)

    //format the data for the mongoDB
    var mongoLog = [{
        "name": "Steph",
        "Data_Canoe": {
            "Conscientiousness": {
        "Care": req.body.careIn,
        "Orga": req.body.orgaIn,
        "Disc": req.body.discIn
    },
    "Agreeableness": {
        "Kind": req.body.kindIn,
        "Trust": req.body.trustIn,
        "Help": req.body.helpIn
    },
    "Neuroticism": {
        "Calm": req.body.calmIn,
        "Secure": req.body.secuIn,
        "Self": req.body.selfIn
    },
    "Openness": {
        "imag": req.body.imagIn,
        "Variety": req.body.variIn,
        "Ind": req.body.indIn
    },
    "Extraversion": {
        "Sociable": req.body.socIn,
        "Fun": req.body.funIn,
        "Affect": req.body.affIn
    }
        }
    }]

    //connect to the client
    MongoClient.connect(db.url, function (err, db) {
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
});
