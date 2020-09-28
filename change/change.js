export class Change {
    calculate(coins, target) {
        if (target === 0) return []
        if (target < 0) throw new Error('Negative amount for change')
        if (!coins.length) return null

        for (let i = 1; i <= Math.trunc(target / Math.min(...coins)); i++) {
            for (let candidate of this.combinations_with_repetition(coins, i)) {
                if (candidate.reduce((a, b) => a + b, 0) === target) return candidate
            }
        }

        throw new Error('No change found')
    }

    combinations_with_repetition(lst, n) {
        return n ? (
            lst.length ? this.combinations_with_repetition(lst, n - 1).map(function (t) {
                return [lst[0]].concat(t);
            }).concat(this.combinations_with_repetition(lst.slice(1), n)) : []
        ) : [[]];
    }
}