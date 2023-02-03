function clearLocalStorage() {
  for (let i = 1; i <= localStorage.getItem("NumberOfItems"); i++) {
    localStorage.removeItem(`${i}`);
  }
}

export default clearLocalStorage;
