const createCells = document.getElementById("tombolaCells");
const cells = function () {
  for (let i = 1; i <= 90; i++) {
    newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerText = i;
    createCells.appendChild(newCell);
  }
};
cells();

//generiamo numeri casuali da 1 a 90

const generateNumb = function () {
  const random = Math.floor(Math.random() * 90) + 1;
  const selectedNumb = document.getElementsByClassName("cell")[random - 1];

  selectedNumb.classList.add("cellCol");

  console.log(random);
};
//preveniamo default
const prevDef = document.getElementById("formdef");
prevDef.addEventListener("submit", (e) => {
  e.preventDefault();
});
