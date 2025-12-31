# Claude projekt leírás - Szédületes Futam

Ez a fájl segít a Claude AI-nak gyorsan felismerni és megérteni a projektet.

## Gyors összefoglaló

**Típus**: Interaktív gyerekjáték / Choose Your Own Adventure
**Nyelv**: Magyar
**Tech stack**: Vanilla JS, CSS3, HTML5, LocalStorage
**Státusz**: Aktív fejlesztés alatt

## Fő fájlok és szerepük

| Fájl | Sorok | Szerep |
|------|-------|--------|
| `js/gameState.js` | ~420 | Állapotkezelés, kerekek, mentés/betöltés |
| `js/pages.js` | ~550 | Történet struktúra, oldalak, választások |
| `js/game.js` | ~240 | UI logika, renderelés, eseménykezelés |
| `css/style.css` | ~440 | Teljes stílus, reszponzív |

## Adatstruktúra

### Oldal (Page) objektum
```javascript
{
    id: 'page_1',
    title: 'Rajt!',
    image: 'images/scenes/page_1',
    text: `Történet szöveg...`,
    choices: [
        {
            text: 'Választás szövege',
            description: 'Opcionális leírás',
            condition: { wheel: 'red', value: 'panka' },  // opcionális
            conditionNot: { wheel: 'red', value: 'panka' }, // opcionális
            action: { wheel: 'green', value: 'rope' },    // opcionális
            nextPage: 'page_1_1_1'
        }
    ]
}
```

### Kerék (Wheel) értékek
- **Zöld**: empty, rope, balloons, slingshot, countess
- **Sárga**: empty, bat, spiderweb, turbocrystal, bajgunar
- **Kék**: empty, goldenegg, helena, offroadtire, zord
- **Piros**: empty, panka, robi, samu + bandage számláló (0-3)

## Oldal elnevezési konvenció

```
page_X           → X. főoldal (választási pont)
page_X_Y_Z       → X. főoldal, Y. ág, Z. lépés

Példák:
page_1           → 1. főoldal (Rajt)
page_1_1_1       → 1. főoldal, 1. ág, 1. lépés
page_1_1_2       → 1. főoldal, 1. ág, 2. lépés
page_2           → 2. főoldal (Barlang)
```

## Jelenlegi történet térkép

```
start (karakterválasztás)
    ↓
page_1 (Rajt - téves indítás)
    ├── page_1_1_1 → page_1_1_2 (Panka) ──┐
    │             → page_1_1_3 (többi)  ──┤
    ├── page_1_2_1 → page_1_2_2 (Panka) ──┤
    │             → page_1_2_3 (többi)  ──┤
    └── page_1_3_1 → page_1_3_2 ──────────┤
                  → page_1_3_3 ──────────┤
                                          ↓
page_2 (Barlang - pókháló)
    ├── page_2_1_1 → page_2_1_2 (Robi) ───┐
    │             → page_2_1_3 (többi)  ──┤
    ├── page_2_2_1 → page_2_2_2 (Robi) ───┤
    │             → page_2_2_3 (többi)  ──┤
    └── page_2_3_1 → page_2_3_2 ──────────┤
                  → page_2_3_3 ──────────┤
                                          ↓
page_3 (placeholder - még nincs kész)
```

## Gyakori feladatok

### Új oldal hozzáadása
1. Nyisd meg: `js/pages.js`
2. Add hozzá az új oldalt a `Pages` objektumhoz
3. Kövesd az elnevezési konvenciót
4. Ha kell kép: `images/scenes/page_X_Y_Z.png/jpg/svg`

### Új tárgy hozzáadása
1. Új ikon: `images/icons/[tárgy].svg`
2. Add hozzá a `gameState.js` WHEELS objektumhoz
3. Használd action-ként a pages.js-ben

### Képek
- Formátum prioritás: PNG → JPG → SVG
- Generálás: Bing Image Creator, promptok: `image-prompts.md`

## ElevenLabs Audio Narráció

### Hang beállítások (FONTOS - mindig ezeket használd!)

```javascript
// Aktuális hang konfiguráció
{
    voice_id: 'pqHfZKP75CvOlQylNhV4',    // Bill - Wise, Mature, Balanced (premade)
    voice_name: 'Bill',
    model_id: 'eleven_v3',               // FONTOS: eleven_v3 támogatja a magyart és az audio tag-eket!
    language: 'hu',
    stability: 0.5,
    similarity_boost: 0.75,
    style: 0.4,
    speed: 0.9
}
```

### Audio tag-ek (eleven_v3)
A szövegben szögletes zárójelekkel lehet hanghatásokat és érzelmi tónust megadni:
- `[crowd cheering]` - közönség éljenzés
- `[air horn]` - légkürt
- `[tense]` - feszült
- `[disappointed]` - csalódott
- `[excited]` - izgatott
- `[engine revving]` - motor bőgés

### Alternatív hangok
- **Gábor** (7B7mSWflzRSaO1yGeJH6) - Warm, Natural and Confident, budapest accent
- **Peter** (TumdjBNWanlT3ysvclWh) - Young Hungarian Storyteller
- **Roger** (CwhRBWXzGAHq8TQ4Fs17) - Laid-Back, Casual (premade voice)

### Audio fájl generálás

**Elnevezési konvenció:**
```
audio/page_X_text.mp3           → Főszöveg narráció
audio/page_X_choice_1.mp3       → 1. választás
audio/page_X_choice_2.mp3       → 2. választás
audio/page_X_choice_3.mp3       → 3. választás
audio/page_X_Y_Z_text.mp3       → Aloldal szöveg
```

**Annotációk a szövegben:**
A jobb kiejtés érdekében használhatsz annotációkat:
- Számok kiírva: `5... 4... 3...` → `öt... négy... három...`
- Szünetek: `...` használata természetes szünethez

### Audio mapping a kódban

A `js/game.js` elején található `AudioFiles` objektumban:
```javascript
const AudioFiles = {
    'page_1': {
        text: 'audio/page_1_text.mp3',
        choices: [
            'audio/page_1_choice_1.mp3',
            'audio/page_1_choice_2.mp3',
            'audio/page_1_choice_3.mp3'
        ]
    }
    // Új oldalak ide
};
```

### Korlátozások
- Free tier: 10,000 karakter/hó
- Magyar nyelvet támogató modellek: `eleven_v3`, `eleven_flash_v2_5`, `eleven_turbo_v2_5`
- FONTOS: `eleven_multilingual_v2` NEM támogatja a magyart!

## Karakterek

| ID | Név | Jármű | Különlegesség |
|----|-----|-------|---------------|
| panka | Panka | Tanka (zöld tank) | Robusztus, ütközésálló |
| robi | Ro-Bi | Jövő-Menő (kék robot kukásautó) | Tapadókorongos kerekek |
| samu | Samu | Vörös Villám (piros sportautó) | Gyors, fürge |

## Debug tippek

```javascript
// Konzolban:
GameState.getState()           // Teljes állapot
GameState.setWheelPosition('green', 2)  // Kerék állítás
localStorage.clear()           // Mentés törlése
```
