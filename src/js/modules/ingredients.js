function showIngredients(ingredients) {
  let str = "";

  ingredients.forEach((item) => (str += item + ", "));
  str = str[0].toUpperCase() + str.slice(1, str.length - 2);

  return str;
}

export default showIngredients;
