# Akan Name Generator

A web application that generates traditional Akan names based on your birth date and gender. The Akan people of Ghana have a naming tradition where children are named according to the day of the week they were born.

## 🌟 Features

- **Date-based Name Generation**: Enter your birth date to get your corresponding Akan name
- **Gender-specific Names**: Different names for males and females
- **Input Validation**: Ensures valid dates and required fields
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with a dark theme

## 📋 Akan Naming Tradition

The Akan naming system assigns names based on the day of the week:

### Male Names:

- **Sunday**: Kwasi
- **Monday**: Kwadwo
- **Tuesday**: Kwabena
- **Wednesday**: Kwaku
- **Thursday**: Yaw
- **Friday**: Kofi
- **Saturday**: Kwame

### Female Names:

- **Sunday**: Akosua
- **Monday**: Adwoa
- **Tuesday**: Abenaa
- **Wednesday**: Akua
- **Thursday**: Yaa
- **Friday**: Afua
- **Saturday**: Ama

## 🚀 How to Use

1. Open `index.html` in your web browser
2. Enter your birth day (1-31)
3. Enter your birth month (1-12)
4. Enter your birth year
5. Select your gender (Male or Female)
6. Click "Generate My Akan Name"
7. View your Akan name and the day of the week you were born

## 🛠️ Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Logic and interactivity

## 📁 Project Structure

```
Akan/
├── index.html      # Main HTML file
├── styles.css      # CSS styles
├── script.js       # JavaScript logic
└── README.md       # Project documentation
```

## 🔧 Local Development

No special setup required! Simply open `index.html` in any modern web browser.

For development:

1. Clone or download the project
2. Open `index.html` in your browser
3. Make changes to the files as needed
4. Refresh the browser to see updates

## 📝 Algorithm

The app uses the Akan naming formula to calculate the day of the week:

- Takes birth date components (century, year, month, day)
- Applies the formula: `d = ((4CC - 2CC - 1) + (45YY) + (1026*(MM + 1)) + DD) % 7`
- Maps the result (0-6) to days of the week
- Returns the corresponding Akan name based on gender

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 About

Created as part of a web development project to explore African cultural traditions through technology.

---

**Note**: This is a cultural tool for educational purposes. Akan names have deep cultural significance in Ghanaian tradition.</content>
<parameter name="filePath">/Users/paulineokemba/Group_12/Akan/README.md
