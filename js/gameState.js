/**
 * Szédületes Futam - Játék Állapottér
 *
 * Ez a modul kezeli a játék teljes állapotát:
 * - Aktuális oldal
 * - Választott karakter
 * - 4 tárcsa (tárgyak és sebtapaszok)
 * - Játék előzmények
 */

const GameState = {
    // Karakterek definíciója
    CHARACTERS: {
        PANKA: {
            id: 'panka',
            name: 'Panka Tanka',
            vehicle: 'páncélozott tank',
            color: '#4CAF50' // zöld
        },
        ROBI: {
            id: 'robi',
            name: 'Ro-Bi Jövő-Menő',
            vehicle: 'szemetes masinka',
            color: '#2196F3' // kék
        },
        SAMU: {
            id: 'samu',
            name: 'Samu Vörös Villám',
            vehicle: 'vagány versenyautó',
            color: '#F44336' // piros
        }
    },

    // Tárcsa definíciók (4 színes tárcsa a sarokban)
    WHEELS: {
        GREEN: {
            id: 'green',
            name: 'Zöld tárcsa',
            color: '#4CAF50',
            position: 'top-left',
            // Mezők a tárcsán - a könyvből
            fields: [
                { id: 'empty', name: 'Üres', icon: 'images/icons/empty.svg' },
                { id: 'rope', name: 'Kötél és mászóhorog', icon: 'images/icons/rope.svg' },
                { id: 'balloons', name: 'Lufik', icon: 'images/icons/balloons.svg' },
                { id: 'slingshot', name: 'Csúzli', icon: 'images/icons/slingshot.svg' },
                { id: 'countess', name: 'Verecky grófnő', icon: 'images/icons/countess.svg' }
            ]
        },
        YELLOW: {
            id: 'yellow',
            name: 'Sárga tárcsa',
            color: '#FFEB3B',
            position: 'top-right',
            fields: [
                { id: 'empty', name: 'Üres', icon: 'images/icons/empty.svg' },
                { id: 'bat', name: 'Denevér', icon: 'images/icons/bat.svg' },
                { id: 'spiderweb', name: 'Pókhálófonal', icon: 'images/icons/spiderweb.svg' },
                { id: 'turbocrystal', name: 'Turbókristály', icon: 'images/icons/turbocrystal.svg' },
                { id: 'bajgunar', name: 'Báj Gúnár', icon: 'images/icons/bajgunar.svg' }
            ]
        },
        BLUE: {
            id: 'blue',
            name: 'Kék tárcsa',
            color: '#2196F3',
            position: 'bottom-left',
            fields: [
                { id: 'empty', name: 'Üres', icon: 'images/icons/empty.svg' },
                { id: 'goldenegg', name: 'Aranytojás', icon: 'images/icons/goldenegg.svg' },
                { id: 'helena', name: 'Helána', icon: 'images/icons/helena.svg' },
                { id: 'offroadtire', name: 'Terepgumi', icon: 'images/icons/offroadtire.svg' },
                { id: 'zord', name: 'Zord', icon: 'images/icons/zord.svg' }
            ]
        },
        RED: {
            id: 'red',
            name: 'Piros tárcsa (karakter)',
            color: '#F44336',
            position: 'bottom-right',
            fields: [
                { id: 'panka', name: 'Panka Tanka', icon: 'images/icons/panka.svg' },
                { id: 'robi', name: 'Ro-Bi Jövő-Menő', icon: 'images/icons/robi.svg' },
                { id: 'samu', name: 'Samu Vörös Villám', icon: 'images/icons/samu.svg' }
            ]
        }
    },

    // Tárcsa index mapping
    WHEEL_INDEX: {
        GREEN: 0,
        YELLOW: 1,
        BLUE: 2,
        RED: 3
    },

    // Alapértelmezett állapot
    _defaultState: {
        currentPage: 0,           // Aktuális oldal index
        character: null,          // Választott karakter ID
        wheels: {
            green: 0,             // Zöld tárcsa aktuális pozíció (index a fields tömbben)
            yellow: 0,            // Sárga tárcsa
            blue: 0,              // Kék tárcsa
            red: 0                // Piros tárcsa (sebtapaszok száma: 0-3)
        },
        history: [],              // Meglátogatott oldalak
        isGameOver: false,        // Játék vége flag
        isVictory: false,         // Győzelem flag
        startTime: null           // Játék kezdési ideje
    },

    // Aktuális állapot
    _state: null,

    /**
     * Új játék inicializálása
     * @param {string} characterId - Választott karakter ID
     */
    init(characterId = null) {
        this._state = JSON.parse(JSON.stringify(this._defaultState));
        this._state.startTime = Date.now();

        if (characterId) {
            this.setCharacter(characterId);
        }

        // Tárcsák inicializálása: mindegyik 0 pozícióra (üres/kezdő)
        this._state.wheels = {
            green: 0,
            yellow: 0,
            blue: 0,
            red: 0
        };

        this._saveToLocalStorage();
        this._notifyListeners();

        console.log('Játék inicializálva:', this._state);
    },

    /**
     * Karakter beállítása
     * @param {string} characterId - Karakter ID (panka, robi, samu)
     */
    setCharacter(characterId) {
        const validIds = Object.values(this.CHARACTERS).map(c => c.id);
        if (!validIds.includes(characterId)) {
            console.error('Érvénytelen karakter ID:', characterId);
            return false;
        }
        this._state.character = characterId;
        this._saveToLocalStorage();
        this._notifyListeners();
        return true;
    },

    /**
     * Aktuális karakter lekérése
     * @returns {object|null} Karakter objektum
     */
    getCharacter() {
        if (!this._state.character) return null;
        return Object.values(this.CHARACTERS).find(c => c.id === this._state.character);
    },

    /**
     * Oldal váltás
     * @param {number} pageIndex - Új oldal index
     */
    goToPage(pageIndex) {
        if (pageIndex < 0) {
            console.error('Érvénytelen oldal index:', pageIndex);
            return false;
        }

        // Előzmények mentése
        this._state.history.push({
            page: this._state.currentPage,
            timestamp: Date.now()
        });

        this._state.currentPage = pageIndex;
        this._saveToLocalStorage();
        this._notifyListeners();

        console.log('Oldal váltás:', pageIndex);
        return true;
    },

    /**
     * Aktuális oldal lekérése
     * @returns {number} Oldal index
     */
    getCurrentPage() {
        return this._state.currentPage;
    },

    /**
     * Tárcsa forgatása (pozíció változtatás)
     * @param {string} wheelColor - Tárcsa szín (green, yellow, blue, red)
     * @param {number} position - Új pozíció index
     */
    setWheelPosition(wheelColor, position) {
        const validColors = ['green', 'yellow', 'blue', 'red'];
        if (!validColors.includes(wheelColor)) {
            console.error('Érvénytelen tárcsa szín:', wheelColor);
            return false;
        }

        const wheel = this.WHEELS[wheelColor.toUpperCase()];
        if (position < 0 || position >= wheel.fields.length) {
            console.error('Érvénytelen pozíció:', position);
            return false;
        }

        this._state.wheels[wheelColor] = position;
        this._saveToLocalStorage();
        this._notifyListeners();

        console.log(`${wheelColor} tárcsa forgatva:`, position, wheel.fields[position]);
        return true;
    },

    /**
     * Tárcsa forgatása eggyel előre
     * @param {string} wheelColor - Tárcsa szín
     */
    rotateWheel(wheelColor) {
        const wheel = this.WHEELS[wheelColor.toUpperCase()];
        if (!wheel) return false;

        const currentPos = this._state.wheels[wheelColor];
        const newPos = (currentPos + 1) % wheel.fields.length;
        return this.setWheelPosition(wheelColor, newPos);
    },

    /**
     * Tárcsa aktuális pozíció lekérése
     * @param {string} wheelColor - Tárcsa szín
     * @returns {object} { position, field, wheel }
     */
    getWheelState(wheelColor) {
        const wheel = this.WHEELS[wheelColor.toUpperCase()];
        if (!wheel) return null;

        const position = this._state.wheels[wheelColor];
        const field = wheel.fields[position];
        return {
            position: position,
            field: field,
            fieldId: field ? field.id : null,
            fieldName: field ? field.name : null,
            fieldIcon: field ? field.icon : null,
            wheel: wheel
        };
    },

    /**
     * Összes tárcsa állapot lekérése
     * @returns {object} Összes tárcsa állapota
     */
    getAllWheelStates() {
        return {
            green: this.getWheelState('green'),
            yellow: this.getWheelState('yellow'),
            blue: this.getWheelState('blue'),
            red: this.getWheelState('red')
        };
    },

    /**
     * Sebtapasz hozzáadása (piros tárcsa forgatása)
     * @returns {boolean} Sikerült-e (max 3)
     */
    addBandage() {
        const currentBandages = this._state.wheels.red;
        if (currentBandages >= 3) {
            console.log('Maximum sebtapasz elérve (3)');
            return false;
        }
        this.setWheelPosition('red', currentBandages + 1);
        return true;
    },

    /**
     * Sebtapasz használata (sérülés esetén)
     * @returns {boolean} Sikerült-e használni
     */
    useBandage() {
        const currentBandages = this._state.wheels.red;
        if (currentBandages > 0) {
            this.setWheelPosition('red', currentBandages - 1);
            return true;
        }
        return false;
    },

    /**
     * Van-e sebtapasz
     * @returns {boolean}
     */
    hasBandage() {
        return this._state.wheels.red > 0;
    },

    /**
     * Sebtapaszok száma
     * @returns {number}
     */
    getBandageCount() {
        return this._state.wheels.red;
    },

    /**
     * Játék vége beállítása
     * @param {boolean} isVictory - Győzelem vagy vereség
     */
    setGameOver(isVictory = false) {
        this._state.isGameOver = true;
        this._state.isVictory = isVictory;
        this._saveToLocalStorage();
        this._notifyListeners();
    },

    /**
     * Játék vége állapot lekérése
     * @returns {object} { isGameOver, isVictory }
     */
    getGameOverState() {
        return {
            isGameOver: this._state.isGameOver,
            isVictory: this._state.isVictory
        };
    },

    /**
     * Teljes állapot lekérése
     * @returns {object} Állapot objektum
     */
    getState() {
        return JSON.parse(JSON.stringify(this._state));
    },

    /**
     * Játék visszaállítása mentésből
     * @returns {boolean} Sikerült-e
     */
    loadFromLocalStorage() {
        try {
            const saved = localStorage.getItem('szeduletesFutam_state');
            if (saved) {
                this._state = JSON.parse(saved);
                this._notifyListeners();
                console.log('Játék betöltve:', this._state);
                return true;
            }
        } catch (e) {
            console.error('Hiba a mentés betöltésekor:', e);
        }
        return false;
    },

    /**
     * Mentés localStorage-ba
     */
    _saveToLocalStorage() {
        try {
            localStorage.setItem('szeduletesFutam_state', JSON.stringify(this._state));
        } catch (e) {
            console.error('Hiba a mentéskor:', e);
        }
    },

    /**
     * Mentés törlése
     */
    clearSave() {
        localStorage.removeItem('szeduletesFutam_state');
        this._state = null;
    },

    // Listener rendszer az UI frissítéshez
    _listeners: [],

    /**
     * Listener hozzáadása
     * @param {function} callback - Callback függvény
     */
    addListener(callback) {
        this._listeners.push(callback);
    },

    /**
     * Listener eltávolítása
     * @param {function} callback - Callback függvény
     */
    removeListener(callback) {
        this._listeners = this._listeners.filter(l => l !== callback);
    },

    /**
     * Listenerek értesítése
     */
    _notifyListeners() {
        this._listeners.forEach(callback => {
            try {
                callback(this.getState());
            } catch (e) {
                console.error('Listener hiba:', e);
            }
        });
    }
};

// Export for modules (ha ES6 module-ként használjuk)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameState;
}
