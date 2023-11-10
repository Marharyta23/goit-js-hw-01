function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const getShippingMessage = `Shipping to ${country} will cost ${totalPrice} credits`;
  return getShippingMessage;
}
