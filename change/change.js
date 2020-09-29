export class Change {
    calculate(coins, target) {
        if (target < 0) throw new Error('Negative amount for change');

        if (coins.includes(target)) return [target];

        const minNumberOfCoinsFor = new Array(target + 1);
        const firstCoinFor = new Array(target + 1);

        minNumberOfCoinsFor[0] = 0;

        coins.forEach((faceValue) => {
            for (let i = faceValue; i <= target; i += 1) {
                const priorIndex = i - faceValue;
                const subProblemCoinCount = minNumberOfCoinsFor[priorIndex];

                if (subProblemCoinCount === undefined) continue;

                if (subProblemCoinCount + 1 < minNumberOfCoinsFor[i] || minNumberOfCoinsFor[i] === undefined) {
                    minNumberOfCoinsFor[i] = subProblemCoinCount + 1;
                    firstCoinFor[i] = faceValue;
                }
            }
        });

        if (minNumberOfCoinsFor[target] === undefined) {
            throw new Error("No change found");
        }

        let total = target;
        const change = [];

        while (total > 0) {
            const coin = firstCoinFor[total];
            change.push(coin);
            total -= coin;
        }

        return change.sort((a, b) => a - b);
    }
}