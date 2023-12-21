export const cost = (books) => {
  const bookPrice = 800;
  const discounts = [1, 0, 0.05, 0.1, 0.2, 0.25];
  const bookSetPrice = discounts.map((x) => bookPrice * (1-x));
  const removeItem = (arr, item) => arr.splice(arr.indexOf(item), 1);
  const subtractFromCollection = (dstArr, srcSet) => srcSet.forEach(item => removeItem(dstArr, item));

  let booksSets = [];

  while (books.length > 0) {
    let set = new Set(books);
    booksSets.push(set.size);
    subtractFromCollection(books, set);
  } 

  // sets of 4+4 are better deal than sets of 3+5
  while (booksSets.includes(3) && booksSets.includes(5)) {
    booksSets.splice(booksSets.indexOf(3), 1);
    booksSets.splice(booksSets.indexOf(5), 1);
    booksSets.push(4, 4);
  }

  return booksSets.reduce((basketTotal, setQty) => basketTotal + setQty * bookSetPrice[setQty], 0);
};
