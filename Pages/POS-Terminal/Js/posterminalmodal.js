export function posterminalModal() {
  const sectionModal = document.querySelector("#posterminal-modal");
  const terminalModal = document.querySelector(".first-modal");
  const ekassaModal = document.querySelector(".second-modal");
  const btnTerminal = document.querySelector(".btn-terminal");
  const btnEkassa = document.querySelector(".btn-ekassa");
  const closeBtn = document.querySelectorAll(".close-btn");

  btnTerminal.addEventListener("click", () => {
    sectionModal.classList.remove("d-none");
    ekassaModal.classList.add("d-none");
    terminalModal.classList.remove("d-none");
    document.body.style.overflow = "hidden";
  });
  btnEkassa.addEventListener("click", function () {
    sectionModal.classList.remove("d-none");
    ekassaModal.classList.remove("d-none");
    terminalModal.classList.add("d-none");
    document.body.style.overflow = "hidden";
  });

  closeBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      sectionModal.classList.add("d-none");
      document.body.style.overflow = "scroll";
    });
  });
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-check")) {
      sectionModal.classList.add("d-none");
      document.body.style.overflow = "scroll";
    }
  });
}
