function parse() {
    const main = document.getElementsByTagName('main')[0];

    hash().split(',').map(s => {
        for (let i = s.length; i > 0; i--) {
            if (s.substr(0, i).toLowerCase() in NOTES) {
                const note = NOTES[s.substr(0, i).toLowerCase()];
                const quality = CHORDS[s.substr(i).toLowerCase()];

                let chord = transpose(quality, note);

                let low = Number(chord[0]);
                let high = Number(chord[chord.length - 1]);

                if (high - low < 12) {
                    low -= Math.floor(12 - (high - low) / 2);
                    high += Math.ceil(12 - (high - low) / 2);
                }

                chord = transpose(chord, OCTAVE * 5);

                return midi(
                    s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase(),
                    chord, 5, 'block', 0, low + OCTAVE * 5, high + OCTAVE * 5
                );
            }
        }
    }).filter(chord => chord).forEach(chord => main.appendChild(chord));

    const params = query();

    if ('progression' in params && params['progression']) {
        //document.getElementsByTagName('body')[0].appendChild()
    }
}