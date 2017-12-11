# Opens connection to Arduino, slider outputs number to serial

from tkinter import * #import tkinter library for sliders
import serial # import PySerial for serial connection to arduino

ser = serial.Serial('/dev/ttyACM0', 9600) #opens serial connection to arduino

def show_values(self): # command for slider
	value = int(w1.get()) #gets value from scale w1
	print(value) #print value
	ser.write(str(value).encode()) #encode into bytes to send across serial

master = Tk()
w1 = Scale(master, from_=0, to=8, length=500, orient=HORIZONTAL,command=show_values)
w1.pack()


mainloop()




