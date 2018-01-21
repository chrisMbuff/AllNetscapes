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
var frames = 240;
var rs;

var reds, greens, blues;
// Code is from codepen.io by Jerome Herr. Available at: https://codepen.io/p5art/pen/PqpwgO

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
  //randomSeed seeds the random number generator
  //so we always get the exact same sequence
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

  console.log("Care is: " + care);
  console.log("Organized is: " + orga);
  console.log("Disc is: " + disc);

  /*console.log("Kindness is: " + kind);
  console.log("Trust is: " + trust);
  console.log("Help is: " + help);*/

  console.log("Social is: " + socia);
  console.log("Fun-loving is: " + fun);
  console.log("affectionate is: " + affec);

  console.log("Calm is: " + calm);
  console.log("Secure is: " + secure);
  console.log("Self is: " + self);

}

// ** Conscientiousness ** BLUE//
function drawC(i) {
  //defines the rate of pulsation
  var m = map(sin(theta + (TWO_PI / 20) * i), -1, 1, .5, 2);
  // size of the bubble
  var sz;

  push();

  // **colours of the circles for each trait** //
  for (var i = 0; i < globalData.length; i++)
  {
    if(disc == 8) {
      sz = random(care*50) * m;
      reds = map((care * i),0,8,170,0);
      greens = map((orga * i),0,8,0,120);
      fill(reds,greens,255,random(255));
      ellipse(300, 400, sz, sz);
    }
    else if (disc == 7) {
      sz = random(care*50) * m;
      reds = map((care * i),0,8,140,0);
      greens = map((orga * i),0,8,0,140);
      fill(reds,greens,255,random(255));
      ellipse(300, 400, sz, sz);
    }
    else if (disc == 6) {
      sz = random(care*60) * m;
      reds = map((care * i),0,8,120,0);
      greens = map((orga * i),0,8,0,160);
      fill(reds,greens,255,random(255));
      ellipse(300, 400, sz, sz);
    }
    else if (disc == 5) {
      sz = random(care*60) * m;
      reds = map((care * i),0,8,100,0);
      greens = map((orga * i),0,8,0,180);
      fill(reds,greens,255,random(255));
      ellipse(300, 400, sz, sz);
    }
    else if (disc == 4) {
      sz = random(care*60) * m;
      reds = map((care * i),0,8,80,0);
      greens = map((orga * i),0,8,0,200);
      fill(reds,greens,255,random(255));
      ellipse(300, 400, sz, sz);
    }
    else if (disc == 3) {
      sz = random(care*60) * m;
      reds = map((care * i),0,8,40,0);
      greens = map((orga * i),0,8,0,240);
      fill(reds,greens,255,random(255));
      ellipse(300, 400, sz, sz);
    }
    else if (disc == 2) {
      sz = random(care*60) * m;
      reds = map((care * i),0,8,30,0);
      greens = map((orga * i),0,8,0,230);
      fill(reds,greens,255,random(255));
      ellipse(300, 400, sz, sz);
    }
    else if (disc == 1) {
      sz = random(care*60) * m;
      reds = map((care * i),0,8,10,0);
      greens = map((orga * i),0,8,0,250);
      fill(reds,greens,255,random(255));
      ellipse(300, 400, sz, sz);
    }

  }

  pop();
}

// ** Agreeableness ** GREEN//
function drawA(i) {

  var m = map(sin(theta + (TWO_PI / 20) * i), -1, 1, .5, 2);
  var sz;

  push();

    // **colours of the circles for each trait** //
    for (var i = 0; i < globalData.length; i++)
    {
    if(help == 8) {
      sz = random(kind*50) * m;
      reds = map((kind * i),0,8,0,190);
      blues = map((trust * i),0,8,0,90);
      fill(reds,255,blues,random(255));
      ellipse(550, 200, sz, sz);
    }
    else if (help == 7) {
      sz = random(kind*50) * m;
      reds = map((kind * i),0,8,0,200);
      blues = map((trust * i),0,8,0,100);
      fill(reds,15,blues,random(255));
      ellipse(550, 200, sz, sz);
    }
    else if (help == 6) {
      sz = random(kind*60) * m;
      reds = map((kind * i),0,8,0,210);
      blues = map((trust * i),0,8,0,110);
      fill(reds,255,blues,random(255));
      ellipse(550, 200, sz, sz);
    }
    else if (help == 5) {
      sz = random(kind*60) * m;
      reds = map((kind * i),0,8,0,220);
      blues = map((trust * i),0,8,0,120);
      fill(reds,255,blues,random(255));
      ellipse(550, 200, sz, sz);
    }
    else if (help == 4) {
      sz = random(kind*60) * m;
      reds = map((kind * i),0,8,0,230);
      blues = map((trust * i),0,8,0,130);
      fill(reds,255,blues,random(255));
      ellipse(550, 200, sz, sz);
    }
    else if (help == 3) {
      sz = random(kind*60) * m;
      reds = map((kind * i),0,8,0,240);
      blues = map((trust * i),0,8,0,150);
      fill(reds,255,blues,random(255));
      ellipse(550, 200, sz, sz);
    }
    else if (help == 2) {
      sz = random(kind*60) * m;
      reds = map((kind * i),0,8,0,250);
      blues = map((trust * i),0,8,0,160);
      fill(reds,255,blues,random(255));
      ellipse(550, 200, sz, sz);
    }
    else if (help == 1) {
      sz = random(kind*60) * m;
      reds = map((kind * i),0,8,0,260);
      blues = map((trust * i),0,8,0,255);
      fill(reds,255,blues,random(255));
      ellipse(550, 200, sz, sz);
    }
  }
  pop();
}

// ** Neuroticism ** YELLOW//
function drawN(i) {

  var m = map(sin(theta + (TWO_PI / 20) * i), -1, 1, .5, 2);
  var sz;

  push();

    // **colours of the circles for each trait** //
    for (var i = 0; i < globalData.length; i++)
    {
    if(self == 8) {
      sz = random(calm*50) * m;
      reds = map((calm * i),0,8,110,255);
      blues = map((secure * i),0,8,0,90);
      fill(reds,255,blues,random(255));
      ellipse(1000, 200, sz, sz);
    }
    else if (self == 7) {
      sz = random(calm*50) * m;
      reds = map((calm * i),0,8,130,255);
      blues = map((secure * i),0,8,0,100);
      fill(reds,255,blues,random(255));
      ellipse(1000, 200, sz, sz);
    }
    else if (self == 6) {
      sz = random(calm*60) * m;
      reds = map((calm * i),0,8,150,255);
      blues = map((secure * i),0,8,0,110);
      fill(reds,255,blues,random(255));
      ellipse(1000, 200, sz, sz);
    }
    else if (self == 5) {
      sz = random(calm*60) * m;
      reds = map((calm * i),0,8,170,255);
      blues = map((secure * i),0,8,0,120);
      fill(reds,255,blues,random(255));
      ellipse(1000, 200, sz, sz);
    }
    else if (self == 4) {
      sz = random(calm*60) * m;
      reds = map((calm * i),0,8,190,255);
      blues = map((secure * i),0,8,0,130);
      fill(reds,255,blues,random(255));
      ellipse(1000, 200, sz, sz);
    }
    else if (self == 3) {
      sz = random(calm*60) * m;
      reds = map((calm * i),0,8,210,255);
      blues = map((secure * i),0,8,0,140);
      fill(reds,255,blues,random(255));
      ellipse(1000, 200, sz, sz);
    }
    else if (self == 2) {
      sz = random(calm*60) * m;
      reds = map((calm * i),0,8,230,255);
      blues = map((secure * i),0,8,0,150);
      fill(reds,255,blues,random(255));
      ellipse(1000, 200, sz, sz);
    }
    else if (self == 1) {
      sz = random(calm*60) * m;
      reds = map((calm * i),0,8,250,255);
      blues = map((secure * i),0,8,0,160);
      fill(reds,255,blues,random(255));
      ellipse(1000, 200, sz, sz);
    }
}
  pop();
}

// ** Openness ** ORANGE//
function drawO(i) {

  var m = map(sin(theta + (TWO_PI / 20) * i), -1, 1, .5, 2);
  var sz;

  push();

    // **colours of the circles for each trait** //
    for (var i = 0; i < globalData.length; i++)
    {
    if(inde == 8) {
      sz = random(imag*50) * m;
      greens = map((imag * i),0,8,233,0);
      blues = map((variety * i),0,8,0,0);
      fill(255,greens,blues,random(255));
      ellipse(1200, 500, sz, sz);
    }
    else if (inde == 7) {
      sz = random(imag*50) * m;
      greens = map((imag * i),0,8,223,0);
      blues = map((variety * i),0,8,0,33);
      fill(255,greens,blues,random(255));
      ellipse(1200, 500, sz, sz);
    }
    else if (inde == 6) {
      sz = random(imag*60) * m;
      greens = map((imag * i),0,8,200,0);
      blues = map((variety * i),0,8,0,53);
      fill(255,greens,blues,random(255));
      ellipse(1200, 500, sz, sz);
    }
    else if (inde == 5) {
      sz = random(imag*60) * m;
      greens = map((imag * i),0,8,0,200);
      blues = map((variety * i),0,8,0,20);
      fill(255,greens,blues,random(255));
      ellipse(1200, 500, sz, sz);
    }
    else if (inde == 4) {
      sz = random(imag*60) * m;
      greens = map((imag * i),0,8,0,200);
      blues = map((variety * i),0,8,0,40);
      fill(255,greens,blues,random(255));
      ellipse(1200, 500, sz, sz);
    }
    else if (inde == 3) {
      sz = random(imag*60) * m;
      greens = map((imag * i),0,8,0,200);
      blues = map((variety * i),0,8,0,50);
      fill(255,greens,blues,random(255));
      ellipse(1200, 500, sz, sz);
    }
    else if (inde == 2) {
      sz = random(imag*60) * m;
      greens = map((imag * i),0,8,0,200);
      blues = map((variety * i),0,8,0,70);
      fill(255,greens,blues,random(255));
      ellipse(1200, 500, sz, sz);
    }
    else if (inde == 1) {
      sz = random(imag*60) * m;
      greens = map((imag * i),0,8,0,209);
      blues = map((variety * i),0,8,0,90);
      fill(255,greens,blues,random(255));
      ellipse(1200, 500, sz, sz);
    }
  }
  pop();
}

// ** Extraversion ** RED//
function drawE(i) {

  var m = map(sin(theta + (TWO_PI / 20) * i), -1, 1, .5, 2);
  var sz;

  push();

    // **colours of the circles for each trait** //
    for (var i = 0; i < globalData.length; i++)
    {
    if(affec == 8) {
      sz = random(socia*50) * m;
      greens = map((socia * i),0,8,0,5);
      blues = map((fun * i),0,8,0,10);
      fill(255,greens,blues,random(255));
      ellipse(800, 400, sz, sz);
    }
    else if (affec == 7) {
      sz = random(socia*50) * m;
      greens = map((socia * i),0,8,0,5);
      blues = map((fun * i),0,8,0,20);
      fill(255,greens,blues,random(255));
      ellipse(800, 400, sz, sz);
    }
    else if (affec == 6) {
      sz = random(socia*60) * m;
      greens = map((socia * i),0,8,0,6);
      blues = map((fun * i),0,8,0,22);
      fill(255,greens,blues,random(255));
      ellipse(800, 400, sz, sz);
    }
    else if (affec == 5) {
      sz = random(socia*60) * m;
      greens = map((socia * i),0,8,0,7);
      blues = map((fun * i),0,8,0,23);
      fill(255,greens,blues,random(255));
      ellipse(800, 400, sz, sz);
    }
    else if (affec == 4) {
      sz = random(socia*60) * m;
      greens = map((socia * i),0,8,0,8);
      blues = map((fun * i),0,8,0,30);
      fill(255,greens,blues,random(255));
      ellipse(800, 400, sz, sz);
    }
    else if (affec == 3) {
      sz = random(socia*60) * m;
      greens = map((socia * i),0,8,0,9);
      blues = map((fun * i),0,8,0,40);
      fill(255,greens,blues,random(255));
      ellipse(800, 400, sz, sz);
    }
    else if (affec == 2) {
      sz = random(socia*60) * m;
      greens = map((socia * i),0,8,0,9);
      blues = map((fun * i),0,8,0,50);
      fill(255,greens,blues,random(255));
      ellipse(800, 400, sz, sz);
    }
    else if (affec == 1) {
      sz = random(socia*60) * m;
      greens = map((socia * i),0,8,0,9);
      blues = map((fun * i),0,8,0,60);
      fill(255,greens,blues,random(255));
      ellipse(800, 400, sz, sz);
    }
  }
  pop();
}
