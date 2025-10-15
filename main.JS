let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

document.body.style.userSelect = "none";
document.body.style.overflow = "auto";

// Evita arrastrar imágenes o enlaces
document.querySelectorAll("img, a").forEach(el => {
  el.setAttribute("draggable", "false");
});

window.addEventListener("mousedown", e => {
  if (e.button !== 0) return; // solo clic izquierdo
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  scrollLeft = window.scrollX;
  scrollTop = window.scrollY;
  document.body.style.cursor = "grabbing";
});

window.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.cursor = "default";
});

window.addEventListener("mousemove", e => {
  if (!isDragging) return;
  e.preventDefault();
  const moveX = (e.clientX - startX) * 1.2; // suaviza el movimiento
  const moveY = (e.clientY - startY) * 1.2;
  window.scrollTo({
    left: scrollLeft - moveX,
    top: scrollTop - moveY,
    behavior: "instant"
  });
});