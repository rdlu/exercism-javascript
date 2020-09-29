export class Change {
    calculate(coins, target) {
        if (target === 0) return []
        if (target < 0) throw new Error('Negative amount for change')
        if (!coins.length) return null

        for (let i = 1; i <= Math.trunc(target / Math.min(...coins)); i++) {
            for (let candidate of this.combinations_with_repetition_2(coins, i)) {
                if (candidate.reduce((a, b) => a + b, 0) === target) return candidate.sort((a, b) => a - b)
            }
        }

        throw new Error('No change found')
    }

    // some JS libraries call it baseN, other people call it k-selection or k-multiset
    // using js-combinatorics, genratorics library, etc is taking much more time for some weird reason
    combinations_with_repetition(lst, n) {
        return n ? (
            lst.length ? this.combinations_with_repetition(lst, n - 1).map(function (t) {
                return [lst[0]].concat(t);
            }).concat(this.combinations_with_repetition(lst.slice(1), n)) : []
        ) : [[]];
    }

    // from https://rosettacode.org/wiki/Combinations_with_repetitions#ES6
    // faster than my version above
    combinations_with_repetition_2(xs, k) {
        const concatMap = (f, xs) => [].concat.apply([], xs.map(f));
        const head = xs => xs.length ? xs[0] : undefined;
        const isNull = xs => (xs instanceof Array) ? xs.length < 1 : undefined;
        const map = (f, xs) => xs.map(f);
        const pure = x => [x];
        const dropWhile = (p, xs) => {
            let i = 0;
            for (let lng = xs.length;
                 (i < lng) && p(xs[i]); i++) {}
            return xs.slice(i);
        };
        const comb = (n, ys) => {
            if (0 === n) return ys;
            if (isNull(ys)) return comb(n - 1, map(pure, xs));

            return comb(n - 1, concatMap(zs => {
                const h = head(zs);
                return map(x => [x].concat(zs), dropWhile(x => x !== h, xs));
            }, ys));
        };
        return comb(k, []);
    }
}