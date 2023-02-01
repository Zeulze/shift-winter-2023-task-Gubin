function showIngredients(ingredients) {
  let str = "";

  ingredients.forEach((item) => (str += item + ", "));

  return str[0].toUpperCase() + str.slice(1, str.length - 2);
}

export default showIngredients;
