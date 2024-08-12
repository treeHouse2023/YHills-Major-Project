# YHills-Major-Project

# 🍕 Pizza Paradise

Welcome to Pizza Paradise, a React-based application designed to manage a pizza store's menu, including adding, updating, and deleting items. The application features responsive design, easy navigation, and form handling, all connected to a JSON server for data management.

## 🚀 Project Overview

**Pizza Paradise** allows users to:

- **Home:** View a welcoming landing page.
- **About:** Learn more about the pizza store.
- **Display All Items:** Browse all available pizza items.
- **Add New Item:** Add a new pizza item using a user-friendly form.
- **Update Item:** Update existing pizza items.
- **Delete Item:** Remove items from the menu.
- **Contact:** Get in touch with the store through a contact form.

## 📋 Features

- **Routing:** Seamless navigation between pages using `react-router-dom`.
- **Responsive Design:** Built with Bootstrap to ensure a great experience across all devices.
- **Form Handling:** Forms created with Formik and Yup for smooth validation and submission.
- **State Management:** Utilizes `useState` and `useEffect` hooks for managing application state.
- **Data Management:** Connects to a JSON server for CRUD operations on pizza items.

## 🛠️ Setup Instructions

### 1. Install Node.js and npm
Ensure you have Node.js and npm installed. You can download them from [Node.js official website](https://nodejs.org/).

### 2. Create a React App
```bash
npx create-react-app pizza-paradise
cd pizza-paradise
```
### 3. Install Required Packages
```bash
npm install react-router-dom bootstrap formik yup axios
```
### 4. Set Up JSON Server
Create a db.json file for your data
```bash 
npx json-server --watch db.json --port 5000
```
### 5. Run the Application
```bash 
npm start
```
## 6. Key Components

- **Home:** Simple landing page.
- **About:** Static page with store details.
- **DisplayAllItems:** Lists all pizza items.
- **AddNewItem:** Form to add new items with validation.
- **UpdateItem:** Form to update existing items.
- **DeleteItem:** Button functionality to remove items.
- **Contact:** Form for users to reach out.

## 7. Hooks Used

- **useState:** For state management.
- **useEffect:** For side effects and data fetching.

## 📸 Screenshots

- **Home Page:**  ![Screenshot 2024-08-12 205605](https://github.com/user-attachments/assets/1e252505-13de-42e9-967c-e74b1389808d)

  
- **Display All Items:**   ![Screenshot 2024-08-12 205624](https://github.com/user-attachments/assets/e6a6f015-5e75-4f85-b588-5b97d5a33b9d)

  
- **Add New Item:**   ![Screenshot 2024-08-12 205642](https://github.com/user-attachments/assets/fba59016-2515-4e82-b4bd-5faf1cf9c89b)

  
- **Update Item:**   ![Screenshot 2024-08-12 205658](https://github.com/user-attachments/assets/4349706e-37fe-4565-94bc-b53c18a76e62)

  
- **Contact Page:**   ![Screenshot 2024-08-12 205719](https://github.com/user-attachments/assets/9747699a-fed4-4c2b-bb97-16fa8c6ecfd2)
![Screenshot 2024-08-12 205728](https://github.com/user-attachments/assets/8a8824e9-c586-43d6-8e20-977ddd8000aa)


## 🧪 Testing

- **Navigation:** Tested across different devices for smooth transitions.
- **CRUD Operations:** Verified adding, updating, and deleting items works as expected.
- **Responsiveness:** Ensured the application is responsive on various screen sizes.
- 
## 🌐 Deployed Website

You can visit the live application here:[(https://vercel.com/nishants-projects-6b3be6a9/y-hills-major-project).](https://y-hills-major-project-r600734kq-nishants-projects-6b3be6a9.vercel.app/)

**Note:** The deployed version does not include the `db.json` file, so data management features (like adding, updating, or deleting items) may not function as expected.

