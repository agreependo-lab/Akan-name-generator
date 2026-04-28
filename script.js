const form = document.getElementById("akanForm");
const resultDiv = document.getElementById("result");
const akanNameDisplay = document.getElementById("akanName");

const akanNames = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  clearErrors();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;

  if (!validateInputs(day, month, year)) {
    return;
  }

  const dayOfWeek = calculateDayOfWeek(day, month, year);
  const akanName = akanNames[gender][dayOfWeek];

  akanNameDisplay.textContent = akanName;
  resultDiv.classList.add("show");
});

function validateInputs(day, month, year) {
  let isValid = true;

  if (day < 1 || day > 31) {
    showError("dayError", "Day must be between 1 and 31");
    isValid = false;
  }

  if (month < 1 || month > 12) {
    showError("monthError", "Month must be between 1 and 12");
    isValid = false;
  }

  const currentYear = new Date().getFullYear();
  if (year < 1900 || year > currentYear) {
    showError("yearError", `Year must be between 1900 and ${currentYear}`);
    isValid = false;
  }

  if (isValid && !isValidDate(day, month, year)) {
    showError("dayError", "Invalid date");
    isValid = false;
  }

  return isValid;
}

function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.classList.add("show");
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => {
    error.textContent = "";
    error.classList.remove("show");
  });
}

function calculateDayOfWeek(day, month, year) {
  let m = month;
  let y = year;

  if (m < 3) {
    m += 12;
    y -= 1;
  }

  const CC = Math.floor(y / 100);
  const YY = y % 100;
  const MM = m;
  const DD = day;

  const h =
    (DD +
      Math.floor((13 * (MM + 1)) / 5) +
      YY +
      Math.floor(YY / 4) +
      Math.floor(CC / 4) -
      2 * CC) %
    7;
  const dayIndex = (h + 6) % 7;

  return dayIndex;
}
