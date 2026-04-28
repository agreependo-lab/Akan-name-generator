# Akan Name Generator

This is a simple web application that generates an Akan name based on a user's date of birth and gender. Akan names are traditional Ghanaian names given according to the day of the week a person is born.

## Features
- Input fields for **Day**, **Month**, and **Year** of birth
- Gender selection (Male/Female)
- Validation for correct date ranges and valid dates
- Calculates the day of the week using **Zeller’s Congruence**
- Displays the corresponding Akan name

## Project Structure
- `index.html` — The main webpage with the form and result display
- `style.css` — Styles for buttons, result box, and error messages
- `script.js` — JavaScript logic for validation, calculation, and displaying results

## How to Run
1. Clone or download the project files.
2. Open `index.html` in your browser.
3. Enter your birth date and select your gender.
4. Click **Generate** to see your Akan name.

## Example
- Input: Day = 15, Month = 6, Year = 2000, Gender = Male  
- Output: **Kwadwo**

## Notes
- The form validates that the day is between 1–31, month between 1–12, and year between 1900–current year.
- If inputs are invalid, error messages will be shown.
- The result box is hidden by default and only appears after successful generation.

## Future Improvements
- Add styling for error messages
- Support for more cultural naming conventions
- Improve mobile responsiveness