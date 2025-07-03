let form = document.getElementById("bmi-form");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let resetButton = document.getElementById("reset-button");
let resetContainer = document.getElementById("reset-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let weightValue = parseFloat(weight.value);
  let heightValue = parseFloat(height.value);

  if (!isNaN(weightValue) && weightValue > 0 && !isNaN(heightValue) && heightValue > 0) {
    let heightInMeters = heightValue / 100;
    let bmi = weightValue / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(1);

    let Result = document.getElementById("bmi-result");
    let category = document.getElementById("bmi-category");
    let resultContainer = document.getElementById("result-container");
    let warning = document.getElementById("warning");
    let progress = document.getElementById("bmi-progress");

    Result.textContent = bmi;
    Result.style.fontSize = "2rem";
    category.style.fontSize = "1.5rem";

    let percent = (bmi / 40) * 100;
    percent = Math.min(percent, 100);
    progress.style.width = percent + "%";
    progress.textContent = "BMI: " + bmi;

    if (bmi < 18.5) {
      category.textContent = "Underweight";
      Result.style.color = "blue";
      category.style.color = "blue";
      progress.style.backgroundColor = "#87CEEB";
      warning.textContent = "Consider eating nutrient-rich foods and strength training to gain healthy weight.";
    } else if (bmi >= 18.5 && bmi < 25) {
      category.textContent = "Normal weight";
      Result.style.color = "green";
      category.style.color = "green";
      progress.style.backgroundColor = "#90EE90";
      warning.textContent = "Great! Maintain your weight with a balanced diet and regular exercise.";
    } else if (bmi >= 25 && bmi < 30) {
      category.textContent = "Overweight";
      Result.style.color = "orange";
      category.style.color = "orange";
      progress.style.backgroundColor = "#FFD700";
      warning.textContent = "Try reducing sugary and fatty foods. Include more physical activity in your routine.";
    } else {
      category.textContent = "Obesity";
      Result.style.color = "red";
      category.style.color = "red";
      progress.style.backgroundColor = "#FF7F7F";
      warning.textContent = "It's important to consult a healthcare provider for personalized advice.";
    }

    warning.style.fontSize = "1.2rem";

    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("flex");

    resetContainer.classList.remove("hidden");
    resetContainer.classList.add("flex", "justify-center");

    weight.value = "";
    height.value = "";
  }
});

resetButton.addEventListener("click", function () {
  let resultContainer = document.getElementById("result-container");
  let Result = document.getElementById("bmi-result");
  let category = document.getElementById("bmi-category");
  let progress = document.getElementById("bmi-progress");
  let warning = document.getElementById("warning");

  Result.textContent = "";
  category.textContent = "";
  progress.style.width = "0%";
  progress.textContent = "";
  progress.style.backgroundColor = "";

  warning.textContent = "";
  warning.style.fontSize = "";

  resultContainer.classList.add("hidden");
  resultContainer.classList.remove("flex");

  resetContainer.classList.add("hidden");
  resetContainer.classList.remove("flex");

  weight.value = "";
  height.value = "";

  form.classList.remove("hidden");
  form.classList.add("block");
});
