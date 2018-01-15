var checkArrayLength = 0;

function setup() {
  createCanvas(600, 400);
  noStroke();
  readDatabase();
}

function readDatabase(){
  var url = 'https://api.mlab.com/api/1/databases/netscapes/collections/alldata?apiKey=vW5_FH8WlZm5O4qCB1rRW7e7FGug9YI5'
  loadJSON(url, drawData);
}

function draw(){
  if (second() == 0 || second() == 15 || second() == 30 || second() == 45){
	readDatabase();
  }

}

function drawData(data) {
  console.log(data); // inspect the JSON
  background(0);
  fill(0, 255, 255, 200);

  console.log(kind);

  if (checkArrayLength != data.length-1){ //check if a new entry exists in the database array
	var kind = data[data.length-1].Data_canoe.Agreeableness.Kind; //get the properties of the new database entry
	// create class object
	var kindMap = map(kind, 0, 8, 0, 255); // color mapping of kind -- slider from 0 to 8, so colour from 0 to 255
	circleObject.push(new Circle(100, 100, random(-5, 5), random(-5, 5), 50, kindMap, 255, 255, 3000); // create the new object
	checkArrayLength = data.length-1;
  }
}

// below: Draw circle
function Circle(_x, _y, _speedX, _speedY, _radius, _r, _g, _b, _timer){
  this.x = _x;
  this.y = _y;
  this.xMove = _speedX;
  this.yMove = _speedY;
  this.radius= _radius;

  this.rd = _r;
  this.grn = _g;
  this.bl = _b;
  this.a = 255;

  this.timer = _timer;
  this.initTime = _timer;

  this.drawCircle = function(){
    noStroke();
    fillcol = color(this.rd, this.grn, this.bl, this.a)
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

  this.destroy = function(){
    var getTimer;
    this.timer--;
    getTimer = this.timer;
    this.a = map(this.timer, 0, this.initTime, 0, 255);
    return getTimer;
  }
}