const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery__item__image img");
const original = document.querySelector(".modal__image");
const caption = document.querySelector(".modal__caption");

previews.forEach((preview) => {
  preview.addEventListener("click", (e) => {
    modal.classList.add("open");
    original.classList.add("open");
    // dynamic picture
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./Images/Paintings/Full/${originalSrc}`;
    const altText = preview.alt;
    original.alt = altText;
    // Dynamic title
    // caption.textContent = altText;
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
  original.classList.remove("open");
  original.src = "";
  original.alt = "";
  // caption.textContent = "";
});
