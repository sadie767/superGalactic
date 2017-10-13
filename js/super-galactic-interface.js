import { Calculator } from './../js/super-galactic.js';

$(document).ready(function() {
  $("form#calculatorForm").submit(function(event) {
    event.preventDefault();
    let death = $("input#death").val();
    let calculator = $("input#calculator").val();
    let calculatorInput = new Calculator(death, calculator);

    $("output#mercury").text(calculator.mercury());
    $("output#venus").text(calculator.venus());
    $("output#mars").text(calculator.mars());
    $("output#jupiter").text(calculator.jupiter());
  });
});
