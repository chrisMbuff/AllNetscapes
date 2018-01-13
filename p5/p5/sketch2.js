var time, theta = 0;
var frames = 240,
  num = 20,
  num2 = 6;
var rs;

var conscient = [100,80];
var agree = [100,80];
var neuro = [100,80];
var open = [100,80];
var extra = [100,80];

function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  smooth(8);
  noStroke();
  rs = random(100);
}

function draw() {
  randomSeed(rs);
  background("#490A3D");
  //frameCount contains the number of frames displayed since the program started
  time = (frameCount % frames) / float(frames);
  for (var i = 0; i < conscient[0]; i++) {
    drawBubble(i);
  }
  theta += TWO_PI / frames;

}

function drawBubble(i) {
  // width and height contain the values width and height of display window
  //where teh animations starts
  var x = (width,100);
  var y = (height,100);
  //scale of the bubble
  var sc = random(1, 8);
  //var rotation = random(-.01, 0.1);
  var m = map(sin(theta + (TWO_PI / num) * i), -1, 1, .5, 2);
  //size of the bubble
  var sz = random(20, 50) * m;
  push();
  scale(sc);
  translate(x, y);
  //rotate(rotation);
  //fill('rgba(248,202,0,.8)');

  fill(random(255),random(255),random(255),random(255));
  //if (random(1) > .8) fill('rgba(189,21,80, .8)');
  //if (random(1) > .9) fill('rgba(138,155,15, .8)');

  for (var i = 0; i < conscient.length; i++) {
    ellipse(0, -conscient[0] * time + height, sz, sz);
    ellipse(0, -conscient[0] * time, sz, sz);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-4);
}
