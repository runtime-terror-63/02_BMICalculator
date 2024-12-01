const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height ";
    results.style.color = "red";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight ";
    results.style.color = "red";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let message = `Your BMI is ${bmi}`;

    if (bmi < 18.6) {
      message += " You are a under weight.";
    } else if (bmi >= 18.7 && bmi < 24.9) {
      message += " You are normal weight.";
    } else if (bmi > 14.9) {
      message += " You are overweight";
    }

    results.innerHTML = message;
    results.style.color = "green";
  }
});
