input.onButtonPressed(Button.A, function () {
    basic.showNumber(compte)
})
input.onButtonPressed(Button.B, function () {
    compte += 1
    basic.showNumber(compte)
    if (compte == 13) {
        basic.showString("1,2,3 viva l'algérie")
    }
})
input.onGesture(Gesture.Shake, function () {
    compte = 0
})
let compte = 0
compte = 0
