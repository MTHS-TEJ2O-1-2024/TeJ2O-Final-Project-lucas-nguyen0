/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Lucas Nguyen
 * Created on: Jan 2025
 * This program receives a radio signal and spins a servo motor.
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
radio.setGroup(142)
basic.showLeds(`
. # # # .
. # . # .
# # # # #
# . . . #
# # # # #
`)
robotbit.Servo(servoNumber1, 0)

// correct combo inputted
radio.onReceivedString(function(receivedString) {
    basic.showLeds(`
    . # # # .
    . . . # .
    # # # # #
    # . . . #
    # # # # #
    `)
    robotbit.Servo(servoNumber1, 90)
})

// lock reset
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
    . # # # .
    . . . # .
    # # # # #
    # . . . #
    # # # # #
    `)
    robotbit.Servo(servoNumber1, 90)
})

input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
    . # # # .
    . # . # .
    # # # # #
    # . . . #
    # # # # #
    `)
    robotbit.Servo(servoNumber1, 0)
})