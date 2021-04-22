# Umweltmessstation

## Schritt 1: Messwerte aufnehmen
Wir sollten als erstes den Sensor testen. Dafür wollen wir nach dem Drücken der A und B Taste (A+B), 10 Messwerte anzeigen. 
Als erstes benötigen wir aus dem Bereich ``||Input: Eingabe||`` den Block ``||Input: Wenn Knopf A gedrückt||``. Nun ändern wir noch den Knopf A auf A+B.
Anschließend wollen die Messwere Anzeigen. Da es immer wieder die gleiche Aufgabe ist, können wir eine ``||Loops: Schleife||`` nutzen z.B. ``||Loops: 4-mal wiederholen||``.
In dieser Schleif rufen wir immer wieder die Temperatur ab (``||Input: Temperatur (°C)||``) und zeigen diese an (``||basic: Zeige Zahl||``), außerdem machen wir nach jedem Durchgang eine Pause von 1 Sekunde (``||basic: pausiere (ms) 100|``).


```blocks
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.showNumber(input.temperature())
        basic.pause(1000)
    }
})
```

## Schritt 2: Messwerte speichern
Todo

```blocks
let Messwerte: number[] = []
input.onButtonPressed(Button.AB, function () {
    Messwerte = []
    for (let index = 0; index < 10; index++) {
        Messwerte.push(input.temperature())
        basic.pause(100)
    }
})
```

## Schritt 3: Alarm
Todo

```blocks
let Alarm_an = false
let Messwerte: number[] = []
input.onButtonPressed(Button.AB, function () {
    Messwerte = []
    for (let index = 0; index < 10; index++) {
        Messwerte.push(input.temperature())
        basic.pause(100)
    }
    Alarm_an = true
    while (Alarm_an) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
```

## Schritt 4: Messwerte Anzeigen
Todo

```blocks
let Alarm_an = false
let Messwerte: number[] = []
input.onButtonPressed(Button.AB, function () {
    Messwerte = []
    for (let index = 0; index < 10; index++) {
        Messwerte.push(input.temperature())
        basic.pause(100)
    }
    Alarm_an = true
    while (Alarm_an) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.A, function () {
    Alarm_an = false
    for (let Wert of Messwerte) {
        basic.showNumber(Wert)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
```

## Schritt 5: Mittelwert anzeigen
Todo

```blocks
let Alarm_an = false
let Messwerte: number[] = []
let Summe_aller_Messwerte = 0
let Anzahl_Messwerte = 0
input.onButtonPressed(Button.A, function () {
    Alarm_an = false
    for (let Wert of Messwerte) {
        basic.showNumber(Wert)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
input.onButtonPressed(Button.AB, function () {
    Messwerte = []
    for (let index = 0; index < 10; index++) {
        Messwerte.push(input.temperature())
        basic.pause(100)
    }
    Alarm_an = true
    while (Alarm_an) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    Alarm_an = false
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

