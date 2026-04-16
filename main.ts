/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Apr 2026
 * This program uses the radios including the distance sensor, 
 * that if an object comes too close to the distance sensor attached to 1 Micro:Bit, 
 * it recives the message to the other Micro:Bit.
*/

// setup
radio.setGroup(47)
let distanceNumber: number = 0
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Triangle)
  while (true) {
    distanceNumber = sonar.ping(
      DigitalPin.P1,
      DigitalPin.P2,
      PingUnit.Centimeters
    )
    // send the measured distance via radio
    radio.sendNumber(distanceNumber)

    // small pause to stabilize transmission (100ms)
  } basic.pause(100)
})

// recives and shows strings from other Micro:bits
radio.onReceivedString(function (receivedString) {
  basic.clearScreen()
  basic.showString(receivedString)
  basic.showIcon(IconNames.Happy)
})
