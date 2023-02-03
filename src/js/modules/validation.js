function toValidate() {
  const firstname = document.querySelector("[name = 'firstname']"),
    lastname = document.querySelector("[name = 'lastname']"),
    registrationAddress = document.querySelector(
      "[name = 'registrationAddress']"
    ),
    date = document.querySelector("[name = 'birthDate']"),
    city = document.querySelector("[name = 'city']"),
    street = document.querySelector("[name = 'street']"),
    house = document.querySelector("[name = 'house']"),
    apartment = document.querySelector("[name = 'apartment']");

  const maxDate = "1900-01-01";
  const dateMin = 1000 * 60 * 60 * 24 * 365 * 18;
  const arrayFields = [
    [firstname, 2, 30],
    [lastname, 2, 30],
    [city, 2, 30],
    [street, 2, 30],
    [house, 2, 30],
    [apartment, 2, 30],
    [registrationAddress, 10, 50],
  ];
  const borderStyles = {
    success: "1px solid black",
    error: "1px solid red",
  };

  initFields();
  let flag = true;
  return validating();

  function validating() {
    arrayFields.forEach((field) => textValues(field[0], field[1], field[2]));
    dateValidate(date);
    return flag;
  }

  function textValues(field, min, max) {
    const wrongField = field.parentNode.querySelector(".form__item-wrong");
    if (!(field.value.length <= max && field.value.length >= min)) {
      wrongField.textContent = `Должно содержать min: ${min}, max: ${max}`;
      field.style.border = borderStyles.error;
      return (flag = false);
    }
    return 1;
  }

  function dateValidate(field) {
    const wrongField = field.parentNode.querySelector(".form__item-wrong");
    const currentDate = Date.now();
    const dateMax = Math.abs(Date.parse(maxDate));
    const inputDate = Date.parse(field.value);

    if (!(Math.abs(inputDate) <= dateMax)) {
      wrongField.textContent = `Недопустимая дата рождения`;
      field.style.border = borderStyles.error;
      return (flag = false);
    }
    if (inputDate > 0) {
      if (!(currentDate - inputDate >= dateMin)) {
        wrongField.textContent = `Должно быть больше 18 лет`;
        field.style.border = borderStyles.error;
        return (flag = false);
      }
    }

    return 1;
  }

  function initFields() {
    const wrongTextFields = document.querySelectorAll(".form__item-wrong");
    const inputs = document.querySelectorAll(".modal__input");
    wrongTextFields.forEach((field) => (field.textContent = ""));
    inputs.forEach((input) => (input.style.border = borderStyles.success));
  }
}

export default toValidate;
