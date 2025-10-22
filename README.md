### Task Management

Add new tasks

Mark tasks as completed

Delete tasks

Filter tasks (All, Active, Completed)

### User Management

Fetch and display users from an API (e.g., JSONPlaceholder)

Search and filter users

Theme Management

Toggle between light and dark modes

Persist theme selection using local storage

## Screenshots

### Tasks Page
![Home Page Screenshot](./src/assets/Tasks.png)

### Users Page
![Tasks Page Screenshot](./src/assets/Users.png)


### Responsive UI

Works on mobile, tablet, and desktop

Reusable Components

Button, Card, Navbar, Footer

### State Management

Uses React Hooks: useState, useEffect, useContext

Custom hook useLocalStorage for persistent tasks

### API Integration

Axios used for fetching data

Handles loading and error states

### Tech Stack

React - Frontend library

Tailwind CSS - Utility-first CSS framework

React Router - Client-side routing

Axios - API requests

LocalStorage - Persist tasks and theme selection

### Installation

Clone the repository

git clone <your-repo-url>
cd frontend


Install dependencies

npm install


Start the development server

npm run dev


Open the app in your browser:

http://localhost:5173

Project Structure
src/
 ├── components/
 │    ├── Button.jsx       # Reusable button component
 │    ├── Card.jsx         # Card layout component
 │    ├── Navbar.jsx       # Navigation bar
 │    └── Footer.jsx       # Footer component
 ├── pages/
 │    ├── Home.jsx         # Home page
 │    ├── Tasks.jsx        # Task manager page
 │    └── Users.jsx        # User list page
 ├── hooks/
 │    └── useLocalStorage.js # Custom hook for local storage
 ├── ThemeContext.jsx      # Light/dark theme context
 └── App.jsx               # Main app with routing

### Usage
Task Management

Navigate to Tasks page

Add tasks in the input box and press "Add"

Click checkbox to mark completed

Delete tasks using the "Delete" button

Filter tasks using the dropdown: All, Active, Completed

User Management

Navigate to Users page

Users are fetched from JSONPlaceholder API (https://jsonplaceholder.typicode.com/users)

Search users using the search input

Pagination or infinite scroll can be implemented if needed

Theme Management

Toggle the light/dark mode button in Navbar

Theme selection persists using localStorage

Tailwind darkMode: 'class' is used for manual toggling

Tailwind CSS Setup

Installed Tailwind CSS with PostCSS:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p





index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

API Integration Example
import { useEffect, useState } from "react";
import axios from "axios";




Contributing

Contributions are welcome! Please open a pull request or issue if you have suggestions or improvements.

License

MIT License