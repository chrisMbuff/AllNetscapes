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

var time, theta = 0;
var frames = 240,
  num = 20,
  num2 = 6;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - 4);
  smooth(8);
  noStroke();
  setInterval(readDatabase,1000);//checks database for new entries every second
}

function readDatabase(){
  var url = 'https://api.mlab.com/api/1/databases/netscapes/collections/alldata?apiKey=vW5_FH8WlZm5O4qCB1rRW7e7FGug9YI5'
  loadJSON(url, drawData); //creates connection to our database

  rs = random(100);
}

function draw() {
  background("#490A3D");

  var a = 255;

    if (globalData)
    {
      randomSeed(4);
      // width and height contain the values width and height of display window
      x = (width,200);
      y = (height,100);
      // create class object
      kindMap = map(kind, 0, 8, 255, 255); // color mapping of kind -- slider from 0 to 8, so colour from 0 to 255
      trustMap = map(trust, 0, 8, 2, 140);
      helpMap = map(help, 0, 8, 208, 233);

      //size of the bubble
      radiusGen = kind + trust + help;

      speedMapX = map(kind, 0, 8, 0, 8);
      speedMapY = map(trust, 0, 8, 0, 8);

      time = (frameCount % frames) / float(frames);
      push(); // Start a new drawing state
      for (var i = 0; i < globalData.length; i++)
      {
        fillcol = color(kindMap,trustMap,helpMap,a);
        fill(fillcol);
        ellipse(x,y*time,-radiusGen,-radiusGen);
      }
      theta += TWO_PI / frames;
      pop(); // Restore original state
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

  console.log("Kindness map is: " + kindMap);
  console.log("Trust map is: " + trustMap);
  console.log("Help map is: " + helpMap);

}

function bubble()
{


}
