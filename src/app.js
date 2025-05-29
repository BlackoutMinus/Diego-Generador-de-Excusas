import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['El perro ', 'Mi abuela ', 'El jardinero borracho ', 'Mi cocodrilo '];
let action = [' se comió', ' meó', ' empezó a lanzar piedras a', ' rompió'];
let what = [' mi tarea', ' mi telefono', ' mi coche'];
let when = [' antes de empezar las clases', ' mientras dormía', ' mientras hacía ejercicio', ' mientras almorzaba', ' mientras le rezaba a Cristo'];
let phrasesArray = [who, action, what, when];
let excuse = "";

window.onload = function() {
  //write your code here
  for (let i = 0; i < phrasesArray.length; i++) {
    let currentPhrase = phrasesArray[i][Math.floor(Math.random() * phrasesArray[i].length)]
    excuse += currentPhrase;
  }

  document.getElementById("excuse").innerHTML = excuse;
  console.log("Hello Rigo from the console!");
};
