let elem = Array.from(document.querySelectorAll(".elem"));

// console.log(elem)
// console.log(elemImage)
elem.forEach((box) => {
  let elemImage = box.querySelector("img");

  box.addEventListener("mousemove", (dets) => {
    elemImage.style.left = dets.x + "px";
    elemImage.style.top = dets.y + "px";
  });

  box.addEventListener("mouseenter", () => {
    elemImage.style.opacity = "1";
  });
  box.addEventListener("mouseleave", () => {
    elemImage.style.opacity = "0";
  });
});
