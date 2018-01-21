// NeoPixel Ring simple sketch (c) 2013 Shae Erisson
// released under the GPLv3 license to match the rest of the AdaFruit NeoPixel library
/*
Arduino Turn LED On/Off using Serial Commands
Created April 22, 2015
Hammad Tariq, Incubator (Pakistan)

It's a simple sketch which waits for a character on serial
and in case of a desirable character, it turns an LED on/off.

Possible string values:
a (to turn the LED on)
b (tor turn the LED off)
*/
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
// Note that for older NeoPixel strips you might need to change the third parameter--see the strandtest
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
 //pixels.show();
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
      Serial.println("Ring green");
        for(int i=0;i<NUMPIXELS;i++){
        pixels.setPixelColor(i, pixels.Color(0,255,0)); // Moderately bright green color.
        pixels.show(); // This sends the updated pixel color to the hardware.
      }  
    }else if(inputString == "b"){   //incase of 'b' turn the LED off
      Serial.println("Ring red");
      for(int i=0;i<NUMPIXELS;i++){
        pixels.setPixelColor(i, pixels.Color(255,0,0)); // Moderately bright green color.
        pixels.show(); // This sends the updated pixel color to the hardware.
      }
    }else if(inputString == "c"){   //incase of 'b' turn the LED off
      Serial.println("Ring violet");
      for(int i=0;i<NUMPIXELS;i++){
        pixels.setPixelColor(i, pixels.Color(148,0,211)); // Moderately bright green color.
        pixels.show(); // This sends the updated pixel color to the hardware.
      }
    }else if(inputString == "d"){   //incase of 'b' turn the LED off
      Serial.println("Ring yellow");
      for(int i=0;i<NUMPIXELS;i++){
        pixels.setPixelColor(i, pixels.Color(255,255,0)); // Moderately bright green color.
        pixels.show(); // This sends the updated pixel color to the hardware.
      }
    }
    inputString = "";
  }
}

