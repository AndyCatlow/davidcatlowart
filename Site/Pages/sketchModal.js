const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".sketch img");
const original = document.querySelector(".modal__image");
const caption = document.querySelector("modal__caption");

previews.forEach((preview) => {
  preview.addEventListener("click", (e) => {
    modal.classList.add("open");
    original.classList.add("open");
    // dynamic picture
    const originalSrc = preview.getAttribute("data-original");

    original.src = `../Images/Sketches/Full/${originalSrc}`;
    const altText = preview.alt;
    original.alt = altText;
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
  original.classList.remove("open");
  original.src = "";
  original.alt = "";
  // caption.textContent = "";
});
