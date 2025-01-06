var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 100 + "px";
  blur.style.top = dets.y - 100 + "px";
});

document.addEventListener("mousemove", function (event) {
  createTrail(event.pageX, event.pageY);
});

function createTrail(x, y) {
  // Create a new trail element
  const trail = document.createElement("div");
  trail.classList.add("trail");
  // Set the position of the trail
  trail.style.left = x + "px";
  trail.style.top = y + "px";

  // Append it to the body
  document.body.appendChild(trail);

  // Remove the trail element after the animation completes (0.6s)
  setTimeout(() => {
    trail.remove();
  }, 600); // Match this duration with the animation duration in CSS
}
