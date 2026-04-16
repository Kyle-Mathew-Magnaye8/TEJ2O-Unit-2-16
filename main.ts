/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Apr 2026
 * This program uses the radios including the distance sensor, 
 * that if an object comes too close to the distance sensor attached to 1 Micro:Bit, 
 * it recives the message to the other Micro:Bit.
*/

// setup
radio.setGroup(41)
basic.showIcon(IconNames.Happy)

// recives and shows strings from other Micro:bits
radio.onReceivedString(function (receivedString) {
  basic.clearScreen()
  basic.showString(receivedString)
  basic.showIcon(IconNames.Happy)
})
