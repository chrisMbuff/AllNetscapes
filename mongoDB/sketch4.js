var checkArrayLength = 0;
var circleObject = [];
var globalData;

//global variables for all personality types
var care, orga, disc;
var kind, trust, help;
var calm, secure, self;
var imag, variety, inde;
var socia, fun, affec;

var x, y, kindMap, trustMap, helpMap;
var radiusGen;
var speedMapX;
var speedMapY;

var radiusOffset = 0.0,
    offsetScaler = 0,
    centerX, centerY,
    colorFrom, colorTo;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - 4);
  //smooth(8);
  noStroke();

  centerX = width/2;
  centerY = height/2;

  angleMode(DEGREES); // Change the mode to DEGREES
  setInterval(readDatabase,1000);//checks database for new entries every 15 seconds
}

function readDatabase(){
  var url = 'https://api.mlab.com/api/1/databases/netscapes/collections/alldata?apiKey=vW5_FH8WlZm5O4qCB1rRW7e7FGug9YI5'
  loadJSON(url, drawData); //creates connection to our database
}

function draw() {
  radiusOffset += 0.03;
  background("#490A3D");
  colorFrom = color(255,0,119);
  colorTo = color(255,130,188);
  radiusGen = kind + trust + help;
    if (globalData)
    {
      bubble();
    }
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
  console.log("Kindness is: " + kind);
  console.log("Trust is: " + trust);
  console.log("Help is: " + help);

  console.log("Radius will be: " + radiusGen);

}

function bubble()
{
  offsetScaler = help * 30;
  var n = noise(radiusOffset);

  for(var i = 0; i<15; i++) {
    //lerpColor blends two colours to find one between them
    var lerpedColor = lerpColor(colorFrom, colorTo, i/15);
    fill(lerpedColor);
    ellipse(centerX, centerY, (n*offsetScaler) + radiusGen/i, (n*offsetScaler) + radiusGen/i);
  }

}
