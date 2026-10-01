const cube = document.getElementById("cube");
const buttons = document.querySelectorAll(".menu .btn");
const validSides = new Set(["front", "right", "back", "left", "top", "bottom"]);

const clickOnSide = (side) => {
  if (!cube || !validSides.has(side)) return;

  const activeSide = cube.dataset.side;
  cube.classList.remove(`show-${activeSide}`);
  cube.classList.add(`show-${side}`);
  cube.dataset.side = side;

  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.side === side));
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const sideToTurn = event.currentTarget.dataset.side;
    clickOnSide(sideToTurn);
  });
});
