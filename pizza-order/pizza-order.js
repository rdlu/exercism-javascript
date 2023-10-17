/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {...Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const extrasPrice = extraPrice(extras.pop(), ...extras);
  const pizzaPrices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
  };

  // for the right price you can :)
  return (pizzaPrices[pizza] || 1000000) + extrasPrice;
}

/**
 * @param {Extra} extra
 * @param {...Extra[]} rest
 */
function extraPrice(extra, ...rest) {
  const optionPrices = {
    ExtraSauce: 1,
    ExtraToppings: 2,
  };

  const price = optionPrices[extra] || 0;

  if(rest.length === 0) return price;
  return extraPrice(rest.pop(), ...rest) + price;
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((acc, order) => acc + pizzaPrice(order.pizza, ...order.extras), 0)
}
