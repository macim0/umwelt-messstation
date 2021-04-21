let Alarman = false
let Messwerte: number[] = []
let Summe_aller_Messwerte = 0
let Anzahl_Messwerte = 0
input.onButtonPressed(Button.A, function () {
    Alarman = false
    for (let Wert of Messwerte) {
        basic.showNumber(Wert)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
input.onButtonPressed(Button.AB, function () {
    Messwerte = []
    for (let index = 0; index < 10; index++) {
        Messwerte.unshift(input.temperature())
        basic.pause(100)
    }
    Alarman = true
    while (Alarman) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    Alarman = false
    Summe_aller_Messwerte = 0
    Anzahl_Messwerte = Messwerte.length
    for (let Wert of Messwerte) {
        Summe_aller_Messwerte += Wert
    }
    basic.showNumber(Summe_aller_Messwerte / Anzahl_Messwerte)
})
