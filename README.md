# 📝 Signup Form with Validation | Day 26 – Veda Technology Internship

A responsive Signup Form built using HTML, CSS, and JavaScript. The project validates user inputs and displays inline error messages to help users enter valid information.

## ✨ Features

- Name, email, and password fields
- Inline validation error messages
- Email format validation using Regular Expressions
- Password strength indicator: Weak, Medium, and Strong
- Minimum password length validation
- Input field styling for valid and invalid values
- Success message when all fields are valid
- Prevents successful form submission when validation fails
- Responsive design for desktop and mobile devices

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

## 📂 Project Structure

```text
Signup-Form/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run the Project

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Enter your name, email address, and password.
5. Check the validation messages and password strength indicator.
6. Enter valid information to see the success message.

## ✅ Validation Rules

- **Name:** Must contain at least 2 characters.
- **Email:** Must follow a valid email format, such as `user@gmail.com`.
- **Password:** Must contain at least 8 characters.
- **Password Strength:** Checks uppercase letters, lowercase letters, numbers, and special characters.
- **Form Validation:** Displays a success message only when all three fields pass validation.

## 🔐 Password Strength Indicator

The password strength indicator provides visual feedback based on password length and character variety.

- **Weak:** Few password requirements are met.
- **Medium:** Most password requirements are met.
- **Strong:** All five strength checks are met.

## 🧠 How It Works

1. JavaScript reads the values entered by the user.
2. The name is checked for minimum length.
3. A Regular Expression checks the email format.
4. Password length and character types are checked.
5. Inline error messages appear for invalid inputs.
6. A success message appears when all validations pass.

## 📚 Learning Outcomes

This project helped me practice JavaScript functions, Regular Expressions, form validation, DOM manipulation, event handling, conditional statements, and dynamic CSS styling.

## 👨‍💻 Internship Details

- **Day:** 26
- **Program:** Web Development Internship
- **Organization:** Veda Technology
