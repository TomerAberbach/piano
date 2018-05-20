const A0 = 21;
const C8 = 108;
const ALL_NOTES = [];
for (let i = A0; i <= C8; i++) {
    ALL_NOTES.push(i);
}
let loop = function() { };
const toPlay = [];


onload = function() {
    MIDI.loadPlugin({
        soundfontUrl: 'sf/',
        instrument: 'acoustic_grand_piano'
    });
};

function instrument(name) {
    stop();

    MIDI.loadResource({ instrument : name });
    MIDI.programChange(0, MIDI.GM.byName[name].number);
}

function play(notes, duration, style, delay) {
    if (style === 'block') {
        toPlay.push(MIDI.chordOn(0, notes, 127, delay));
    } else {
        let individual;

        if (style === 'rolled') {
            individual = 1.0 / (5.0 * notes.length);
        } else if (style === 'arpeggiated') {
            individual = duration / notes.length;
        } else {
            console.log(`Invalid play style: ${style}`);
            return;
        }

        notes.forEach((note, i) => MIDI.noteOn(0, note, 127, i * individual));
    }

    MIDI.chordOff(0, notes, delay + duration);
}

// noinspection JSUnusedGlobalSymbols
function multiplay(chords, duration, style) {
    chords.forEach((chord, i) => play(chord, duration / chords.length, style, i * duration / chords.length));
}

function stop() {
    clearInterval(loop);

    while (toPlay.length > 0) {
        clearTimeout(window.toPlay.pop());
    }

    MIDI.chordOff(0, ALL_NOTES, 0);
}

function midi(name, notes, duration, style, tonic, lowest, highest) {
    const midi = document.createElement('div');
    midi.setAttribute('class', 'midi-div');

    const header = document.createElement('header');
    header.setAttribute('class', 'midi-header');

    const p = document.createElement('p');
    p.setAttribute('class', 'midi-p');
    p.appendChild(document.createTextNode(name));

    const img = document.createElement('img');
    img.setAttribute('class', 'midi-img');
    img.setAttribute('src', 'img/play.svg');
    img.setAttribute('alt', 'Play');
    img.setAttribute('onclick', `play([${notes.toString()}], ${duration}, '${style}', 0);`);

    header.appendChild(p);
    header.appendChild(img);

    midi.appendChild(header);
    midi.appendChild(piano(notes, tonic, lowest, highest));

    return midi;
}