const OCTAVE = 12

const WHITE_NOTES = {
  0: 'c',
  2: 'd',
  4: 'e',
  5: 'f',
  7: 'g',
  9: 'a',
  11: 'b'
}

const NOTES = {
  'cbb': 10,
  'cb': 11,
  'c': 0,
  'c#': 1,
  'cx': 2,

  'dbb': 0,
  'db': 1,
  'd': 2,
  'd#': 3,
  'dx': 4,

  'ebb': 2,
  'eb': 3,
  'e': 4,
  'e#': 5,
  'ex': 6,

  'fbb': 3,
  'fb': 4,
  'f': 5,
  'f#': 6,
  'fx': 7,

  'gbb': 5,
  'gb': 6,
  'g': 7,
  'g#': 8,
  'gx': 9,

  'abb': 7,
  'ab': 8,
  'a': 9,
  'a#': 10,
  'ax': 11,

  'bbb': 9,
  'bb': 10,
  'b': 11,
  'b#': 0,
  'bx': 1
}
const CHORDS = {
  'dim': [ 0, 3, 6 ],
  'min': [ 0, 3, 7 ],
  'maj': [ 0, 4, 7 ],
  'aug': [ 0, 4, 8 ],
  'sus2': [ 0, 2, 7 ],
  'sus4': [ 0, 5, 7 ],

  'dim7': [ 0, 3, 6, 9 ],
  'min7b5': [ 0, 3, 6, 10 ],
  'min7': [ 0, 3, 7, 10 ],
  '7': [ 0, 4, 7, 10 ],
  'maj7': [ 0, 4, 7, 11 ],
  'minmaj7': [ 0, 3, 7, 11 ],
  'aug7': [ 0, 4, 8, 11 ]
}

function transpose (notes, semitones) {
  return notes.map(note => note + semitones)
}

function isBlack (note) {
  const normalized = note % OCTAVE
  return normalized <= 4 ? normalized % 2 === 1 : normalized % 2 === 0
}

function isWhite (note) {
  const normalized = note % OCTAVE
  return normalized <= 4 ? normalized % 2 === 0 : normalized % 2 === 1
}

function whiteCount (lowest, highest) {
  let count = 0

  for (let i = lowest; i <= highest; i++) {
    if (isWhite(i)) {
      count++
    }
  }

  return count
}

function piano (notes, tonic, lowest, highest) {
  if (isBlack(lowest)) lowest--
  if (isBlack(highest)) highest++
  const count = whiteCount(lowest, highest)

  const piano = document.createElement('div')
  piano.setAttribute('class', `piano-div ${WHITE_NOTES[lowest % 12]}-piano-div`)

  const whites = document.createElement('div')
  whites.setAttribute('class', 'white-keys-div')

  const blacks = document.createElement('div')
  blacks.setAttribute('class', 'black-keys-div')

  let wi = lowest

  let bi = lowest + 1
  while (isWhite(bi)) bi++

  for (let i = 0; i < count; i++) {
    const white = document.createElement('div')
    white.setAttribute('class', `white-key-div${notes.indexOf(wi) === tonic ? ' tonic-key-div' : (notes.indexOf(wi) === -1 ? '' : ' on-key-div')}`)
    white.style.setProperty('z-index', String(count - i))
    whites.appendChild(white)

    wi++

    const black = document.createElement('div')
    black.setAttribute('class', `black-key-div${isWhite(wi) ? '' : (notes.indexOf(wi) === tonic ? ' tonic-key-div' : (notes.indexOf(wi) === -1 ? '' : ' on-key-div'))}`)
    blacks.appendChild(black)

    while (isBlack(wi)) wi++
  }

  piano.appendChild(whites)
  piano.appendChild(blacks)

  return piano
}
