import { Calculator } from './../js/super-galactic.js';

$(document).ready(function() {
  $("form#calculatorForm").submit(function(event) {
    event.preventDefault();
    let homeSubmit = $("#home").val();
    let calculatorSubmit = parseFloat($("#calculator").val());

    let calculatorInput = new Calculator(homeSubmit, calculatorSubmit);
    let jupiterResult = calculatorInput.jupiter();
    let marsResult = calculatorInput.mars();
    let venusResult = calculatorInput.venus();
    let mercuryResult = calculatorInput.mercury();
    let result2 = calculatorInput.deathCalculator();

    let fancyResult = "You are " + jupiterResult + " years old on Jupiter, " + marsResult + " years old on Mars, " + venusResult + " years old on Venus, and " + mercuryResult + " on Mercury!"
    $("#age").text(fancyResult);
    $("#death").text(result2);
  });
});
