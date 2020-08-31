export class Matrix {
  constructor(str) {
    this.rows = this._to_rows(str)
    this.columns = this._transpose(this.rows)
  }

  _to_rows(str) {
    return str.split('\n')
      .map(row => row.split(' ')
        .map(el => Number(el))
      )
  }

  _transpose(arr) {
    // iterate over number of cols (arr[0]->position), assuming the matrix is NxN
    // to return cols
    return arr[0].map((_value, index) => arr.map(row => row[index]))
  }
}
