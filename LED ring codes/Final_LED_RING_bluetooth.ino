// NeoPixel Ring simple sketch (c) 2013 Shae Erisson
// released under the GPLv3 license to match the rest of the AdaFruit NeoPixel library
/*
Arduino Turn LED On/Off using Serial Commands Created April 22, 2015Hammad Tariq, Incubator (Pakistan)
*/
// Code adapted by  Stephanie Field (bluetoth C Maycock)
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

// Which pin on the Arduino is connected to the NeoPixels?
// On a Trinket or Gemma we suggest changing this to 1
#define PIN            13

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS      24

// When we setup the NeoPixel library, we tell it how many pixels, and which pin to use to send signals.
// Note that for older NeoPixel pixelss you might need to change the third parameter--see the strandtest
// example for more information on possible values.
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
char junk;
String inputString="";

int delayval = 500; // delay for half a second

void setup()                    // run once, when the sketch starts
{
 Serial.begin(9600);            // set the baud rate to 9600, same should be of your Serial Monitor
 pinMode(13, OUTPUT);
 pixels.begin(); // This initializes the NeoPixel library.
 pixels.show();
}
//BREATH SECTION
void breathe() {
  //BELOW: BREATHING EFFECT
  for(int i=0; i < 3; i++){
       for (int i=1; i<100; i++) { //get brighter
        pixels.setBrightness(i);
        delay(10);
        pixels.show();
        delay(10);
        }
    for (int i=100; i>1; i--) { //get darker
      pixels.setBrightness(i);
      delay(10);
      pixels.show(); 
      delay(10);
    }
  }
   pixels.setBrightness(100);
   pixels.show(); 
    // if getamessage is true, break 
}
// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return pixels.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return pixels.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return pixels.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // 5 cycles of all colors on wheel
    for(i=0; i< pixels.numPixels(); i++) {
      pixels.setPixelColor(i, Wheel(((i * 256 / pixels.numPixels()) + j) & 255));
    }
    pixels.show();
    delay(5);
  }
}
void loop()

{
  if(Serial.available()){
  while(Serial.available())
    {
      char inChar = (char)Serial.read(); //read the input
      inputString += inChar;        //make a string of the characters coming on serial
    }
    Serial.println(inputString);
    while (Serial.available() > 0)  
    { junk = Serial.read() ; }      // clear the serial buffer
    if(inputString == "a"){         //in case of 'a' turn the LED on
      Serial.println("Ring RED");
        for(int i=0;i<NUMPIXELS;i++){
        pixels.setPixelColor(i, pixels.Color(255,0,0)); // red color.
        //delay(50);
        pixels.show(); // This sends the updated pixel color to the hardware.
        
      }  
      //breathe();
      //pixels.setBrightness(100);
    }else if(inputString == "b"){   //incase of 'b' turn the LED off
      Serial.println("Ring red");
      rainbowCycle(20);
        pixels.show(); // This sends the updated pixel color to the hardware.
        Serial.println("Ring RED");
        for(int i=0;i<NUMPIXELS;i++){
        pixels.setPixelColor(i, pixels.Color(255,0,0)); // Moderately bright green color.
        delay(50);
        pixels.show(); // This sends the updated pixel color to the hardware.
        
      }  
      breathe();
      pixels.setBrightness(100);
      }
    inputString = "";
  }
}



