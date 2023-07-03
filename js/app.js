import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    console.log(input.target);
    valida(input.target);
  });
});

const area = document.querySelector("textarea");
area.addEventListener("blur", (area) => {
  valida(area.target);
});



 

