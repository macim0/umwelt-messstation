# Umweltmessstation

## Schritt 1: Messwerte aufnehmen
Wir sollten als erstes den Sensor testen. Dafür wollen wir nach dem Drücken der A und B Taste (A+B), 10 Messwerte anzeigen. 
Als erstes benötigen wir aus dem Bereich ``||Input: Eingabe||`` den Block ``||Input: Wenn Knopf A gedrückt||``. Nun ändern wir noch den Knopf A auf A+B.
Anschließend wollen die Messwere Anzeigen. Da es immer wieder die gleiche Aufgabe ist, können wir eine ``||Loops: Schleife||`` nutzen z.B. ``||Loops: 4-mal wiederholen||``.
In dieser Schleif rufen wir immer wieder die Temperatur ab (``||Input: Temperatur (°C)||``) und zeigen diese an (``||basic: Zeige Zahl|``), außerdem machen wir nach jedem Durchgang eine Pause von 1 Sekunde (``||basic: pausiere (ms) 100|``).


```blocks
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.showNumber(input.temperature())
        basic.pause(1000)
    }
})
```

## Schritt 2: Messwerte speichern
Nun sollten wir die Werte speichern. Hierfür legen wir eine ``||Variables: Variable||`` vor der Schleife an z.B. ``||Variables: Messwerte||``. 
In diese Variable kommt ein ``||Array: leeres Array||``, diese findest du unter ``||advanced: Fortgeschritten||`` und dann unter ``||Array: Arrays||``.
In der Schleife ersetzen wir ``||basic: Zeige Zahl|`` durch ``||Array: list füge Wert am Ende hinzu||``. 
In den freien Teil kommt unser ``||Input: Temperatur (°C)||`` und die ``||Variables: Variable||`` ``||Variables: list||`` erstzen wir durch ``||Variables: Messwerte||``.

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
Um einen dauerhaften Alarm zu erzeugen benötigen wir wieder eine ``||Variables: Variable||``. 
Diese könnten wir z.B. ``||Variables: Alarm_an||`` nennen und erstellen Sie direkt nach dem Aufnehmen der Messwerte. 
Wir geben der ``||Variables: Variable||`` den Wert ``||Logic: wahr||`` (diesen Block finden wir im Bereich ``||Logic: Logik||``).
Nun nutzen wir die ``||Loops: Schleife||`` ``||Loops: während wahr||`` und erstzen das Feld mit dem ``||Logic: wahr||`` durch unsere ``||Variables: Variable||`` ``||Variables: Alarm_an||``, somit wird alles, was jetzt folgt, solange ausgeführt bis, der Alarm deaktiviert wird.
In der ``||Loops: Schleife||`` kann man jetzt z.B. die RGB-LED blinken lassen oder einen Text auf dem Display ausgeben. Wir wollen aber Töne abspielen. 
Hierfür suchen wir uns 2 Noten aus dem Bereich ``||Music: Musik||`` aus und fügen es einfach in die ``||Loops: Schleife||`` ein.

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

