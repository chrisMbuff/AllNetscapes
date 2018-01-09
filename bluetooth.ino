/*
made by Steph and Chris
*/

//13 = red 12= green 11 = blue
char dump;
String ledControlColourchar="";

void setup()                    // runs once
{
 Serial.begin(9600);            // sets the baud  9600
 pinMode(13, OUTPUT);
}

void loop()
{
  if(Serial.available()){
  while(Serial.available())
    {
      char inChar = (char)Serial.read(); //reads the cahracter input
      ledControlColourchar += inChar;        //
    }
    Serial.println(ledControlColourchar);
    while (Serial.available() > 0)  
    { dump = Serial.read() ; }      // clears the buffer
    if(ledControlColourchar == "a"){         //if its "a" turn on RED
      digitalWrite(13, HIGH);  
      digitalWrite(10, HIGH);
    } else if(ledControlColourchar == "b"){         //if its "b" turn on green
      digitalWrite(12, HIGH);
      digitalWrite(9, HIGH);
    } else if(ledControlColourchar == "c"){         //if its "c" turn on blue
      digitalWrite(11, HIGH);
      digitalWrite(8, HIGH);
    }else if(ledControlColourchar == "d"){   //if 'd' turn the LED off
      digitalWrite(13, LOW);
      digitalWrite(12, LOW);
      digitalWrite(11, LOW);
      digitalWrite(10, LOW);
      digitalWrite(9, LOW);
      digitalWrite(8, LOW);
    }
    ledControlColourchar = "";
  }
}
