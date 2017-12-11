/* Recieves data from serial port (python slider)
   lights up RGB LED on a scale from Blue to Yellow
*/

int recieved ;

int redPin = 5; //LED pins
int greenPin = 6;
int bluePin = 7;

void setup() {
  Serial.begin(9600); //open serial connection
//  Serial.flush;
  pinMode(redPin, OUTPUT); //setup LED
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
}

void loop() {
  if (Serial.available()) {
  recieved = Serial.read(); //read data recieved from python
  Serial.print(recieved); 
  }


  if (recieved == 49 ) { //checks ASCII of recieved, assign colour
    setColour(32,24, 229); 
    delay(100);
  } else if (recieved == 50 ) {
    setColour(55,45,205); 
    delay(100);
  } else if (recieved == 51 ) {
    setColour(81, 69, 178); 
    delay (100);
  } else if (recieved == 52 ) {
    setColour(109,95,149);  
    delay(100);
  } else if (recieved == 53 ) {
    setColour(140,123,118); 
    delay(100);
 } else if (recieved == 54 ) {
    setColour(181,160,76); 
    delay(100);
 } else if (recieved == 55 ) {
   setColour(217,194,39); 
   delay(100);
 } else if (recieved == 56 ) {
   setColour(195, 255, 62); 
   delay(100);
  } else {
    setColour(15,7,247); 
    delay(100);
  }
  
}

void setColour( int red, int green, int blue) {
  analogWrite(redPin, red); //LED Colour
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}
