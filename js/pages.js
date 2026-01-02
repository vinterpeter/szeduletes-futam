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

    // ===== 3. FŐOLDAL =====
    'page_3': {
        id: 'page_3',
        title: 'A vulkán',
        image: 'images/scenes/page_3',
        text: `Ahogy egyre mélyebbre hatolsz a hegyben, nő a hőmérséklet. Nem véletlenül, ugyanis egy vulkán közepe felé tartasz.

Egyre kevesebb versenyzőt látsz, néhányan komoly bajban vannak, mások már fel is adták a versenyt. Kissé megnyugodhatsz…

Mit akarsz csinálni?`,
        choices: [
            { text: 'A lehető legkevesebbet kockáztatva a boxutcán haladsz át?', description: '', nextPage: 'page_3_1_1' },
            { text: 'A magma közelébe merészkedsz?', description: '', nextPage: 'page_3_2_1' },
            { text: 'Továbbmégy és megnézed a balesetet?', description: '', nextPage: 'page_3_3_1' }
        ]
    },

    // ----- 3. főoldal, 1. sáv (FELSŐ) -----
    // Boxutca
    'page_3_1_1': {
        id: 'page_3_1_1',
        title: 'A boxutca',
        image: 'images/scenes/page_3_1_1',
        text: `A járatból kirobbanva kissé nagyobb sebességgel érkezel. Szerelőket és autóalkatrészeket veszel észre egy sík területen.

Samu vagy a Vörös Villámmal?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Samu vagyok',
                condition: { wheel: 'red', value: 'samu' },
                nextPage: 'page_3_1_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nem Samu vagyok',
                conditionNot: { wheel: 'red', value: 'samu' },
                nextPage: 'page_3_1_3'
            }
        ]
    },

    'page_3_1_2': {
        id: 'page_3_1_2',
        title: 'Teljes gázzal!',
        image: 'images/scenes/page_3_1_2',
        text: `A sebességkorlátozó táblákon levő számok olyan alacsonyak, hogy fel sincsenek rajzolva a Vörös Villám sebességmérőjén.

Teljes gázzal haladva lehagyod a versenyzőket, akik megálltak, és pillanatok alatt eléred a kijáratot.`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_4'
            }
        ]
    },

    'page_3_1_3': {
        id: 'page_3_1_3',
        title: 'Tuning',
        image: 'images/scenes/page_3_1_3',
        text: `Ismered a járműved erősségeit és gyengéit, ezért úgy döntesz, megállsz egy pillanatra és megnézed a tuningcuccokat…

A szerelők átvizsgálják a kocsidat. Három fúrás, egy csinos kis számla és a kocsid jobb, mint korábban… egy kis extrával.

<strong>Keresd meg a terepgumikat a kék tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: 'Megszerezted: 🛞 Terepgumik',
                action: { wheel: 'blue', value: 'offroadtire' },
                nextPage: 'page_4'
            }
        ]
    },

    // ----- 3. főoldal, 2. sáv (KÖZÉPSŐ) -----
    // Magma
    'page_3_2_1': {
        id: 'page_3_2_1',
        title: 'A lávafolyó',
        image: 'images/scenes/page_3_2_1',
        text: `A láva bugyogva tör fel a vulkánból és hullámokban lepi el az utat. Egy aranytojás kelti fel a figyelmedet, ami mintha egy oltáron ülne.

Samu vagy a Vörös Villámmal?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Samu vagyok',
                condition: { wheel: 'red', value: 'samu' },
                nextPage: 'page_3_2_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nem Samu vagyok',
                conditionNot: { wheel: 'red', value: 'samu' },
                nextPage: 'page_3_2_3'
            }
        ]
    },

    'page_3_2_2': {
        id: 'page_3_2_2',
        title: 'Aranytojás!',
        image: 'images/scenes/page_3_2_2',
        text: `Jól ismered a kocsidat és tudod, hogy hiába ijesztő a láva, biztonságosan tudsz száguldani. Csak tartsd az irányt. Egyébként a Vörös Villám oldalára festett lángok úgyis megvédenek bármitől.

Akkora előnyben vagy, hogy még azt is megnézheted, ahogy a riválisaidnak megég a hátsója. És a hatalmas aranytojás csak tiéd!

<strong>Keresd meg a hatalmas aranytojást a kék tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: 'Megszerezted: 🥚 Aranytojás',
                action: { wheel: 'blue', value: 'goldenegg' },
                nextPage: 'page_4'
            }
        ]
    },

    'page_3_2_3': {
        id: 'page_3_2_3',
        title: 'Veszélyes láva',
        image: 'images/scenes/page_3_2_3',
        text: `Vállalod a kockázatot, de a helyzet korántsem könnyű… Hatalmas erőfeszítéseket kell tenned, hogy a láva ne eméssze el a kocsidat.

A többi versenyző megelőz, mire eléred a terem közepét. Nincs aranytojás, de gondolkodni sincs időd ezen. Gyorsan távozol.`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_4'
            }
        ]
    },

    // ----- 3. főoldal, 3. sáv (ALSÓ) -----
    // Baleset
    'page_3_3_1': {
        id: 'page_3_3_1',
        title: 'A baleset',
        image: 'images/scenes/page_3_3_1',
        text: `A balesethez közeledve látod, hogy a pilóta kétségbeesetten lenget egy zsebkendőt. Vajon ez csapda?

Megállsz, hogy segíts szegény sofőrnek?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Segítek neki',
                nextPage: 'page_3_3_2'
            },
            {
                text: 'Ha inkább megszabadulnál tőle, lapozz két oldalt!',
                description: 'Továbbhajtok',
                nextPage: 'page_3_3_3'
            }
        ]
    },

    'page_3_3_2': {
        id: 'page_3_3_2',
        title: 'Heléna',
        image: 'images/scenes/page_3_3_2',
        text: `Helénaként mutatkozik be: archeológus és kalandor, aki megígéri, hogy hálája jeléül segít neked a verseny további részében.

Megfogja a kezed, beszáll a járműbe és melléd huppan. Két embernek elég szűkös a hely, de boldogultok.

<strong>Keresd meg Helénát, a kalandort a kék tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: 'Megszerezted: 👩‍🦰 Heléna',
                action: { wheel: 'blue', value: 'helena' },
                nextPage: 'page_4'
            }
        ]
    },

    'page_3_3_3': {
        id: 'page_3_3_3',
        title: 'Lávába lökés',
        image: 'images/scenes/page_3_3_3',
        text: `Nem tudod megállni, látnod kell, ahogy a kocsi elolvad a lávában. És tessék, csak egy kis lökés kellett neki, és már lángol is!

Megérte, nem is kérdés. Ráadásul így egy riválissal kevesebb. Megkönnyebbülten folytatod a versenyt.`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_4'
            }
        ]
    },

    // ===== 4. FŐOLDAL =====
    'page_4': {
        id: 'page_4',
        title: 'A dzsungel',
        image: 'images/scenes/page_4',
        text: `Kiérsz a vulkánból, egy pillanatra elvakít a fény, de máris egy dzsungelben találod magad!

Hirtelen megjelenik egy ellenfeled, Zord, és harcra készen üldözőbe vesz.

Hogyan akarsz megszabadulni tőle?`,
        choices: [
            { text: 'Lerázod a templomban?', description: '', nextPage: 'page_4_1_1' },
            { text: 'Átkelsz a Változó Mocsarakon?', description: '', nextPage: 'page_4_2_1' },
            { text: 'Felkelted a pteroszaurusz mama figyelmét?', description: '', nextPage: 'page_4_3_1' }
        ]
    },

    // ----- 4. főoldal, 1. sáv (FELSŐ) -----
    // Templom
    'page_4_1_1': {
        id: 'page_4_1_1',
        title: 'A templom',
        image: 'images/scenes/page_4_1_1',
        text: `Átvágsz a sűrű növényzeten a titokzatos templomba. Zord a sarkadban van, de úgy tűnik, tétovázik. Az a hír járja, hogy ez a hely el van átkozva.

Veled van Heléna, a kalandor a kék tárcsán?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Heléna velem van',
                condition: { wheel: 'blue', value: 'helena' },
                nextPage: 'page_4_1_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nincs velem Heléna',
                conditionNot: { wheel: 'blue', value: 'helena' },
                nextPage: 'page_4_1_3'
            }
        ]
    },

    'page_4_1_2': {
        id: 'page_4_1_2',
        title: 'Heléna segít!',
        image: 'images/scenes/page_4_1_2',
        text: `Odabent kissé bonyolultnak tűnik a dolog… Szerencsére Heléna úgy ismeri a helyet, mint a tenyerét.

Zord az öklével a földet veri, miközben már a sarkadban liheg. Hála a segítőtársadnak, épp a kijáratnál sikerül csapdába csalni őt.`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_5'
            }
        ]
    },

    'page_4_1_3': {
        id: 'page_4_1_3',
        title: 'Eltévedtél!',
        image: 'images/scenes/page_4_1_3',
        text: `Odabent teljesen kilátástalanná válik a helyzet. Innen lehetetlen kitalálni. Ráadásul Zord dühös üvöltése is rád hozza a frászt.

Leállítod a motort, és veszel egy nagy levegőt. Egy kis idő után Zord már messze jár. De jóval előtted.

<strong>Keresd meg Zordot a kék tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: 'Zord megelőzött: 👹 Zord',
                action: { wheel: 'blue', value: 'zord' },
                nextPage: 'page_5'
            }
        ]
    },

    // ----- 4. főoldal, 2. sáv (KÖZÉPSŐ) -----
    // Mocsár
    'page_4_2_1': {
        id: 'page_4_2_1',
        title: 'A mocsár',
        image: 'images/scenes/page_4_2_1',
        text: `Azt reméled, hogy le tudod lassítani az ellenfeledet, akinek a kocsija nehezebb a tiédnél. Egy kis szerencsével a dzsungel nedves talaja megteszi, amit kell.

Terepgumik vannak a kocsidon a kék tárcsán?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Van terepgumim',
                condition: { wheel: 'blue', value: 'offroadtire' },
                nextPage: 'page_4_2_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nincs terepgumim',
                conditionNot: { wheel: 'blue', value: 'offroadtire' },
                nextPage: 'page_4_2_3'
            }
        ]
    },

    'page_4_2_2': {
        id: 'page_4_2_2',
        title: 'Terepgumik!',
        image: 'images/scenes/page_4_2_2',
        text: `Megjelenik Zord, kidönt néhány fát, és rád akar ijeszteni.

A gumijaid csodákat művelnek a sárban. Amikor végül Zord gigantikus kerekei elakadnak, ugrálsz örömödben!`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_5'
            }
        ]
    },

    'page_4_2_3': {
        id: 'page_4_2_3',
        title: 'Elakadtál!',
        image: 'images/scenes/page_4_2_3',
        text: `Sajnos a puha, ragacsos sár megfogja a kerekeidet, és hirtelen teljesen elakadsz.

Zord hatalmasat fékez. Hangosan nevet, amikor meglát, majd a gázra tapos. Mire kiérsz a dzsungelből, már jóval előtted jár.

<strong>Keresd meg Zordot a kék tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: 'Zord megelőzött: 👹 Zord',
                action: { wheel: 'blue', value: 'zord' },
                nextPage: 'page_5'
            }
        ]
    },

    // ----- 4. főoldal, 3. sáv (ALSÓ) -----
    // Pteroszaurusz
    'page_4_3_1': {
        id: 'page_4_3_1',
        title: 'A pteroszaurusz',
        image: 'images/scenes/page_4_3_1',
        text: `A visszapillantó tükröddel a napfényt a lény felé irányítod, hogy felébreszd őt. Felszáll a fészkéről, és lecsap az irányodba.

Nálad van a tojás a kék tárcsán?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Van aranytojásom',
                condition: { wheel: 'blue', value: 'goldenegg' },
                nextPage: 'page_4_3_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nincs aranytojásom',
                conditionNot: { wheel: 'blue', value: 'goldenegg' },
                nextPage: 'page_4_3_3'
            }
        ]
    },

    'page_4_3_2': {
        id: 'page_4_3_2',
        title: 'Kapd el!',
        image: 'images/scenes/page_4_3_2',
        text: `A hatalmas szárnyasgyík egyre közelebb ér, és Zord próbál megragadni téged, hogy nehéz helyzetbe hozzon. Odadobod neki az aranytojást: "Kapd el!"

Zavartan elkapja a felé repülő tárgyat, de túl későn kap észbe. A dühös pteroszaurusz felemeli őt az égbe. Végre megszabadultál tőle!`,
        choices: [
            {
                text: 'Lapozz két oldalt, és folytasd a versenyt!',
                description: '',
                nextPage: 'page_5'
            }
        ]
    },

    'page_4_3_3': {
        id: 'page_4_3_3',
        title: 'Elkapott!',
        image: 'images/scenes/page_4_3_3',
        text: `Zord üvöltése eléri a kívánt hatást. Mivel te kevésbé tűnsz fenyegetőnek, a hatalmas hüllő rád csap le! Rémlik, hogy volt egy terved, de jaj, mi is lehetett az?

Elkap, a magasba emel, majd valahol a dzsungel mélyén ereszt el. A zuhanásod felfogja a vastag növényzet, de mire megtalálod a kiutat, Zord már messze jár.

<strong>Keresd meg Zordot a kék tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz egy oldalt, és folytasd a versenyt!',
                description: 'Zord megelőzött: 👹 Zord',
                action: { wheel: 'blue', value: 'zord' },
                nextPage: 'page_5'
            }
        ]
    },

    // ===== 5. FŐOLDAL =====
    'page_5': {
        id: 'page_5',
        title: 'A kanyon',
        image: 'images/scenes/page_5',
        text: `A mocsarat magad mögött hagyod és eléred a kanyont. Veled szemben Verecky Mici grófnő lebeg ráérősen, a sziklákkal mit sem törődve.

A léghajója korlátján áthajolva bombákat hajigál az útra és gúnyos megjegyzéseket tesz.

Mit akarsz tenni?`,
        choices: [
            { text: 'Megtámadod a léghajót?', description: '', nextPage: 'page_5_1_1' },
            { text: 'A robbanások fölé ugratsz?', description: '', nextPage: 'page_5_2_1' },
            { text: 'Menedéket keresel az alagútban?', description: '', nextPage: 'page_5_3_1' }
        ]
    },

    // ----- 5. főoldal, 1. sáv (FELSŐ) -----
    // Léghajó támadás
    'page_5_1_1': {
        id: 'page_5_1_1',
        title: 'A léghajó',
        image: 'images/scenes/page_5_1_1',
        text: `Hogy bosszút állj rajta, kiszúrhatnád a fránya léggömbjét! Körbenézel valami hegyes után kutatva…

Nálad van a csúzli a zöld tárcsán vagy a Tankát vezeted?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Van csúzlim vagy Tanka vagyok',
                condition: { wheel: 'green', value: 'slingshot' },
                nextPage: 'page_5_1_2'
            },
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Panka vagyok a Tankával',
                condition: { wheel: 'red', value: 'panka' },
                nextPage: 'page_5_1_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nincs csúzlim és nem Tanka',
                nextPage: 'page_5_1_3'
            }
        ]
    },

    'page_5_1_2': {
        id: 'page_5_1_2',
        title: 'Tökéletes lövés!',
        image: 'images/scenes/page_5_1_2',
        text: `Benedvesített ujjadat a levegőbe tartod, és megnézed a szél irányát és sebességét, majd kiszámolod a megfelelő szöget. Célba veszed a léggömböt egy kaktusszal és…

Tökéletes lövés! A tüskék átszúrják a léghajót, ami ereszt, mint egy lyukas vödör és közben furcsa hangot ad ki.`,
        choices: [
            {
                text: 'Lapozz két oldalt, hogy megőrizd a lendületed!',
                description: '',
                nextPage: 'page_6'
            }
        ]
    },

    'page_5_1_3': {
        id: 'page_5_1_3',
        title: 'Túl messze!',
        image: 'images/scenes/page_5_1_3',
        text: `Ez a kaktusz majd elvégzi a dolgát. Elhajítod, amilyen erősen csak tudod a forró sivatagi széllel szemben. De… nehezebb, mint gondoltad. És még az ujjaid is belesajdulnak!

A grófnő a látóhatáron túlságosan messze van.

<strong>Keresd meg Verecky grófnőt a zöld tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz egy oldalt, hogy visszacsatlakozz a versenybe!',
                description: 'A grófnő megelőzött: 👸 Grófnő',
                action: { wheel: 'green', value: 'countess' },
                nextPage: 'page_6'
            }
        ]
    },

    // ----- 5. főoldal, 2. sáv (KÖZÉPSŐ) -----
    // Ugrás a robbanások fölé
    'page_5_2_1': {
        id: 'page_5_2_1',
        title: 'A rámpa',
        image: 'images/scenes/page_5_2_1',
        text: `Tövig nyomva a gázpedált a rámpa felé hajtasz. Csuriban vannak az ujjaid, és…

Nálad vannak a lufik a zöld tárcsán vagy a Jövő-Menőt vezeted?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Vannak lufijaim',
                condition: { wheel: 'green', value: 'balloons' },
                nextPage: 'page_5_2_2'
            },
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Ro-Bi vagyok a Jövő-Menővel',
                condition: { wheel: 'red', value: 'robi' },
                nextPage: 'page_5_2_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nincs lufim és nem Jövő-Menő',
                nextPage: 'page_5_2_3'
            }
        ]
    },

    'page_5_2_2': {
        id: 'page_5_2_2',
        title: 'Repülés!',
        image: 'images/scenes/page_5_2_2',
        text: `… repülsz! A robbanások ereje segít magasabbra emelkedni, a szél pedig tovarepít.

Lehagyod a grófnőt, és elmenekülsz a gonosz kis trükkjei elől. Jobban tette volna, ha inkább a versenyre koncentrál!`,
        choices: [
            {
                text: 'Lapozz két oldalt, hogy megőrizd a lendületed!',
                description: '',
                nextPage: 'page_6'
            }
        ]
    },

    'page_5_2_3': {
        id: 'page_5_2_3',
        title: 'Zuhanás!',
        image: 'images/scenes/page_5_2_3',
        text: `A levegőbe emelkedsz! Néhány kellemes másodpercig repülsz, de semmi sem tart örökké, és a kanyon mélyére zuhansz.

Miután összeszeded magad, ismét csak a sivatagi szél fütyülését hallod. Ami Verecky Micit illeti, ő már messze jár…

<strong>Keresd meg Verecky grófnőt a zöld tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz egy oldalt, hogy visszacsatlakozz a versenybe!',
                description: 'A grófnő megelőzött: 👸 Grófnő',
                action: { wheel: 'green', value: 'countess' },
                nextPage: 'page_6'
            }
        ]
    },

    // ----- 5. főoldal, 3. sáv (ALSÓ) -----
    // Alagút / vasút
    'page_5_3_1': {
        id: 'page_5_3_1',
        title: 'A vasúti sín',
        image: 'images/scenes/page_5_3_1',
        text: `Jaj, ne… a vasúti sín nem volt a legjobb ötlet! És még a vonat is jön!

Nálad van a mászókötél a zöld tárcsán?`,
        choices: [
            {
                text: 'Ha igen, lapozz egy oldalt!',
                description: 'Van mászókötelem',
                condition: { wheel: 'green', value: 'rope' },
                nextPage: 'page_5_3_2'
            },
            {
                text: 'Ha nem, lapozz két oldalt!',
                description: 'Nincs mászókötelem',
                conditionNot: { wheel: 'green', value: 'rope' },
                nextPage: 'page_5_3_3'
            }
        ]
    },

    'page_5_3_2': {
        id: 'page_5_3_2',
        title: 'Sínen vagy!',
        image: 'images/scenes/page_5_3_2',
        text: `Valami eszedbe jutott! Egy próbálkozás, majd még egy, és máris sínen vagy… a mozdonyra kapaszkodva!

Könnyedén magad mögött hagyod a kanyont! Amikor hátra nézel, a grófnő már csak egy apró pont az égen.`,
        choices: [
            {
                text: 'Lapozz két oldalt, hogy megőrizd a lendületed!',
                description: '',
                nextPage: 'page_6'
            }
        ]
    },

    'page_5_3_3': {
        id: 'page_5_3_3',
        title: 'Lemaradtál!',
        image: 'images/scenes/page_5_3_3',
        text: `A vonat gyorsan elrobog, és te ismét magadra maradsz. Az út hepehupás, és fájó alfeled azt súgja, hogy jobb lengéscsillapítókat kellene beszerezned.

Végre napfény! És a távolban az égen: Mici grófnő! Legalább a bombákat elkerülted…

<strong>Keresd meg Verecky grófnőt a zöld tárcsán!</strong>`,
        choices: [
            {
                text: 'Lapozz egy oldalt, hogy visszacsatlakozz a versenybe!',
                description: 'A grófnő megelőzött: 👸 Grófnő',
                action: { wheel: 'green', value: 'countess' },
                nextPage: 'page_6'
            }
        ]
    },

    // ===== 6. FŐOLDAL (placeholder) =====
    'page_6': {
        id: 'page_6',
        title: '6. főoldal',
        text: `(Ide jön a 6. főoldal szövege)`,
        choices: [
            { text: '1. választás', description: '', nextPage: 'page_6_1_1' },
            { text: '2. választás', description: '', nextPage: 'page_6_2_1' },
            { text: '3. választás', description: '', nextPage: 'page_6_3_1' }
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
