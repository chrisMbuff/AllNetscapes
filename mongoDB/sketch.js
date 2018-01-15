var checkArrayLength = 0;
var circleObject = [];

function setup() {
  createCanvas(windowWidth,windowHeight); // auto sized canvas
  noStroke();
  readDatabase();
}

function readDatabase(){
  var url = 'https://api.mlab.com/api/1/databases/netscapes/collections/alldata?apiKey=vW5_FH8WlZm5O4qCB1rRW7e7FGug9YI5'
  loadJSON(url, drawData); //creates connection to our database
}

function draw(){
  if (second() == 0 || second() == 15 || second() == 30 || second() == 45){
	readDatabase(); //checks database for new entries every 15 seconds
  }
  for (var i=0; i<circleObject.length; i++) {
    circleObject[i].Circle();
    circleObject[i].motion();
    //circleObject[i].jitter();
    circleObject[i].destroy();
    //console.log(circleObject.length);
    if (circleObject[i].destroy() <= 0) {
      circleObject.splice(i,1);
    }
  }

}

function drawData(data) {
  console.log(data); // inspect the JSON
  background(70, 70, 70);
  //fill(0, 105, 105, 105);
  if (checkArrayLength != data.length-1){ //check if a new entry exists in the database array
    //BELOW: Pull conscientiousness section from DB
    var care = data[data.length-1].Data_canoe.Conscientiousness.Care; //get the properties of the new database entry
    var orga = data[data.length-1].Data_canoe.Conscientiousness.Orga; //Selects all the
    var disc = data[data.length-1].Data_canoe.Conscientiousness.Disc;
	//BELOW: Pull agreeableness section from DB
    var kind = data[data.length-1].Data_canoe.Agreeableness.Kind; //get the properties of the new database entry
    var trust = data[data.length-1].Data_canoe.Agreeableness.Trust; //Selects all the
    var help = data[data.length-1].Data_canoe.Agreeableness.Help;
  //BELOW: Pull neur section from DB
    var calm = data[data.length-1].Data_canoe.Neuroticism.Calm; //get the properties of the new database entry
    var secure = data[data.length-1].Data_canoe.Neuroticism.Secure; //Selects all the
    var self = data[data.length-1].Data_canoe.Neuroticism.Self;
  //BELOW: Pull open section from DB
    var imag = data[data.length-1].Data_canoe.Openness.imag; //get the properties of the new database entry
    var variety = data[data.length-1].Data_canoe.Openness.Variety; //Selects all the
    var inde = data[data.length-1].Data_canoe.Openness.Ind;
  //BELOW: Pull extraversion section from DB
    var socia = data[data.length-1].Data_canoe.Extraversion.Sociable; //get the properties of the new database entry
    var fun = data[data.length-1].Data_canoe.Extraversion.Fun; //Selects all the
    var affec = data[data.length-1].Data_canoe.Extraversion.Affect;


  console.log("Kindness is: " + kind);
  console.log("Trust is: " + trust);
  console.log("Help is: " + help);

	// create class object
	var kindMap = map(kind, 0, 8, 0, 255); // color mapping of kind -- slider from 0 to 8, so colour from 0 to 255
  var trustMap = map(trust, 0, 8, 0, 255);
  var helpMap = map(help, 0, 8, 0, 255);

  var radiusGen = care + orga + disc;
  console.log("Radius will be: " + radiusGen);

  var speedMapX = map(calm, 0, 8, 0, 8);
  var speedMapY = map(secure, 0, 8, 0, 8);
  var jitter = map(self, 0, 8, 0, 8); //will add a movement jitter feature later

  console.log("Kindness map is: " + kindMap);
  console.log("Trust map is: " + trustMap);
  console.log("Help map is: " + helpMap);
	circleObject.push(new Circle(100, 100, speedMapX, speedMapY, jitter, radiusGen, kindMap, trustMap, helpMap, 3000)); // create the new object
	checkArrayLength = data.length-1;
  }
}

// below: Draw circle
function Circle(posx, posy, _speedX, _speedY, jitter, _radius, _r, _g, _b, _timer){
  this.x = posx;
  this.y = posy;
  this.xMove = _speedX;
  this.yMove = _speedY;
  this.jitter = 5;
  this.radius= _radius;

  this.red = _r;
  this.green = _g;
  this.blue = _b;
  this.a = 255;

  this.timer = _timer;
  this.initTime = _timer;

  this.Circle = function(){
    noStroke();
    fillcol = color(this.red, this.green, this.blue, this.a)
    fill(fillcol);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }

  this.motion = function(){
    this.x += this.xMove;
    this.y += this.yMove;
    if (this.x > (width+this.radius)) this.x = 0 - this.radius;
    if (this.x < (0-this.radius)) this.x = width+this.radius;
    if (this.y > (height+this.radius)) this.y = 0 - this.radius;
    if (this.y < (0-this.radius)) this.y = height+this.radius;
  }

  this.jitter = function(){
    this.x = random(width);
    this.y = random(height);
  }

  this.destroy = function(){
    var getTimer;
    this.timer--;
    getTimer = this.timer;
    this.a = map(this.timer, 0, this.initTime, 0, 255);
    return getTimer;
  }
}
