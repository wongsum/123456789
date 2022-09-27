if input.button_is_pressed(Button.A):
    basic.show_leds("""
        . # . # .
                . . . . .
                # . . . #
                . # # # .
                . . . . .
    """)
elif input.button_is_pressed(Button.B):
    basic.show_leds("""
        . # . # .
                . . . . .
                . # # # .
                # . . . #
                . . . . .
    """)
else:
    basic.show_leds("""
        . . # # .
                . # . . #
                . # . . #
                . # . . #
                . . # # .
    """)