# Umweltmessstation

## Schritt 1: Messwerte aufnehmen
Todo

## Schritt 2: Messwerte speichern
Todo

## Schritt 3: Alarm
Todo

## Schritt 4: Messwerte Anzeigen
Todo

## Schritt 5: Mittelwert anzeigen
Todo

```
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
```

## Als Tutorial verwenden

Dieses Repository kann als **Tutorial** für MakeCode verwenden.

öffne dazu den Link: [https://makecode.calliope.cc/#tutorial:https://github.com/macim0/umwelt-messstation]
#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

