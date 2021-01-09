radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        basic.showString("Luid")
    } else {
        basic.showString("Stil")
    }
})
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
})
