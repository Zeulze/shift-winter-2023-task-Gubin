async function getPizzas(url) {
  return await fetch(url).then((resp) => resp.json());
}

export default getPizzas;
