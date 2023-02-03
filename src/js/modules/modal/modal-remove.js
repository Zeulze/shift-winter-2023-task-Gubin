function modalRemoveHandler(modal) {
  document.addEventListener("keydown", modalRemoveOnKeydown);
  document.addEventListener("click", modalRemoveOnClick);

  function modalRemoveOnKeydown(e) {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
    }
  }

  function modalRemoveOnClick(e) {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  }
}

export default modalRemoveHandler;
