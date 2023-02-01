function createOrder(detailsObj) {
  const order = {
    pizzas: [],
    details: detailsObj,
  };

  for (let i = 1; i <= localStorage.getItem("NumberOfItems"); i++) {
    if (localStorage.getItem(`${i}`)) {
      let item = JSON.parse(localStorage.getItem(`${i}`));
      order.pizzas.push(item);
    }
  }
  return order;
}

export default createOrder;
