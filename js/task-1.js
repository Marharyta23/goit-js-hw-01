function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const makeTransaction = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return makeTransaction;
}
