function generateGrid(size = 16) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";
  const gridWidth = grid.offsetWidth;
  const gridHeight = grid.offsetHeight;
  console.log(gridWidth, gridHeight);
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.style.width = `${gridWidth / size}px`;
    div.style.height = `${gridHeight / size}px`;
    grid.appendChild(div);
  }

  const squares = document.querySelectorAll(".grid div");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (colorSystem === "standard") {
        square.style.backgroundColor = "#000";
      } else if (colorSystem === "random") {
        square.style.backgroundColor = getRandomColor();
      }
    });
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color.concat(letters[Math.floor(Math.random() * letters.length)]);
  }
  return color;
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const size = Number(document.getElementById("size").value);

  generateGrid(size);
});

const colorButtons = document.querySelectorAll(".color-system button");
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    colorButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    colorSystem = button.id;
  });
});

let colorSystem = "standard";
generateGrid();
