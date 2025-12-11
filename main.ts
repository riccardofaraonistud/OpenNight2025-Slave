let choice = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (input.buttonIsPressed(Button.A)) {
            choice = 2
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        } else if (input.buttonIsPressed(Button.B)) {
            choice = 3
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    } else {
        if (receivedNumber == choice) {
            for (let index = 0; index < 50; index++) {
                basic.showIcon(IconNames.Yes)
                basic.pause(500)
                basic.clearScreen()
            }
        } else {
            for (let index = 0; index < 50; index++) {
                basic.showIcon(IconNames.Sad)
                basic.pause(500)
                basic.clearScreen()
            }
        }
    }
})
