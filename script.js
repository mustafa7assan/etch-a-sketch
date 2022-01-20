"use strict";

function createRandomNumber() {
  return Math.floor(Math.random() * 256) + 1;
}
function createRandomColor() {
  const red = createRandomNumber();
  const green = createRandomNumber();
  const blue = createRandomNumber();
  return `${red}, ${green}, ${blue}`;
}
function createGrid(size) {
  const width = 500 / size;
  for (let i = 1; i <= size * size; i++) {
    const div = document.createElement("div");
    div.style.width = width + "px";
    div.style.height = width + "px";
    gridContainer.appendChild(div);
  }
  const squares = document.querySelectorAll(".grid>div");
  squares.forEach((sqaure) => {
    sqaure.addEventListener("mouseover", (e) => {
      const color = e.target.style.backgroundColor;
      if (color) {
        const arr = color.slice(4, -1).split(",");
        const red = Number(arr[0]);
        const green = Number(arr[1]);
        const blue = Number(arr[2]);
        e.target.style.backgroundColor = `rgb(${red - 25}, ${green - 25}, ${
          blue - 25
        })`;
      } else {
        e.target.style.backgroundColor = `rgb(${createRandomColor()})`;
      }
    });
  });
}

const gridContainer = document.querySelector(".grid");
const clear = document.querySelector(".clear");
createGrid(16);

clear.addEventListener("click", () => {
  gridContainer.innerHTML = "";
  let size;
  while (true) {
    size = Number(prompt("What is number of square per size of the grid?"));
    if (size < 100) {
      break;
    }
  }
  createGrid(size);
});
