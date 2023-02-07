function createGrid(size) {
  const grid = document.querySelector(".grid");
  const gridWidth = grid.offsetWidth;
  const gridHeight = grid.offsetHeight;
  console.log(gridWidth, gridHeight);
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.style.width = `calc(${gridWidth}px / ${size})`;
    div.style.height = `calc${gridHeight}px / ${size})`;
    grid.appendChild(div);
  }
}

createGrid(16);
