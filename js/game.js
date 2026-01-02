/**
 * Szédületes Futam - Fő játék logika
 */

// Audio fájlok mappelése oldalakhoz
const AudioFiles = {
    'start': {
        text: 'audio/start_text.mp3',
        choices: [
            'audio/start_choice_1.mp3',
            'audio/start_choice_2.mp3',
            'audio/start_choice_3.mp3'
        ]
    },
    'page_1': {
        text: 'audio/page_1_text.mp3',
        choices: [
            'audio/page_1_choice_1.mp3',
            'audio/page_1_choice_2.mp3',
            'audio/page_1_choice_3.mp3'
        ]
    },
    'page_1_1_1': {
        text: 'audio/page_1_1_1_text.mp3',
        choices: [
            'audio/page_1_1_1_choice_1.mp3',
            'audio/page_1_1_1_choice_2.mp3'
        ]
    },
    'page_1_1_2': {
        text: 'audio/page_1_1_2_text.mp3',
        choices: ['audio/page_1_1_2_choice_1.mp3']
    },
    'page_1_1_3': {
        text: 'audio/page_1_1_3_text.mp3',
        choices: ['audio/page_1_1_3_choice_1.mp3']
    },
    'page_1_2_1': {
        text: 'audio/page_1_2_1_text.mp3',
        choices: [
            'audio/page_1_2_1_choice_1.mp3',
            'audio/page_1_2_1_choice_2.mp3'
        ]
    },
    'page_1_2_2': {
        text: 'audio/page_1_2_2_text.mp3',
        choices: ['audio/page_1_2_2_choice_1.mp3']
    },
    'page_1_2_3': {
        text: 'audio/page_1_2_3_text.mp3',
        choices: ['audio/page_1_2_3_choice_1.mp3']
    },
    'page_1_3_1': {
        text: 'audio/page_1_3_1_text.mp3',
        choices: [
            'audio/page_1_3_1_choice_1.mp3',
            'audio/page_1_3_1_choice_2.mp3'
        ]
    },
    'page_1_3_2': {
        text: 'audio/page_1_3_2_text.mp3',
        choices: ['audio/page_1_3_2_choice_1.mp3']
    },
    'page_1_3_3': {
        text: 'audio/page_1_3_3_text.mp3',
        choices: ['audio/page_1_3_3_choice_1.mp3']
    },
    'page_2': {
        text: 'audio/page_2_text.mp3',
        choices: [
            'audio/page_2_choice_1.mp3',
            'audio/page_2_choice_2.mp3',
            'audio/page_2_choice_3.mp3'
        ]
    },
    'page_2_1_1': {
        text: 'audio/page_2_1_1_text.mp3',
        choices: [
            'audio/page_2_1_1_choice_1.mp3',
            'audio/page_2_1_1_choice_2.mp3'
        ]
    },
    'page_2_1_2': {
        text: 'audio/page_2_1_2_text.mp3',
        choices: ['audio/page_2_1_2_choice_1.mp3']
    },
    'page_2_1_3': {
        text: 'audio/page_2_1_3_text.mp3',
        choices: ['audio/page_2_1_3_choice_1.mp3']
    },
    'page_2_2_1': {
        text: 'audio/page_2_2_1_text.mp3',
        choices: [
            'audio/page_2_2_1_choice_1.mp3',
            'audio/page_2_2_1_choice_2.mp3'
        ]
    },
    'page_2_2_2': {
        text: 'audio/page_2_2_2_text.mp3',
        choices: ['audio/page_2_2_2_choice_1.mp3']
    },
    'page_2_2_3': {
        text: 'audio/page_2_2_3_text.mp3',
        choices: ['audio/page_2_2_3_choice_1.mp3']
    },
    'page_2_3_1': {
        text: 'audio/page_2_3_1_text.mp3',
        choices: [
            'audio/page_2_3_1_choice_1.mp3',
            'audio/page_2_3_1_choice_2.mp3'
        ]
    },
    'page_2_3_2': {
        text: 'audio/page_2_3_2_text.mp3',
        choices: ['audio/page_2_3_2_choice_1.mp3']
    },
    'page_2_3_3': {
        text: 'audio/page_2_3_3_text.mp3',
        choices: ['audio/page_2_3_3_choice_1.mp3']
    },
    // === PAGE 3 ===
    'page_3': {
        text: 'audio/page_3_text.mp3',
        choices: [
            'audio/page_3_choice_1.mp3',
            'audio/page_3_choice_2.mp3',
            'audio/page_3_choice_3.mp3'
        ]
    },
    'page_3_1_1': {
        text: 'audio/page_3_1_1_text.mp3',
        choices: [
            'audio/page_3_1_1_choice_1.mp3',
            'audio/page_3_1_1_choice_2.mp3'
        ]
    },
    'page_3_1_2': {
        text: 'audio/page_3_1_2_text.mp3',
        choices: ['audio/page_3_1_2_choice_1.mp3']
    },
    'page_3_1_3': {
        text: 'audio/page_3_1_3_text.mp3',
        choices: ['audio/page_3_1_3_choice_1.mp3']
    },
    'page_3_2_1': {
        text: 'audio/page_3_2_1_text.mp3',
        choices: [
            'audio/page_3_2_1_choice_1.mp3',
            'audio/page_3_2_1_choice_2.mp3'
        ]
    },
    'page_3_2_2': {
        text: 'audio/page_3_2_2_text.mp3',
        choices: ['audio/page_3_2_2_choice_1.mp3']
    },
    'page_3_2_3': {
        text: 'audio/page_3_2_3_text.mp3',
        choices: ['audio/page_3_2_3_choice_1.mp3']
    },
    'page_3_3_1': {
        text: 'audio/page_3_3_1_text.mp3',
        choices: [
            'audio/page_3_3_1_choice_1.mp3',
            'audio/page_3_3_1_choice_2.mp3'
        ]
    },
    'page_3_3_2': {
        text: 'audio/page_3_3_2_text.mp3',
        choices: ['audio/page_3_3_2_choice_1.mp3']
    },
    'page_3_3_3': {
        text: 'audio/page_3_3_3_text.mp3',
        choices: ['audio/page_3_3_3_choice_1.mp3']
    },
    // === PAGE 4 ===
    'page_4': {
        text: 'audio/page_4_text.mp3',
        choices: [
            'audio/page_4_choice_1.mp3',
            'audio/page_4_choice_2.mp3',
            'audio/page_4_choice_3.mp3'
        ]
    },
    'page_4_1_1': {
        text: 'audio/page_4_1_1_text.mp3',
        choices: [
            'audio/page_4_1_1_choice_1.mp3',
            'audio/page_4_1_1_choice_2.mp3'
        ]
    },
    'page_4_1_2': {
        text: 'audio/page_4_1_2_text.mp3',
        choices: ['audio/page_4_1_2_choice_1.mp3']
    },
    'page_4_1_3': {
        text: 'audio/page_4_1_3_text.mp3',
        choices: ['audio/page_4_1_3_choice_1.mp3']
    },
    'page_4_2_1': {
        text: 'audio/page_4_2_1_text.mp3',
        choices: [
            'audio/page_4_2_1_choice_1.mp3',
            'audio/page_4_2_1_choice_2.mp3'
        ]
    },
    'page_4_2_2': {
        text: 'audio/page_4_2_2_text.mp3',
        choices: ['audio/page_4_2_2_choice_1.mp3']
    },
    'page_4_2_3': {
        text: 'audio/page_4_2_3_text.mp3',
        choices: ['audio/page_4_2_3_choice_1.mp3']
    },
    'page_4_3_1': {
        text: 'audio/page_4_3_1_text.mp3',
        choices: [
            'audio/page_4_3_1_choice_1.mp3',
            'audio/page_4_3_1_choice_2.mp3'
        ]
    },
    'page_4_3_2': {
        text: 'audio/page_4_3_2_text.mp3',
        choices: ['audio/page_4_3_2_choice_1.mp3']
    },
    'page_4_3_3': {
        text: 'audio/page_4_3_3_text.mp3',
        choices: ['audio/page_4_3_3_choice_1.mp3']
    },
    // === PAGE 5 ===
    'page_5': {
        text: 'audio/page_5_text.mp3',
        choices: [
            'audio/page_5_choice_1.mp3',
            'audio/page_5_choice_2.mp3',
            'audio/page_5_choice_3.mp3'
        ]
    },
    'page_5_1_1': {
        text: 'audio/page_5_1_1_text.mp3',
        choices: [
            'audio/page_5_1_1_choice_1.mp3',
            'audio/page_5_1_1_choice_2.mp3'
        ]
    },
    'page_5_1_2': {
        text: 'audio/page_5_1_2_text.mp3',
        choices: ['audio/page_5_1_2_choice_1.mp3']
    },
    'page_5_1_3': {
        text: 'audio/page_5_1_3_text.mp3',
        choices: ['audio/page_5_1_3_choice_1.mp3']
    },
    'page_5_2_1': {
        text: 'audio/page_5_2_1_text.mp3',
        choices: [
            'audio/page_5_2_1_choice_1.mp3',
            'audio/page_5_2_1_choice_2.mp3'
        ]
    },
    'page_5_2_2': {
        text: 'audio/page_5_2_2_text.mp3',
        choices: ['audio/page_5_2_2_choice_1.mp3']
    },
    'page_5_2_3': {
        text: 'audio/page_5_2_3_text.mp3',
        choices: ['audio/page_5_2_3_choice_1.mp3']
    },
    'page_5_3_1': {
        text: 'audio/page_5_3_1_text.mp3',
        choices: [
            'audio/page_5_3_1_choice_1.mp3',
            'audio/page_5_3_1_choice_2.mp3'
        ]
    },
    'page_5_3_2': {
        text: 'audio/page_5_3_2_text.mp3',
        choices: ['audio/page_5_3_2_choice_1.mp3']
    },
    'page_5_3_3': {
        text: 'audio/page_5_3_3_text.mp3',
        choices: ['audio/page_5_3_3_choice_1.mp3']
    },
    // === PAGE 6 ===
    'page_6': {
        text: 'audio/page_6_text.mp3',
        choices: [
            'audio/page_6_choice_1.mp3',
            'audio/page_6_choice_2.mp3',
            'audio/page_6_choice_3.mp3'
        ]
    },
    'page_6_1_1': {
        text: 'audio/page_6_1_1_text.mp3',
        choices: [
            'audio/page_6_1_1_choice_1.mp3',
            'audio/page_6_1_1_choice_2.mp3'
        ]
    },
    'page_6_1_2': {
        text: 'audio/page_6_1_2_text.mp3',
        choices: ['audio/page_6_1_2_choice_1.mp3']
    },
    'page_6_1_3': {
        text: 'audio/page_6_1_3_text.mp3',
        choices: ['audio/page_6_1_3_choice_1.mp3']
    },
    'page_6_2_1': {
        text: 'audio/page_6_2_1_text.mp3',
        choices: [
            'audio/page_6_2_1_choice_1.mp3',
            'audio/page_6_2_1_choice_2.mp3'
        ]
    },
    'page_6_2_2': {
        text: 'audio/page_6_2_2_text.mp3',
        choices: ['audio/page_6_2_2_choice_1.mp3']
    },
    'page_6_2_3': {
        text: 'audio/page_6_2_3_text.mp3',
        choices: ['audio/page_6_2_3_choice_1.mp3']
    },
    'page_6_3_1': {
        text: 'audio/page_6_3_1_text.mp3',
        choices: [
            'audio/page_6_3_1_choice_1.mp3',
            'audio/page_6_3_1_choice_2.mp3'
        ]
    },
    'page_6_3_2': {
        text: 'audio/page_6_3_2_text.mp3',
        choices: ['audio/page_6_3_2_choice_1.mp3']
    },
    'page_6_3_3': {
        text: 'audio/page_6_3_3_text.mp3',
        choices: ['audio/page_6_3_3_choice_1.mp3']
    },
    // === PAGE 7 ===
    'page_7': {
        text: 'audio/page_7_text.mp3',
        choices: [
            'audio/page_7_choice_1.mp3',
            'audio/page_7_choice_2.mp3',
            'audio/page_7_choice_3.mp3'
        ]
    },
    'page_7_1_1': {
        text: 'audio/page_7_1_1_text.mp3',
        choices: [
            'audio/page_7_1_1_choice_1.mp3',
            'audio/page_7_1_1_choice_2.mp3'
        ]
    },
    'page_7_1_2': {
        text: 'audio/page_7_1_2_text.mp3',
        choices: []
    },
    'page_7_1_3': {
        text: 'audio/page_7_1_3_text.mp3',
        choices: []
    },
    'page_7_2_1': {
        text: 'audio/page_7_2_1_text.mp3',
        choices: [
            'audio/page_7_2_1_choice_1.mp3',
            'audio/page_7_2_1_choice_2.mp3'
        ]
    },
    'page_7_2_2': {
        text: 'audio/page_7_2_2_text.mp3',
        choices: []
    },
    'page_7_2_3': {
        text: 'audio/page_7_2_3_text.mp3',
        choices: []
    },
    'page_7_3_1': {
        text: 'audio/page_7_3_1_text.mp3',
        choices: ['audio/page_7_3_1_choice_1.mp3']
    },
    'page_7_3_2': {
        text: 'audio/page_7_3_2_text.mp3',
        choices: ['audio/page_7_3_2_choice_1.mp3']
    },
    'page_7_3_3': {
        text: 'audio/page_7_3_3_text.mp3',
        choices: []
    }
};

// Aktuális audio lejátszó
let currentAudio = null;
let currentPlayingButton = null;

/**
 * Audio lejátszása/megállítása
 */
function playAudio(audioPath, buttonElement) {
    // Ha ugyanaz a gomb, megállítjuk
    if (currentAudio && currentPlayingButton === buttonElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
        buttonElement.classList.remove('playing');
        buttonElement.innerHTML = '▶';
        currentPlayingButton = null;
        return;
    }

    // Ha másik audio megy, megállítjuk
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentPlayingButton) {
            currentPlayingButton.classList.remove('playing');
            currentPlayingButton.innerHTML = '▶';
        }
    }

    // Új audio lejátszása
    currentAudio = new Audio(audioPath);
    currentPlayingButton = buttonElement;
    buttonElement.classList.add('playing');
    buttonElement.innerHTML = '⏹';

    currentAudio.play().catch(err => {
        console.error('Audio lejátszási hiba:', err);
        buttonElement.classList.remove('playing');
        buttonElement.innerHTML = '▶';
    });

    currentAudio.onended = () => {
        buttonElement.classList.remove('playing');
        buttonElement.innerHTML = '▶';
        currentAudio = null;
        currentPlayingButton = null;
    };
}

// Auto-play állapot
let isAutoPlaying = false;
let autoPlayAbortController = null;

/**
 * Oldal audio automatikus lejátszása sorban
 */
async function autoPlayPageAudio(pageId) {
    const audioData = AudioFiles[pageId];
    if (!audioData) return;

    // Ha már fut auto-play, leállítjuk
    if (isAutoPlaying && autoPlayAbortController) {
        autoPlayAbortController.abort();
    }

    isAutoPlaying = true;
    autoPlayAbortController = new AbortController();
    const signal = autoPlayAbortController.signal;

    try {
        // 1. Történet szöveg lejátszása
        if (audioData.text) {
            await playAudioWithFeedback(audioData.text, elements.storyPanel, signal);
        }

        // 2. Választható opciók összegyűjtése
        const selectableChoices = [];
        for (let i = 0; i < elements.choices.length; i++) {
            const choiceElement = elements.choices[i];
            if (choiceElement &&
                choiceElement.style.display !== 'none' &&
                !choiceElement.classList.contains('disabled')) {
                selectableChoices.push({
                    index: i,
                    element: choiceElement,
                    audio: audioData.choices && audioData.choices[i]
                });
            }
        }

        // 3. Ha csak 1 választható opció van, automatikusan kiválasztjuk
        if (selectableChoices.length === 1) {
            const singleChoice = selectableChoices[0];
            // Lejátsszuk az audiót
            if (singleChoice.audio && !signal.aborted) {
                await playAudioWithFeedback(singleChoice.audio, singleChoice.element, signal);
            }
            // Automatikus kiválasztás
            if (!signal.aborted) {
                setTimeout(() => {
                    singleChoice.element.click();
                }, 500);
            }
            return;
        }

        // 4. Több választható opció: csak ezeket játsszuk le
        for (const choice of selectableChoices) {
            if (signal.aborted) break;
            if (choice.audio) {
                await playAudioWithFeedback(choice.audio, choice.element, signal);
            }
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error('Auto-play hiba:', err);
        }
    } finally {
        isAutoPlaying = false;
    }
}

/**
 * Audio lejátszása vizuális visszajelzéssel
 */
function playAudioWithFeedback(audioPath, element, signal) {
    return new Promise((resolve, reject) => {
        // Előző audio leállítása
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            if (currentPlayingButton) {
                currentPlayingButton.classList.remove('playing');
                currentPlayingButton.innerHTML = '▶';
            }
        }

        // Korábbi vizuális visszajelzés eltávolítása
        document.querySelectorAll('.audio-playing').forEach(el => {
            el.classList.remove('audio-playing');
        });

        const audio = new Audio(audioPath);
        currentAudio = audio;

        // Vizuális visszajelzés bekapcsolása
        element.classList.add('audio-playing');

        // Abort signal kezelése
        if (signal) {
            signal.addEventListener('abort', () => {
                audio.pause();
                element.classList.remove('audio-playing');
                reject(new DOMException('Aborted', 'AbortError'));
            });
        }

        audio.onended = () => {
            element.classList.remove('audio-playing');
            currentAudio = null;
            resolve();
        };

        audio.onerror = (err) => {
            element.classList.remove('audio-playing');
            currentAudio = null;
            console.error('Audio betöltési hiba:', audioPath, err);
            resolve(); // Folytatás a következő audioval
        };

        audio.play().catch(err => {
            element.classList.remove('audio-playing');
            currentAudio = null;
            console.error('Audio lejátszási hiba:', err);
            resolve(); // Folytatás a következő audioval
        });
    });
}

/**
 * Auto-play leállítása (pl. navigáláskor)
 */
function stopAutoPlay() {
    if (autoPlayAbortController) {
        autoPlayAbortController.abort();
        autoPlayAbortController = null;
    }
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    document.querySelectorAll('.audio-playing').forEach(el => {
        el.classList.remove('audio-playing');
    });
    isAutoPlaying = false;
}

// UI elemek
const elements = {
    storyPanel: document.querySelector('.story-panel'),
    storyContent: document.getElementById('story-content'),
    pageNumber: document.getElementById('page-number'),
    characterInfo: document.getElementById('character-info'),
    choices: [
        document.getElementById('choice-1'),
        document.getElementById('choice-2'),
        document.getElementById('choice-3')
    ],
    wheels: {
        green: document.getElementById('wheel-green-value'),
        yellow: document.getElementById('wheel-yellow-value'),
        blue: document.getElementById('wheel-blue-value'),
        red: document.getElementById('wheel-red-value')
    },
    startModal: document.getElementById('start-modal'),
    endModal: document.getElementById('end-modal'),
    restartModal: document.getElementById('restart-modal')
};

// Játék vége időzítő
let endGameTimeout = null;

/**
 * Játék inicializálása
 */
function initGame() {
    // Ellenőrizzük, van-e mentett játék
    const hasSave = localStorage.getItem('szeduletesFutam_state');

    if (hasSave) {
        elements.startModal.style.display = 'flex';
    } else {
        newGame();
    }

    // Listener hozzáadása az állapot változáshoz
    GameState.addListener(updateUI);
}

/**
 * Új játék indítása
 */
function newGame() {
    elements.startModal.style.display = 'none';
    GameState.init();
    showCharacterSelection();
}

/**
 * Mentett játék folytatása
 */
function continueGame() {
    elements.startModal.style.display = 'none';
    if (GameState.loadFromLocalStorage()) {
        updateUI(GameState.getState());
    } else {
        newGame();
    }
}

/**
 * Játék újrakezdése (végső modalból)
 */
function restartGame() {
    elements.endModal.style.display = 'none';
    if (endGameTimeout) {
        clearTimeout(endGameTimeout);
        endGameTimeout = null;
    }
    newGame();
}

/**
 * Végső modal megjelenítése
 */
function showEndModal() {
    elements.endModal.style.display = 'flex';
}

/**
 * Újrakezdés modal megjelenítése
 */
function showRestartModal() {
    elements.restartModal.style.display = 'flex';
}

/**
 * Újrakezdés megerősítése
 */
function confirmRestart() {
    elements.restartModal.style.display = 'none';
    restartGame();
}

/**
 * Újrakezdés megszakítása
 */
function cancelRestart() {
    elements.restartModal.style.display = 'none';
}

/**
 * Ellenfelek számolása a tárcsákon
 * Az ellenfelek: countess (zöld), bajgunar (sárga), zord (kék)
 */
function countEnemiesOnWheels() {
    let count = 0;

    const greenState = GameState.getWheelState('green');
    if (greenState && greenState.fieldId === 'countess') count++;

    const yellowState = GameState.getWheelState('yellow');
    if (yellowState && yellowState.fieldId === 'bajgunar') count++;

    const blueState = GameState.getWheelState('blue');
    if (blueState && blueState.fieldId === 'zord') count++;

    return count;
}

/**
 * Oldal megjelenítése
 */
function showPage(pageId) {
    // Előző auto-play leállítása
    stopAutoPlay();

    // Előző végső timer törlése
    if (endGameTimeout) {
        clearTimeout(endGameTimeout);
        endGameTimeout = null;
    }

    const page = getPage(pageId);
    if (!page) {
        console.error('Oldal nem található:', pageId);
        return;
    }

    // Háttérkép beállítása a panelhez
    if (page.image) {
        // Próbáljuk meg a különböző formátumokat (png, jpg, svg)
        const img = new Image();
        img.onload = function() {
            elements.storyPanel.style.backgroundImage = `url('${page.image}.png')`;
        };
        img.onerror = function() {
            // Ha png nem található, próbáljuk jpg-vel
            const imgJpg = new Image();
            imgJpg.onload = function() {
                elements.storyPanel.style.backgroundImage = `url('${page.image}.jpg')`;
            };
            imgJpg.onerror = function() {
                // Ha jpg sem található, próbáljuk svg-vel
                elements.storyPanel.style.backgroundImage = `url('${page.image}.svg')`;
            };
            imgJpg.src = `${page.image}.jpg`;
        };
        img.src = `${page.image}.png`;
    } else {
        elements.storyPanel.style.backgroundImage = 'none';
    }

    // Történet szöveg (kép nélkül, mert az már háttér)
    const audioData = AudioFiles[page.id];
    const hasTextAudio = audioData && audioData.text;

    elements.storyContent.innerHTML = `
        <div class="story-header">
            <h2>${page.title}</h2>
            ${hasTextAudio ? `<button class="audio-btn" id="story-audio-btn" title="Felolvasás">▶</button>` : ''}
        </div>
        <p>${page.text.replace(/\n/g, '</p><p>')}</p>
    `;

    // Audio gomb eseménykezelő
    if (hasTextAudio) {
        const audioBtn = document.getElementById('story-audio-btn');
        audioBtn.onclick = (e) => {
            e.stopPropagation();
            playAudio(audioData.text, audioBtn);
        };
    }

    // Oldal szám
    elements.pageNumber.textContent = page.id === 'start' ? 'Kezdés' : page.id.replace('page_', '') + '. oldal';

    // Választások beállítása
    let choiceConfigs;

    // ===== PAGE_7 SPECIÁLIS VÁLASZTÁSOK =====
    // Az ellenfelek száma alapján csak 1 választás legyen aktív
    if (pageId === 'page_7') {
        const enemyCount = countEnemiesOnWheels();
        console.log('Ellenfelek száma a tárcsákon:', enemyCount);

        choiceConfigs = page.choices.map((choice, index) => {
            const choiceAudio = audioData && audioData.choices && audioData.choices[index];

            // Melyik választás legyen aktív az ellenfelek száma alapján
            let canSelect = false;
            let disabledReason = null;

            if (index === 0) {
                // "Egyik sem?" - csak ha 0 ellenfél van
                canSelect = (enemyCount === 0);
                if (!canSelect) disabledReason = `${enemyCount} ellenfél előzött meg!`;
            } else if (index === 1) {
                // "Egy vagy kettő?" - csak ha 1-2 ellenfél van
                canSelect = (enemyCount >= 1 && enemyCount <= 2);
                if (!canSelect) disabledReason = enemyCount === 0 ? 'Senki nem előzött meg!' : '3 ellenfél előzött meg!';
            } else if (index === 2) {
                // "Három?" - csak ha 3 ellenfél van
                canSelect = (enemyCount === 3);
                if (!canSelect) disabledReason = `Csak ${enemyCount} ellenfél előzött meg!`;
            }

            return {
                title: choice.text,
                description: choice.description || '',
                disabled: !canSelect,
                disabledReason: disabledReason,
                audioFile: choiceAudio,
                action: () => {
                    if (canSelect) {
                        if (currentAudio) {
                            currentAudio.pause();
                            currentAudio = null;
                        }
                        const nextPageId = executeChoice(choice);
                        if (nextPageId) {
                            showPage(nextPageId);
                        }
                    }
                }
            };
        });
    } else {
        // Normál választások más oldalakon
        choiceConfigs = page.choices.map((choice, index) => {
            const canSelect = canChoose(choice);
            const choiceAudio = audioData && audioData.choices && audioData.choices[index];
            return {
                title: choice.text,
                description: choice.description || '',
                disabled: !canSelect,
                disabledReason: !canSelect ? 'Nincs meg a szükséges tárgy!' : null,
                audioFile: choiceAudio,
                action: () => {
                    if (canSelect) {
                        // Audio leállítása navigáláskor
                        if (currentAudio) {
                            currentAudio.pause();
                            currentAudio = null;
                        }
                        const nextPageId = executeChoice(choice);
                        if (nextPageId) {
                            showPage(nextPageId);
                        }
                    }
                }
            };
        });
    }

    setChoices(choiceConfigs);

    // Auto-play indítása kis késleltetéssel (hogy az UI renderelődjön)
    // A page_7-nél az autoPlayPageAudio automatikusan kiválasztja az egyetlen aktív opciót
    setTimeout(() => {
        autoPlayPageAudio(pageId);
    }, 300);

    // Ha nincs választás (végső oldal), 20 mp után modal megjelenítése
    if (page.choices.length === 0) {
        endGameTimeout = setTimeout(() => {
            showEndModal();
        }, 20000);
    }
}

/**
 * Karakter választó megjelenítése (start oldal)
 */
function showCharacterSelection() {
    showPage('start');
}

/**
 * Választások beállítása
 * @param {Array} choices - Választások tömbje
 */
function setChoices(choices) {
    // Először elrejtjük az összes választást
    elements.choices.forEach(el => {
        el.style.display = 'none';
        el.classList.remove('disabled', 'selected');
        el.onclick = null;
    });

    // Csak a szükséges választásokat jelenítjük meg
    choices.forEach((choice, index) => {
        if (index >= elements.choices.length) return;

        const el = elements.choices[index];
        const contentEl = el.querySelector('.choice-content');
        const numberEl = el.querySelector('.choice-number');

        el.style.display = 'flex';

        let descHtml = choice.description;
        if (choice.disabled && choice.disabledReason) {
            descHtml = `<span style="color: #F44336;">${choice.disabledReason}</span>`;
        }

        // Audio gomb ha van audio fájl
        const audioBtn = choice.audioFile
            ? `<button class="audio-btn choice-audio-btn" data-audio="${choice.audioFile}" title="Felolvasás">▶</button>`
            : '';

        contentEl.innerHTML = `
            <div class="choice-audio-wrapper">
                <div class="choice-content-inner">
                    <h3>${choice.title}</h3>
                    <p>${descHtml}</p>
                </div>
                ${audioBtn}
            </div>
        `;

        // Audio gomb eseménykezelő
        const audioBtnEl = contentEl.querySelector('.choice-audio-btn');
        if (audioBtnEl) {
            audioBtnEl.onclick = (e) => {
                e.stopPropagation();
                playAudio(choice.audioFile, audioBtnEl);
            };
        }

        // Disabled állapot kezelése
        if (choice.disabled) {
            el.classList.add('disabled');
            el.onclick = null;
        } else {
            el.classList.remove('disabled');
            el.onclick = (e) => {
                // Ne reagáljon ha az audio gombra kattintottunk
                if (e.target.classList.contains('audio-btn')) return;

                // Vizuális visszajelzés
                elements.choices.forEach(c => c.classList.remove('selected'));
                el.classList.add('selected');

                // Akció végrehajtása kis késleltetéssel
                setTimeout(() => {
                    el.classList.remove('selected');
                    choice.action();
                }, 300);
            };
        }
    });
}

/**
 * Választás kezelése (globális)
 */
function selectChoice(num) {
    // Ez a függvény már nem használt, az onclick a setChoices-ban van beállítva
}

/**
 * UI frissítése az állapot alapján
 */
function updateUI(state) {
    // Karakter info frissítése
    if (state.character) {
        const character = GameState.getCharacter();
        elements.characterInfo.innerHTML = `
            <span class="name">${character.name}</span> - ${character.vehicle}
        `;
    }

    // Tárcsák frissítése
    updateWheels(state);
}

/**
 * Tárcsák frissítése
 */
function updateWheels(state) {
    // Mind a 4 tárcsa (zöld, sárga, kék, piros)
    ['green', 'yellow', 'blue', 'red'].forEach(color => {
        const wheelState = GameState.getWheelState(color);
        if (wheelState && wheelState.fieldIcon) {
            // SVG kép megjelenítése
            elements.wheels[color].innerHTML = `<img src="${wheelState.fieldIcon}" alt="${wheelState.fieldName || ''}" class="wheel-icon">`;
            elements.wheels[color].title = wheelState.fieldName || '';
        }
    });
}

/* Tárcsák csak megjelenítésre - nem kattinthatók */

// Story panel kattintásra auto-play leállítása
document.querySelector('.story-panel').addEventListener('click', (e) => {
    // Ne állítsuk le ha audio gombra kattintottak
    if (!e.target.classList.contains('audio-btn')) {
        stopAutoPlay();
    }
});

// Játék indítása
document.addEventListener('DOMContentLoaded', initGame);
