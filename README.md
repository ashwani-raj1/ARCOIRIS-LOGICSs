# Auth System — Registration, Login, and Dashboard

This is a mini web application created using only HTML, CSS, and JavaScript. It demonstrates how to build a simple user registration and login system with validation and dashboard access using browser localStorage.

## Technologies Used

- HTML5 for building the structure of the application
- CSS3 for styling and layout
- Vanilla JavaScript for form validation, localStorage handling, and session control

## Validations Implemented

### Registration Form

- Full Name: Required, at least 3 characters, no digits, no character repeated more than 2 times
- Email: Required, valid email format using regular expressions
- Password: Required, at least 8 characters with uppercase, lowercase, and digits
- Confirm Password: Must match the entered password
- Phone Number: Required, exactly 10 digits
- Gender: Required (radio button)
- Date of Birth: Required, user must be at least 18 years old
- Address: Required, minimum 10 characters
- City: Required (dropdown selection)
- Skills: At least one skill must be selected (HTML, CSS, JavaScript)
- Accept Terms: Required
- Profile Picture: Optional, stored as base64 in localStorage

### Login Form

- Email and password must match the details stored during registration
- Error messages are shown on failure
- Show/Hide password toggle implemented
- On success, redirects to the dashboard

## How to Run the Project

1. Download or clone the repository or extract the provided ZIP file.
2. Open `register.html` in a browser to register a new user.
3. After successful registration, you are redirected to `login.html`.
4. Enter the correct credentials to log in.
5. On successful login, you will be taken to the dashboard, which displays user details from localStorage.
6. Click Logout to end the session and return to the login page.
