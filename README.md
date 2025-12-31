# Szédületes Futam

Interaktív mesés versenyjáték gyerekeknek - "válaszd meg a saját kalandod" stílusban.

## A játékról

A Szédületes Futam egy elágazó narratívájú kalandjáték, ahol a játékos választásai határozzák meg a történet irányát. Három különleges versenyző közül választhatsz:

| Karakter | Jármű | Leírás |
|----------|-------|--------|
| **Panka** | Tanka | Zöld páncélozott tank - nehézkes, de erős |
| **Ro-Bi** | Jövő-Menő | Barátságos kék kukásautó robot - tapadókorongos kerekekkel |
| **Samu** | Vörös Villám | Piros sportautó villámdíszítéssel - gyors és fürge |

## Játékmechanika

### Kerekek (tárcsák)
A négy sarokban található kerekek követik a gyűjtött tárgyakat és a karaktert:

- **Zöld kerék**: Kötél, lufik, csúzli, grófnő karakter
- **Sárga kerék**: Denevér, pókháló, turbókristály, Báj Gúnár
- **Kék kerék**: Arany tojás, Heléna, terepgumi, Zord
- **Piros kerék**: Kiválasztott karakter + sebtapaszok (max 3 életerő)

### Feltételes választások
Bizonyos döntések csak akkor elérhetők, ha:
- Adott karakterrel játszol
- Megvan a szükséges tárgy valamelyik keréken

## Projekt struktúra

```
szeduletes-futam/
├── index.html              # Fő HTML oldal
├── css/
│   └── style.css           # Stílusok (reszponzív)
├── js/
│   ├── gameState.js        # Játékállapot kezelés
│   ├── pages.js            # Történet oldalak és elágazások
│   └── game.js             # Fő játéklogika
├── images/
│   ├── icons/              # SVG ikonok (tárgyak, karakterek)
│   ├── scenes/             # Jelenet illusztrációk
│   └── jpg/                # Referencia fotók
└── image-prompts.md        # Képgenerálási útmutató
```

## Futtatás

Egyszerűen nyisd meg az `index.html` fájlt böngészőben. Nincs szükség szerverre vagy build folyamatra.

```bash
# macOS
open index.html

# vagy bármilyen böngészővel
```

## Technológiák

- **Vanilla JavaScript** (ES6+)
- **CSS3** (Flexbox, animációk, reszponzív design)
- **LocalStorage** API (mentés/betöltés)
- Nincs külső függőség

## Fejlesztési állapot

### Kész
- [x] Játék motor és állapotkezelés
- [x] Mentés/betöltés rendszer
- [x] Karakterválasztás
- [x] 1. főoldal (Rajt) - 3 ág, teljes
- [x] 2. főoldal (Barlang) - 3 ág, teljes
- [x] 16 tárgy/karakter ikon

### Folyamatban
- [ ] 3. főoldal és további történet
- [ ] Jelenet illusztrációk generálása
- [ ] Hangeffektek és narráció (ElevenLabs)

## Képek generálása

A jelenet képekhez használd a Bing Image Creator-t az `image-prompts.md` fájlban található promptokkal.

## Mentés/Betöltés

A játék automatikusan a böngésző LocalStorage-ába ment. A mentés/betöltés gomb a jobb felső sarokban található.

## Licenc

Privát projekt - minden jog fenntartva.
