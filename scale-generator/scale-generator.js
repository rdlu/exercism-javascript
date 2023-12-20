export class Scale {
  static sharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  static flats = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
  static sharpKeys = new Set(['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'a', 'e', 'b', 'f#', 'c#', 'g#', 'd#'])

  constructor(tonic) {
    this.notes = Scale.sharpKeys.has(tonic) ? Scale.sharps : Scale.flats
    this.root = this.notes.indexOf(tonic[0].toUpperCase() + tonic.slice(1))

    if (this.root === -1) throw new Error(`"${tonic}" is not a tonic.`)
  }

  chromatic() {
    return this.interval('mmmmmmmmmmm')
  }

  interval(intervals) {
    let index = this.root
    const result = [this.notes[index]]
    for (const interval of intervals) {
      index = (index + { m: 1, M: 2, A: 3 }[interval]) % 12
      result.push(this.notes[index])
    }
    return result
  }
}
