const calculateButton = document.getElementById("calculate");
const errorMessage = "Please enter the value";
const errorsMapping = {
  NO_NUMBER_SPECIFIED: "Specify number to calculation",
  INVALID_NUMBER_FORMAT: "Number format in not correct",
  INVALID_FROM_BASE: 'The "From" parameter is not correct',
  INVALID_TO_BASE: 'The "To" parameter is not correct',
};

calculateButton.addEventListener("click", processData);

function generateURL(value, from, to) {
  return `https://networkcalc.com/api/binary/${value}?from=${from}&to=${to}`;
}

function processData() {
  const dataFromUser = document.getElementById("userValue").value.trim();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const result = document.querySelector(".result");
  if (dataFromUser) {
    fetch(generateURL(dataFromUser, from, to))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          result.textContent = errorsMapping[data.error];
          result.style.backgroundColor = "#e64553";
        } else {
          result.textContent = data.converted;
          result.style.backgroundColor = "#007bff";
        }
        result.style.display = "block";
      })
      .catch((error) => {
        console.error("Error:", error);
        result.textContent = "Error fetching data";
        result.style.display = "block";
      });
  } else {
    result.textContent = errorMessage;
    result.style.display = "block";
  }
}
