var checkArrayLength = 0;
var circleObject = [];
var globalData;

//global variables for all personality types
var care, orga, disc;
var kind, trust, help;
var calm, secure, self;
var imag, variety, inde;
var socia, fun, affec;

var time, theta = 0;
var frames = 240,
  num = 20;
var rs;

var reds, greens, blues;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - 4);
  smooth(8);
  noStroke();
  setInterval(readDatabase,1000);//checks database for new entries every 15 seconds
  rs = random(100);
}

function readDatabase(){
  var url = 'https://api.mlab.com/api/1/databases/netscapes/collections/alldata?apiKey=vW5_FH8WlZm5O4qCB1rRW7e7FGug9YI5'
  loadJSON(url, drawData); //creates connection to our database
}

function draw() {
  randomSeed(rs);
  background("#490A3D");
  //frameCount contains the number of frames displayed since the program started
  time = (frameCount % frames) / float(frames);
  if(globalData)
  {
    for (var i = 0; i < globalData.length; i++) {
      drawC(i);
      drawA(i);
      drawN(i);
      drawO(i);
      drawE(i);
    }
  }

  theta += TWO_PI / frames;

}

function drawData(data) {
  globalData = data;
  console.log(data); // inspect the JSON

  if (checkArrayLength != data.length-1){ //check if a new entry exists in the database array
  //BELOW: Pull conscientiousness section from DB
    care = data[data.length-1].Data_Canoe.Conscientiousness.Care; //get the properties of the new database entry
    orga = data[data.length-1].Data_Canoe.Conscientiousness.Orga; //Selects all the
    disc = data[data.length-1].Data_Canoe.Conscientiousness.Disc;
	//BELOW: Pull agreeableness section from DB
    kind = data[data.length-1].Data_Canoe.Agreeableness.Kind; //get the properties of the new database entry
    trust = data[data.length-1].Data_Canoe.Agreeableness.Trust; //Selects all the
    help = data[data.length-1].Data_Canoe.Agreeableness.Help;
  //BELOW: Pull neur section from DB
    calm = data[data.length-1].Data_Canoe.Neuroticism.Calm; //get the properties of the new database entry
    secure = data[data.length-1].Data_Canoe.Neuroticism.Secure; //Selects all the
    self = data[data.length-1].Data_Canoe.Neuroticism.Self;
  //BELOW: Pull open section from DB
    imag = data[data.length-1].Data_Canoe.Openness.imag; //get the properties of the new database entry
    variety = data[data.length-1].Data_Canoe.Openness.Variety; //Selects all the
    inde = data[data.length-1].Data_Canoe.Openness.Ind;
  //BELOW: Pull extraversion section from DB
    socia = data[data.length-1].Data_Canoe.Extraversion.Sociable; //get the properties of the new database entry
    fun = data[data.length-1].Data_Canoe.Extraversion.Fun; //Selects all the
    affec = data[data.length-1].Data_Canoe.Extraversion.Affect;
  }

  //sz = care + orga + disc;
  console.log("Care is: " + care);
  console.log("Organized is: " + orga);
  console.log("Disc is: " + disc);

  console.log("Kindness is: " + kind);
  console.log("Trust is: " + trust);
  console.log("Help is: " + help);

  console.log("Social is: " + socia);
  console.log("Fun-loving is: " + fun);
  console.log("affectionate is: " + affec);


  //console.log("Radius will be: " + sz);

}

// ** Conscientiousness ** //
function drawC(i) {
  // width and height contain the values width and height of display window
  var x = (width,100);
  var y = (height,100);

  var m = map(sin(theta + (TWO_PI / 20) * i), -1, 1, .5, 2);
  //size of the bubble
  var sz;
  push();
  translate(x, y);

  var lerpedColor;

  /*colorFrom = color(255,0,119);
  colorTo = color(197,244, 66);
  var lerpedColor = lerpColor(colorFrom, colorTo, i/15);
  fill(lerpedColor);*/

  //colours for circles
  for (var i = 0; i < globalData.length; i++)
  {
    if(disc == 8) {
      sz = random(care*20, orga*20) * m;
      reds = map((care * i),0,8,0,137);
      greens = map((orga * i),0,8,217,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (disc == 7) {
      sz = random(care*20, orga*20) * m;
      reds = map((care * i),0,8,0,100);
      greens = map((orga * i),0,8,193,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (disc == 6) {
      sz = random(care*20, orga*20) * m;
      reds = map((care * i),0,8,0,60);
      greens = map((orga * i),0,8,170,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (disc == 5) {
      sz = random(care*20, orga*20) * m;
      reds = map((care * i),0,8,0,40);
      greens = map((orga * i),0,8,150,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (disc == 4) {
      sz = random(care*30, orga*30) * m;
      reds = map((care * i),0,8,0,20);
      greens = map((orga * i),0,8,230,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (disc == 3) {
      sz = random(care*40, orga*40) * m;
      reds = map((care * i),0,8,0,10);
      greens = map((orga * i),0,8,240,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (disc == 2) {
      sz = random(care*50, orga*50) * m;
      reds = map((care * i),0,8,0,5);
      greens = map((orga * i),0,8,250,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (disc == 1) {
      sz = random(care*60, orga*60) * m;
      reds = map((care * i),0,8,0,0);
      greens = map((orga * i),0,8,255,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }

  }
  /*for (var i = 0; i < globalData.length; i++) {
    //left -
    ellipse(100, 100, sz, sz);
    //ellipse(100, 100, sz, sz);
  }*/
  pop();
}

// ** Agreeableness ** //
function drawA(i) {
  var x = (width,150);
  var y = (height,150);

  var m = map(sin(theta + (TWO_PI / 20) * i), -1, 1, .5, 2);

  var sz;
  push();
  translate(x, y);

  var lerpedColor;

  //colours for circles
  for (var i = 0; i < globalData.length; i++)
  {
    if(help == 8) {
      sz = random(kind*20, trust*20) * m;
      colorFrom = color(255,0,119);
      colorTo = color(119, 196, 255);
      lerpedColor = lerpColor(colorFrom, colorTo, i/15);
      fill(lerpedColor);
      ellipse(100, 100, sz, sz);
    }
    else if (help == 7) {
      sz = random(kind*20, trust*20) * m;
      colorFrom = color(255, 35, 137);
      colorTo = color(191, 199, 255);
      lerpedColor = lerpColor(colorFrom, colorTo, i/15);
      fill(lerpedColor);
      ellipse(100, 100, sz, sz);
    }
    else if (help == 6) {
      sz = random(kind*20, trust*20) * m;
      colorFrom = color(255, 68, 155);
      colorTo = color(173, 184, 255);
      lerpedColor = lerpColor(colorFrom, colorTo, i/15);
      fill(lerpedColor);
      ellipse(100, 100, sz, sz);
    }
    else if (help == 5) {
      sz = random(kind*20, trust*20) * m;
      colorFrom = color(255, 119, 182);
      colorTo = color(155, 168, 255);
      lerpedColor = lerpColor(colorFrom, colorTo, i/15);
      fill(lerpedColor);
      ellipse(100, 100, sz, sz);
    }
    else if (help == 4) {
      sz = random(kind*30, trust*30) * m;
      colorFrom = color(255, 145, 196);
      colorTo = color(130, 146, 255);
      lerpedColor = lerpColor(colorFrom, colorTo, i/15);
      fill(lerpedColor);
      ellipse(100, 100, sz, sz);
    }
    else if (help == 3) {
      sz = random(kind*40, trust*40) * m;
      colorFrom = color(255, 160, 204);
      colorTo = color(99, 120, 255);
      lerpedColor = lerpColor(colorFrom, colorTo, i/15);
      fill(lerpedColor);
      ellipse(100, 100, sz, sz);
    }
    else if (help == 2) {
      sz = random(kind*50, trust*50) * m;
      colorFrom = color(255, 178, 213);
      colorTo = color(50, 78, 255);
      lerpedColor = lerpColor(colorFrom, colorTo, i/15);
      fill(lerpedColor);
      ellipse(100, 100, sz, sz);
    }
    else if (help == 1) {
      sz = random(kind*60, trust*60) * m;
      colorFrom = color(255, 193, 221);
      colorTo = color(7, 40, 255);
      lerpedColor = lerpColor(colorFrom, colorTo, i/15);
      fill(lerpedColor);
      ellipse(100, 100, sz, sz);
    }
  }
  pop();
}

// ** Neuroticism ** //
function drawN(i) {
  var x = (width,200);
  var y = (height,100);

  var m = map(sin(theta + (TWO_PI / 20) * i), -1, 1, .5, 2);

  var sz;
  push();
  translate(x, y);

  var lerpedColor;

  //colours for circles
  for (var i = 0; i < globalData.length; i++)
  {
    if(self == 8) {
      sz = random(calm*20, secure*20) * m;
      reds = map((calm * i),0,8,0,137);
      greens = map((secure * i),0,8,217,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (self == 7) {
      sz = random(calm*20, secure*20) * m;
      reds = map((calm * i),0,8,0,100);
      greens = map((secure * i),0,8,193,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (self == 6) {
      sz = random(calm*20, secure*20) * m;
      reds = map((calm * i),0,8,0,60);
      greens = map((secure * i),0,8,170,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (self == 5) {
      sz = random(calm*20, secure*20) * m;
      reds = map((calm * i),0,8,0,40);
      greens = map((secure * i),0,8,150,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (self == 4) {
      sz = random(calm*30, secure*30) * m;
      reds = map((calm * i),0,8,0,20);
      greens = map((secure * i),0,8,230,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (self == 3) {
      sz = random(calm*40, secure*40) * m;
      reds = map((calm * i),0,8,0,10);
      greens = map((secure * i),0,8,240,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (self == 2) {
      sz = random(calm*50, secure*50) * m;
      reds = map((calm * i),0,8,0,5);
      greens = map((secure * i),0,8,250,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (self == 1) {
      sz = random(calm*60, secure*60) * m;
      reds = map((calm * i),0,8,0,0);
      greens = map((secure * i),0,8,255,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
  }
  pop();
}

// ** Openness ** //
function drawO(i) {
  var x = (width,250);
  var y = (height,150);

  var m = map(sin(theta + (TWO_PI / 20) * i), -1, 1, .5, 2);

  var sz;
  push();
  translate(x, y);

  var lerpedColor;

  //colours for circles
  for (var i = 0; i < globalData.length; i++)
  {
    if(inde == 8) {
      sz = random(imag*20, variety*20) * m;
      reds = map((imag * i),0,8,0,137);
      greens = map((variety * i),0,8,217,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (inde == 7) {
      sz = random(imag*20, variety*20) * m;
      reds = map((imag * i),0,8,0,100);
      greens = map((variety * i),0,8,193,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (inde == 6) {
      sz = random(imag*20, variety*20) * m;
      reds = map((imag * i),0,8,0,60);
      greens = map((variety * i),0,8,170,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (inde == 5) {
      sz = random(imag*20, variety*20) * m;
      reds = map((imag * i),0,8,0,40);
      greens = map((variety * i),0,8,150,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (inde == 4) {
      sz = random(imag*30, variety*30) * m;
      reds = map((imag * i),0,8,0,20);
      greens = map((variety * i),0,8,230,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (inde == 3) {
      sz = random(imag*40, variety*40) * m;
      reds = map((imag * i),0,8,0,10);
      greens = map((variety * i),0,8,240,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (inde == 2) {
      sz = random(imag*50, variety*50) * m;
      reds = map((imag * i),0,8,0,5);
      greens = map((variety * i),0,8,250,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (inde == 1) {
      sz = random(imag*60, variety*60) * m;
      reds = map((imag * i),0,8,0,0);
      greens = map((variety * i),0,8,255,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
  }
  pop();
}

// ** Extraversion ** //
function drawE(i) {
  var x = (width,500);
  var y = (height,100);

  var m = map(sin(theta + (TWO_PI / 20) * i), -1, 1, .5, 2);

  var sz;
  push();
  translate(x, y);

  var lerpedColor;

  //colours for circles
  for (var i = 0; i < globalData.length; i++)
  {
    if(affec == 8) {
      sz = random(socia*20, fun*20) * m;
      reds = map((socia * i),0,8,0,137);
      greens = map((fun * i),0,8,217,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (affec == 7) {
      sz = random(socia*20, fun*20) * m;
      reds = map((socia * i),0,8,0,100);
      greens = map((fun * i),0,8,193,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (affec == 6) {
      sz = random(socia*20, fun*20) * m;
      reds = map((socia * i),0,8,0,60);
      greens = map((fun * i),0,8,170,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (affec == 5) {
      sz = random(socia*20, fun*20) * m;
      reds = map((socia * i),0,8,0,40);
      greens = map((fun * i),0,8,150,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (affec == 4) {
      sz = random(socia*30, fun*30) * m;
      reds = map((socia * i),0,8,0,20);
      greens = map((fun * i),0,8,230,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (affec == 3) {
      sz = random(socia*40, fun*40) * m;
      reds = map((socia * i),0,8,0,10);
      greens = map((fun * i),0,8,240,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (affec == 2) {
      sz = random(socia*50, fun*50) * m;
      reds = map((socia * i),0,8,0,5);
      greens = map((fun * i),0,8,250,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
    else if (affec == 1) {
      sz = random(socia*60, fun*60) * m;
      reds = map((socia * i),0,8,0,0);
      greens = map((fun * i),0,8,255,0);
      fill(reds,greens,255,random(255));
      ellipse(100, 100, sz, sz);
    }
  }
  pop();
}
