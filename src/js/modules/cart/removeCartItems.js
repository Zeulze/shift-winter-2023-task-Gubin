function removeItems(cart) {
  const deletedItem = cart.querySelectorAll(".cart__item");
  for (let i = 0; i < deletedItem.length; i++) {
    cart.removeChild(deletedItem[i]);
  }
}

export default removeItems;
