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
