// Get all form elements
const form = document.getElementById("akanForm");
const resultDiv = document.getElementById("result");
const akanNameDisplay = document.getElementById("akanName");

// Akan names by gender and day of week
const akanNames = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

// Form submission event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  clearErrors();

  // Get form values
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // Validate inputs
  if (!validateInputs(day, month, year)) {
    return;
  }

  // Calculate day of the week
  const dayOfWeek = calculateDayOfWeek(day, month, year);

  // Get Akan name
  const akanName = akanNames[gender][dayOfWeek];

  // Display result
  akanNameDisplay.textContent = akanName;
  resultDiv.classList.add("show");
});

// Validate user inputs
function validateInputs(day, month, year) {
  let isValid = true;
  return isValid;

  // Validate day
  if (day < 1 || day > 31) {
    showError("dayError", "Day must be between 1 and 31");
    isValid = false;
  }

  // Validate month
  if (month < 1 || month > 12) {
    showError("monthError", "Month must be between 1 and 12");
    isValid = false;
  }

  // Validate year
  const currentYear = new Date().getFullYear();
  if (year < 1900 || year > currentYear) {
    showError("yearError", `Year must be between 1900 and ${currentYear}`);
    isValid = false;
  }

  // Check if date is valid
  if (isValid && !isValidDate(day, month, year)) {
    showError("dayError", "Invalid date");
    isValid = false;
  }

  return isValid;
}

// Check if date actually exists
function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

// Show error message
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.classList.add("show");
}

// Clear all error messages
function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => {
    error.textContent = "";
    error.classList.remove("show");
  });
}

// Calculate day of week using Zeller's Congruence
function calculateDayOfWeek(day, month, year) {
  let m = month;
  let y = year;

  // January and February are counted as months 13 and 14 of previous year
  if (m < 3) {
    m += 12;
    y -= 1;
  }

  const CC = Math.floor(y / 100);
  const YY = y % 100;
  const MM = m;
  const DD = day;

  // Zeller's Congruence formula
  const h =
    (DD +
      Math.floor((13 * (MM + 1)) / 5) +
      YY +
      Math.floor(YY / 4) +
      Math.floor(CC / 4) -
      2 * CC) %
    7;

  // Convert to day of week (0 = Sunday, 1 = Monday, etc.)
  const dayIndex = (h + 6) % 7;

  return dayIndex;
}
