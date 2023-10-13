/// <reference path="./global.d.ts" />
// @ts-check
export function cookingStatus(remainingTime) {
   if (isNaN(remainingTime)) {
       return "You forgot to set the timer."
   }

   if (remainingTime === 0) {
       return "Lasagna is done."
   }
    return "Not done, please wait."
}

export function preparationTime(layers = [], timePerLayer = 2) {
    return layers.length * timePerLayer;
}

export function quantities(layers = []) {
    const counts = { noodles: 0, sauce: 0 };
    for(const layer of layers) {
       switch (layer) {
           case "noodles":
               counts.noodles += 50;
               break;
           case "sauce":
               counts.sauce += 0.2;
               break;
           default:
               break;
       }
    }
    return counts;
}

export function addSecretIngredient(friendsList = [], myList = []) {
    const item = friendsList.slice(-1)[0];
    myList.push(item);
}

export function scaleRecipe(ingredients = {}, portions = 2) {
    let scaledRecipe = {};
    for (const k in ingredients) {
        scaledRecipe[k] = ingredients[k] * portions / 2;
    }
    return scaledRecipe;
}