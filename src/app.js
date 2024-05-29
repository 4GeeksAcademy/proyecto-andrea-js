/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch","while I was praying"];

window.onload = function generarExcusas() {
  let whoRamdom = who[Math.floor(Math.random() * who.length)];
  let actionRamdom = action[Math.floor(Math.random() * action.length)];
  let whatRamdom = what[Math.floor(Math.random() * what.length)];
  let whenRamdom = when[Math.floor(Math.random() * when.length)];

  let excuse = whoRamdom + " " + actionRamdom + " " + whatRamdom + " " + whenRamdom;

  document.getElementById("excuse").innerHTML = excuse;
};
