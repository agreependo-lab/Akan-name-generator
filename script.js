const formElement = document.getElementById("akanForm");
const resultContainer = document.getElementById("result");
const akanNameElement = document.getElementById("akanName");

const AKAN_NAMES = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  const formValues = getFormValues();
  if (!formValues) {
    return;
  }

  const { day, month, year, gender } = formValues;

  if (!validateDateInputs(day, month, year)) {
    return;
  }

  const dayIndex = calculateDayIndex(day, month, year);
  const akanName = AKAN_NAMES[gender][dayIndex];

  showAkanName(akanName);
});

function getFormValues() {
  const day = parseInt(document.getElementById("day").value, 10);
  const month = parseInt(document.getElementById("month").value, 10);
  const year = parseInt(document.getElementById("year").value, 10);
  const selectedGender = document.querySelector('input[name="gender"]:checked');

  if (!selectedGender) {
    showError(
      "dayError",
      "Please choose a gender before generating your Akan name.",
    );
    return null;
  }

  return {
    day,
    month,
    year,
    gender: selectedGender.value,
  };
}

function validateDateInputs(day, month, year) {
  let isValid = true;
  const currentYear = new Date().getFullYear();

  if (Number.isNaN(day) || day < 1 || day > 31) {
    showError("dayError", "Please enter a day between 1 and 31.");
    isValid = false;
  }

  if (Number.isNaN(month) || month < 1 || month > 12) {
    showError("monthError", "Please enter a month between 1 and 12.");
    isValid = false;
  }

  if (Number.isNaN(year) || year < 1900 || year > currentYear) {
    showError(
      "yearError",
      `Please enter a year between 1900 and ${currentYear}.`,
    );
    isValid = false;
  }

  if (isValid && !isValidDate(day, month, year)) {
    showError("dayError", "That date is not valid. Please check your inputs.");
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
  if (!errorElement) {
    return;
  }

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

function showAkanName(name) {
  akanNameElement.textContent = name;
  resultContainer.classList.add("show");
}

function calculateDayIndex(day, month, year) {
  let normalizedMonth = month;
  let normalizedYear = year;

  // For Zeller's Congruence, January and February are counted as months 13 and 14
  if (normalizedMonth < 3) {
    normalizedMonth += 12;
    normalizedYear -= 1;
  }

  const century = Math.floor(normalizedYear / 100);
  const yearOfCentury = normalizedYear % 100;

  const dayNumber =
    (day +
      Math.floor((13 * (normalizedMonth + 1)) / 5) +
      yearOfCentury +
      Math.floor(yearOfCentury / 4) +
      Math.floor(century / 4) -
      2 * century) %
    7;

  // Convert from Zeller's result to 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  return (dayNumber + 6) % 7;
}
