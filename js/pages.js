/**
 * Szédületes Futam - Oldalak és történet adatstruktúra
 *
 * Minden oldal tartalmazza:
 * - id: oldal azonosító
 * - text: a történet szövege
 * - choices: választási lehetőségek (max 3)
 *   - text: választás szövege
 *   - condition: feltétel (opcionális) - melyik tárcsa milyen értéken legyen
 *   - action: tárcsa módosítás (opcionális)
 *   - nextPage: következő oldal id
 */

const Pages = {
    // Kezdőoldal - karakterválasztás
    'start': {
        id: 'start',
        title: 'A Szédületes Futam',
        image: 'images/scenes/start',
        text: `Melyik pilóta leszel a versenyben?`,
        choices: [
            {
                text: 'Panka és a "Tanka"',
                description: 'Az ő páncélozott tankja',
                action: { wheel: 'red', value: 'panka' },
                nextPage: 'page_1'
            },
            {
                text: 'Ro-Bi és a "Jövő-Menő"',
                description: 'Az ő zseniális masinkája',
                action: { wheel: 'red', value: 'robi' },
                nextPage: 'page_1'
            },
            {
                text: 'Samu és a "Vörös Villám"',
                description: 'Az ő vagány versenyautója',
                action: { wheel: 'red', value: 'samu' },
                nextPage: 'page_1'
            }
        ]
    },

    // ===== 1. FŐOLDAL =====
    'page_1': {
        id: 'page_1',
        title: 'Rajt!',
        image: 'images/scenes/page_1',
        text: `A motorok felbőgnek, az autók szikrákat hánynak!

A rajtvonalon állva ellenőrzöd, hogy minden rendben van-e, és a többi versenyzőt figyeled, akik alig várják már a startot.

Végre elindul a visszaszámlálás... 5... 4... 3...

Egy légkürt harsan a tömegből! A manóba, téves indítás... de néhány jármű így is nekiindul!

Mit akarsz tenni?`,
        choices: [
            { text: 'Te is kilősz?', description: '', nextPage: 'page_1_1_1' },
            { text: 'Óvatosan követed a többieket?', description: '', nextPage: 'page_1_2_1' },
            { text: 'Megkeresed a versenybírót?', description: '', nextPage: 'page_1_3_1' }
        ]
    },

    // ----- 1. főoldal, 1. sáv (FELSŐ) -----
    // Te is kilősz
    'page_1_1_1': {
        id: 'page_1_1_1',
        title: 'Te is kilősz!',
        image: 'images/scenes/page_1_1_1',
        text: `Amint utoléred a többieket, a küzdelem elkezdődik!

Panka vagy a Tankával?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Panka vagyok',
                condition: { wheel: 'red', value: 'panka' },
                nextPage: 'page_1_1_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nem Panka vagyok',
                conditionNot: { wheel: 'red', value: 'panka' },
                nextPage: 'page_1_1_3'
            }
        ]
    },

    'page_1_1_2': {
        id: 'page_1_1_2',
        title: 'Panka a Tankával!',
        image: 'images/scenes/page_1_1_2',
        text: `A pilotafülkéd elég nagy biztonságot nyújt... Ide-oda csapódsz az ellenfeleid között, és kilökdösöd őket.

A rengeteg ütközés után egy kötelet és egy vaskos mászóhorog akadt a járművedhez.

<strong>Keresd meg a kötelet és a mászóhorgot a zöld tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: 'Megszerezted: 🪢 Kötél és mászóhorog',
                action: { wheel: 'green', value: 'rope' },
                nextPage: 'page_2'
            }
        ]
    },

    'page_1_1_3': {
        id: 'page_1_1_3',
        title: 'Menekülés!',
        image: 'images/scenes/page_1_1_3',
        text: `Na tessék, a legnagyobb és legveszélyesebb járművek kihasználják a helyzetet, hogy megszabaduljanak az ellenfeleiktől.

Kitérsz a lökhárítók, bunkósbotok, óriási körfürészek elől... és megkönnyebbülten sóhajtasz, amikor végre kikeveredsz a küzdelemből!`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_2'
            }
        ]
    },

    // ... további felső sáv aloldalak majd ide ...

    // ----- 1. főoldal, 2. sáv (KÖZÉPSŐ) -----
    // Óvatosan követed a többieket
    'page_1_2_1': {
        id: 'page_1_2_1',
        title: 'Óvatosan követed a többieket',
        image: 'images/scenes/page_1_2_1',
        text: `Ahogy lassan haladsz előre, a mezőny egyre sűrűbb lesz. Szlalomoznod kell közöttük...

Panka vagy a Tankával?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Panka vagyok',
                condition: { wheel: 'red', value: 'panka' },
                nextPage: 'page_1_2_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nem Panka vagyok',
                conditionNot: { wheel: 'red', value: 'panka' },
                nextPage: 'page_1_2_3'
            }
        ]
    },

    'page_1_2_2': {
        id: 'page_1_2_2',
        title: 'Panka küzdelme',
        image: 'images/scenes/page_1_2_2',
        text: `A járműved túl robosztus, túl nehéz irányítani. Összeszorítod a fogadat, és megpróbálsz mindent megtenni, hogy ne borulj fel a Tankával!

Balra! Nem! Jobbra! Az ütközések és a majdnem kisodródások ellenére sikerül az úton tartanod a járműved.`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_2'
            }
        ]
    },

    'page_1_2_3': {
        id: 'page_1_2_3',
        title: 'Ügyes manőver!',
        image: 'images/scenes/page_1_2_3',
        text: `Fürgén és technikásan manőverezel a többiek között a káoszban. Ügyes vagy!

Tökéletesen vezetsz, és a nézők minden pillanatát imádják! Útközben még egy csomó lufit is elkapsz, amiket valamelyik ellenfeled "hagyott el".

<strong>Keresd meg a héliumos lufikat a zöld tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: 'Megszerezted: 🎈 Lufik',
                action: { wheel: 'green', value: 'balloons' },
                nextPage: 'page_2'
            }
        ]
    },

    // ... további középső sáv aloldalak majd ide ...

    // ----- 1. főoldal, 3. sáv (ALSÓ) -----
    // Megkeresed a versenybírót
    'page_1_3_1': {
        id: 'page_1_3_1',
        title: 'A versenybíró',
        image: 'images/scenes/page_1_3_1',
        text: `A versenybíró kocsijához hajtasz. Nem törődik az őrjöngő nézőkkel, csak a versenyre koncentrál, téged észre sem vesz.

Felkelted a figyelmét, hogy panaszt tegyél a csalók miatt?`,
        choices: [
            { text: 'Ha igen, lapozz egy oldalt!', description: 'Panaszt teszel', nextPage: 'page_1_3_2' },
            { text: 'Ha inkább megszabadulnál tőle, lapozz két oldalt!', description: 'Inkább továbbállsz', nextPage: 'page_1_3_3' }
        ]
    },

    'page_1_3_2': {
        id: 'page_1_3_2',
        title: 'Becsületes versenyző',
        image: 'images/scenes/page_1_3_2',
        text: `A versenybíró lefirkant néhány szót, morog valamit, aztán elindul, hogy elkapja néhány elmaradt versenytársadat.

A nézők hiába imádják a küzdelmet, te becsületesen akarsz nyerni. És ha már itt tartunk, gyorsan újra beletaposol a gázba.`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_2'
            }
        ]
    },

    'page_1_3_3': {
        id: 'page_1_3_3',
        title: 'Látványos farolás!',
        image: 'images/scenes/page_1_3_3',
        text: `A lényeg a szórakozás. Széles mosollyal az arcodon gázt adsz és egy látványos farolással éppen elmégy mellette.

A rémült versenybíró a tengerbe veti magát! Ez elképesztő, a nézők virágokat dobálva jutalmaznak meg érte... és még valamivel, ami kapóra jöhet a versenyen!

<strong>Keresd meg a csúzlit a zöld tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: 'Megszerezted: 🏹 Csúzli',
                action: { wheel: 'green', value: 'slingshot' },
                nextPage: 'page_2'
            }
        ]
    },

    // ===== 2. FŐOLDAL =====
    'page_2': {
        id: 'page_2',
        title: 'A barlang',
        image: 'images/scenes/page_2',
        text: `A startvonal zűrzavarát hátrahagyva a többiekkel együtt behajtasz az egyik mély barlangjáratba.

A barlang túloldalán észreveszel egy kijáratot, de egy hatalmas pókháló feszül előtte az álló cseppkövek között.

Melyik útvonalat választod?`,
        choices: [
            { text: 'A veszélyes útvonalat a mennyezeten?', description: '', nextPage: 'page_2_1_1' },
            { text: 'Továbbhaladsz a járatban a pókhálón keresztül?', description: '', nextPage: 'page_2_2_1' },
            { text: 'Letérve az útról a lezárt bányába mégy?', description: '', nextPage: 'page_2_3_1' }
        ]
    },

    // ----- 2. főoldal, 1. sáv (FELSŐ) -----
    // Mennyezeten át
    'page_2_1_1': {
        id: 'page_2_1_1',
        title: 'A mennyezeten',
        image: 'images/scenes/page_2_1_1',
        text: `Úgy véled elég gyorsan mégy, hogy megcsinálj egy hurkot…

Ro-bi vagy a Jövő-Menővel?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Ro-bi vagyok',
                condition: { wheel: 'red', value: 'robi' },
                nextPage: 'page_2_1_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nem Ro-bi vagyok',
                conditionNot: { wheel: 'red', value: 'robi' },
                nextPage: 'page_2_1_3'
            }
        ]
    },

    'page_2_1_2': {
        id: 'page_2_1_2',
        title: 'Fejjel lefelé!',
        image: 'images/scenes/page_2_1_2',
        text: `Kiszámolod a legjobb útvonalat és a többit a tapadókorongos kerekek elvégzik! Látod, hogy odalent a versenyzők beleakadnak a pókhálóba.

A boltíves mennyezeten haladsz fejjel lefelé, és közben megismerkedsz egy barátságos denevérrel.

<strong>Keresd meg a denevért a sárga tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: 'Megszerezted: 🦇 Denevér',
                action: { wheel: 'yellow', value: 'bat' },
                nextPage: 'page_3'
            }
        ]
    },

    'page_2_1_3': {
        id: 'page_2_1_3',
        title: 'Zuhanás!',
        image: 'images/scenes/page_2_1_3',
        text: `Sajnos a sebesség nem minden: a mennyezet közepén lehetetlen tovább a levegőben maradni. Le fogsz zuhanni!

Így is történik, de az alattad levő pókháló felfogja a zuhanásodat. Újra elindulsz, de lassabban és kissé csüggedten.`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_3'
            }
        ]
    },

    // ----- 2. főoldal, 2. sáv (KÖZÉPSŐ) -----
    // Pókhálón keresztül
    'page_2_2_1': {
        id: 'page_2_2_1',
        title: 'A pókháló',
        image: 'images/scenes/page_2_2_1',
        text: `Végülis ez csak egy vacak pókháló, nem igaz?

Ro-bi vagy a Jövő-Menővel?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Ro-bi vagyok',
                condition: { wheel: 'red', value: 'robi' },
                nextPage: 'page_2_2_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nem Ro-bi vagyok',
                conditionNot: { wheel: 'red', value: 'robi' },
                nextPage: 'page_2_2_3'
            }
        ]
    },

    'page_2_2_2': {
        id: 'page_2_2_2',
        title: 'Beleragadtál!',
        image: 'images/scenes/page_2_2_2',
        text: `Sajnos a Jövő-menő nem elég áramvonalas és nem is elég erős, hogy könnyedén átszakítsa a hálót. Végül beleragadsz, mint egy kis rovar!

Értékes időt veszítesz, amíg kiszabadítod magad, miközben átkozod a pókot, aki nagyon sajnálja, hogy ekkora bajt okozott…`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_3'
            }
        ]
    },

    'page_2_2_3': {
        id: 'page_2_2_3',
        title: 'Átszakítod a hálót!',
        image: 'images/scenes/page_2_2_3',
        text: `Könnyedén szétszaggatva őket keresztülvágsz a fehér fonalakon.

Elhagyod a barlangtermet, de előtte még elteszel egy pókhálófonalat, ami a kocsira ragadt. Ez később még jól jöhet…

<strong>Keresd meg a pókhálófonalat a sárga tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz egy oldalt és folytasd a versenyt!',
                description: 'Megszerezted: 🕸️ Pókhálófonál',
                action: { wheel: 'yellow', value: 'spiderweb' },
                nextPage: 'page_3'
            }
        ]
    },

    // ----- 2. főoldal, 3. sáv (ALSÓ) -----
    // Lezárt bányába
    'page_2_3_1': {
        id: 'page_2_3_1',
        title: 'A bánya',
        image: 'images/scenes/page_2_3_1',
        text: `A szűk, föld alatti járatban koromsötét van. Egy hatalmas teherautó szintén a bányajárat felé tart felkapcsolt reflektorokkal.

Előtte akarsz beérni a járatba?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Előtte akarsz beérni',
                nextPage: 'page_2_3_2'
            },
            {
                text: 'Ha inkább őt engednéd előre, lapozz két oldalt!',
                description: 'Engeded előre',
                nextPage: 'page_2_3_3'
            }
        ]
    },

    'page_2_3_2': {
        id: 'page_2_3_2',
        title: 'Turbókristály!',
        image: 'images/scenes/page_2_3_2',
        text: `Teljes sebességgel a sziklás tárnába rontasz. A falak különös fénnyel csillognak…

Kifelé tartasz a tárnából, amikor hirtelen felismered a kérdéses ércet. Ez egy nagyon erős üzemanyag, amit hosszú, egyenes szakaszokon használnak, és turbóként szolgálhat. Micsoda szerencse!

<strong>Keresd meg a turbókristályt a sárga tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: 'Megszerezted: 💎 Turbókristály',
                action: { wheel: 'yellow', value: 'turbocrystal' },
                nextPage: 'page_3'
            }
        ]
    },

    'page_2_3_3': {
        id: 'page_2_3_3',
        title: 'Elzárt járat',
        image: 'images/scenes/page_2_3_3',
        text: `A hatalmas jármű teljes sebességgel száguld a tárna felé.

De túlságosan nagy, és a tárnába szorul. Az elzárt járat azt jelenti, hogy vissza kell térned az útra, amivel időt veszítesz.`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_3'
            }
        ]
    },

    // ===== 3. FŐOLDAL (placeholder) =====
    'page_3': {
        id: 'page_3',
        title: '3. főoldal',
        text: `(Ide jön a 3. főoldal szövege)`,
        choices: [
            { text: '1. választás', description: '', nextPage: 'page_3_1_1' },
            { text: '2. választás', description: '', nextPage: 'page_3_2_1' },
            { text: '3. választás', description: '', nextPage: 'page_3_3_1' }
        ]
    },

    // Példa feltételes oldalra
    'page_example_condition': {
        id: 'page_example_condition',
        title: 'Akadály az úton!',
        text: `Egy hatalmas szikla zárja el az utat! Mit teszel?`,
        choices: [
            {
                text: 'Használod a csúzlit',
                description: 'Lelövöd a sziklát',
                // Csak akkor választható, ha van csúzli
                condition: { wheel: 'green', value: 'slingshot' },
                nextPage: 'page_success'
            },
            {
                text: 'Kerülőutat keresel',
                description: 'Hosszabb, de biztonságos',
                nextPage: 'page_detour'
            },
            {
                text: 'Átugrod a sziklát',
                description: 'Kockázatos manőver',
                // Ez sebtapaszt adhat
                nextPage: 'page_jump'
            }
        ]
    },

    // Példa tárcsa módosító oldalra
    'page_example_action': {
        id: 'page_example_action',
        title: 'Találtál valamit!',
        text: `Az út szélén egy csúzli hever. Felveszed?`,
        choices: [
            {
                text: 'Felveszed a csúzlit',
                description: 'Lehet még hasznos lesz',
                action: { wheel: 'green', value: 'slingshot' },
                nextPage: 'page_continue'
            },
            {
                text: 'Otthagyod',
                description: 'Nincs rá szükséged',
                nextPage: 'page_continue'
            },
            {
                text: 'Megvizsgálod közelebbről',
                description: 'Ki tudja, mi lehet még itt',
                nextPage: 'page_investigate'
            }
        ]
    },

    // TODO: A könyv összes oldala ide kerül majd
};

/**
 * Oldal lekérése ID alapján
 */
function getPage(pageId) {
    return Pages[pageId] || null;
}

/**
 * Választás ellenőrzése - teljesül-e a feltétel
 */
function canChoose(choice) {
    // Ha van "igen" feltétel (condition)
    if (choice.condition) {
        const wheelState = GameState.getWheelState(choice.condition.wheel);
        if (!wheelState) return true;
        return wheelState.fieldId === choice.condition.value;
    }

    // Ha van "nem" feltétel (conditionNot)
    if (choice.conditionNot) {
        const wheelState = GameState.getWheelState(choice.conditionNot.wheel);
        if (!wheelState) return true;
        return wheelState.fieldId !== choice.conditionNot.value;
    }

    return true;
}

/**
 * Választás végrehajtása
 */
function executeChoice(choice) {
    // Ha van tárcsa módosítás
    if (choice.action) {
        const wheel = GameState.WHEELS[choice.action.wheel.toUpperCase()];
        if (wheel) {
            // Megkeressük a megfelelő pozíciót
            const fieldIndex = wheel.fields.findIndex(f => f.id === choice.action.value);
            if (fieldIndex !== -1) {
                GameState.setWheelPosition(choice.action.wheel, fieldIndex);
            }
        }
    }

    // Navigálás a következő oldalra
    if (choice.nextPage) {
        return choice.nextPage;
    }

    return null;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Pages, getPage, canChoose, executeChoice };
}
