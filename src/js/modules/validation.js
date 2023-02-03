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
  const initDate = "1970-01-01";
  const dateMin = 1000 * 60 * 60 * 24 * 365 * 18;

  initFields();
  let flag = true;
  return validating();

  function validating() {
    textValues(firstname, 2, 30);
    textValues(lastname, 2, 30);
    textValues(registrationAddress, 10, 50);
    textValues(city, 2, 30);
    textValues(street, 2, 30);
    textValues(house, 2, 30);
    textValues(apartment, 2, 30);
    return flag;
  }

  function textValues(field, min, max) {
    const wrongField = field.parentNode.querySelector(".form__item-wrong");
    if (!(field.value.length <= max && field.value.length >= min)) {
      wrongField.textContent = `Должно содержать min: ${min}, max: ${max}`;
      return (flag = false);
    }
    return 1;
  }

  function initFields() {
    const fields = document.querySelectorAll(".form__item-wrong");
    fields.forEach((field) => (field.textContent = ""));
  }
}

export default toValidate;

// const obj = {
//   firstname: {
//     min: 2,
//     max: 30,
//   },
//   lastname: {
//     min: 2,
//     max: 30,
//   },
//   registrationAddress: {
//     min: 10,
//     max: 50,
//   },
//   city: {
//     min: 2,
//     max: 30,
//   },
//   street: {
//     min: 2,
//     max: 30,
//   },
//   house: {
//     min: 2,
//     max: 30,
//   },
//
//   apartment: {
//     min: 2,
//     max: 30,
//   },
// };
