const viewer = document.getElementById("fullscreenViewer");
const fullImg = document.getElementById("fullImg");

document.querySelectorAll(".gallery-item img").forEach(img => {
  img.addEventListener("click", () => {
    fullImg.src = img.src;
    viewer.style.display = "flex";
  });
});

/* close on click */
viewer.addEventListener("click", () => {
  viewer.style.display = "none";
});

/* close on ESC */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") viewer.style.display = "none";
});
