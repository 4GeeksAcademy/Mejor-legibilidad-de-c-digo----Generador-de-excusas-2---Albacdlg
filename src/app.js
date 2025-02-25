import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const who = ["Mi perro", "El profesor", "Un pájaro", "Un alien"];
  const action = ["comió", "rompió", "perdió", "se llevó"];
  const what = ["mi tarea", "el proyecto", "mis apuntes", "mi libro"];
  const when = ["ayer", "esta mañana", "hace un rato", "el lunes pasado"];

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generateExcuse() {
    return `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}.`;
  }

  const excuseElement = document.querySelector(".excuse");
  const generateButton = document.getElementById("generateButton");

  generateButton.addEventListener("click", () => {
    excuseElement.textContent = generateExcuse();
  });

  document.querySelector(".excuse").textContent = generateExcuse();
};