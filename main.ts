radio.onReceivedString(function (receivedString) {
    if (receivedString == "Open") {
        if (Angulo > 0) {
            Angulo += -1
            maqueen.servoRun(maqueen.Servos.S1, Angulo)
        }
    } else if (receivedString == "Close") {
        if (Angulo < 180) {
            Angulo += 1
            maqueen.servoRun(maqueen.Servos.S1, Angulo)
        }
    } else if (receivedString == "LEDL") {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    } else if (receivedString == "LEDR") {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else if (receivedString == "F") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 160)
    } else if (receivedString == "B") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
let Angulo = 0
radio.setGroup(1)
Angulo = 90
maqueen.servoRun(maqueen.Servos.S1, Angulo)
basic.forever(function () {
	
})
