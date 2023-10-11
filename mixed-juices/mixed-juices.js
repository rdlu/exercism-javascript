// @ts-check
/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3.0;
    case "All or Nothing":
      return 5.0;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = (lime) => {
    switch (lime) {
      case "small":
        return 6;
      case "medium":
        return 8;
      case "large":
        return 10;
      default:
        return 0;
    }
  };

  let wedgesTotal = 0;
  let i = 0;
  while (i < limes.length && wedgesTotal < wedgesNeeded) {
    const lime = limes[i];
    wedgesTotal += wedges(lime);
    i += 1;
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    const order = orders.shift() || '';
    timeLeft -= timeToMixJuice(order);
  }
  return orders;
}
