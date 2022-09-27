if (input.buttonIsPressed(Button.A)) {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
} else if (input.buttonIsPressed(Button.B)) {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        `)
} else {
    basic.showLeds(`
        . . # # .
        . # . . #
        . # . . #
        . # . . #
        . . # # .
        `)
}
