export const cost = (books) => {
  const bookPrice = 800;
  const discounts = [1, 0, 0.05, 0.1, 0.2, 0.25];
  const bookSetPrice = discounts.map((x) => bookPrice * (1-x));

  let booksSets = [];

  while (books.length > 0) {
    let set = new Set(books);
    booksSets.push(set.size);
    for (let i of set) {
      books.splice(books.indexOf(i), 1);
    }
  } 

  // sets of 4+4 are better deal than sets of 3+5
  while (booksSets.includes(3) && booksSets.includes(5)) {
    booksSets.splice(booksSets.indexOf(3), 1);
    booksSets.splice(booksSets.indexOf(5), 1);
    booksSets.push(4, 4);
  }

  return booksSets.reduce((basketTotal, setQty) => basketTotal + setQty * bookSetPrice[setQty], 0);
};
