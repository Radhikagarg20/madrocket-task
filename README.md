# React Firebase Student Management System

## Overview
This is a React-based student management system with Firebase authentication and Firestore database integration. The website contains two main pages:

1. **Login Page**: A simple login page using Firebase authentication.
2. **Students Page**: A table displaying the student list, with columns such as ID, Name, Class, Section, Roll Number, and Action (View, Edit, Delete). An "Add Student" button opens a modal with a form to add student details. The form contains at least 12 fields, and upon submission, the data is saved to Firestore.

Additionally, the project includes a dashboard with a sidebar containing options for navigating to the Students Page or logging out.

## Features
- Firebase authentication for login.
- Display students in a table with options to view, edit, or delete.
- Modal form to add a new student with at least 12 fields (text, number, email, etc.).
- Form validation.
- Simple and elegant design using the [Material Kit React template](https://github.com/minimal-ui-kit/material-kit-react).
- Deploy the website on any hosting service.


## Setup and Installation
Prerequisites
- Node.js installed
- Firebase account and Firebase project
  
## Steps to Run Locally
1. Clone this repository:
git clone https://github.com/Radhikagarg20/madrocket-task.git

2. Navigate to the project directory:
cd madrocket-task

3. Install dependencies:
npm install

4. Set up Firebase:
- Create a Firebase project at Firebase Console.
- Add Firebase Authentication and Firestore.
- Copy the Firebase config values and paste them in src/firebase/firebaseConfig.js.

5. Run the project locally:
npm start

The application will be available at http://localhost:3000.

## Firebase Authentication Setup
- Go to the Firebase Console.
- Enable Email/Password Authentication in the Authentication section.
- Add the following credentials to the Firebase console under the "Users" tab:
    - Username: admin@123.com
    - Password: admin@123
