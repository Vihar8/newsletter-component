# Newsletter Subscription Component

A React component for subscribing to a newsletter. This component allows users to enter their email addresses to subscribe and includes an unsubscribe functionality.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Folder Structure](#folder-structure)
4. [Routing](#routing)
5. [API Endpoints](#api-endpoints)
6. [Installation](#installation)
7. [Usage](#usage)
8. [License](#license)

---

## Project Overview

This project provides a user-friendly and responsive React-based newsletter subscription component with subscription and unsubscription functionality. It integrates with an API to handle backend operations for managing subscriptions.

---

## Features

- **User-friendly Interface**: Clean and simple email input form.
- **Real-time Feedback**: Provides users with instant feedback on subscription status.
- **API Integration**: Supports subscribing and unsubscribing through backend endpoints.
- **Responsive Design**: Optimized for all devices.
- **Reusable Components**: Built with modular and reusable UI components.

---

## Folder Structure

The main files and folders of interest include:

- `/components` - Contains reusable UI components, such as:
  - `Navbar`
  - `Footer`
  - `Card`
  - `Newsletter`
  - `Unsubscribe`
- `/pages` - Includes the pages for the newsletter and unsubscribe functionalities. The routing is handled by Next.js based on the file structure.

---

## Routing

The component includes the following routes:

- `/` - Main page displaying the newsletter subscription form and contact information.
- `/newsletter` - Page where users can subscribe to the newsletter.
- `/unsubscribe` - Page where users can unsubscribe from the newsletter.

---

## API Endpoints

1. **Subscribe to Newsletter**
   - **Method**: `POST`
   - **URL**: `http://localhost:5000/api/newsletter/subscribe`
   - **Body**:
     ```json
     {
       "email": "user@example.com"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Successfully subscribed!"
     }
     ```

2. **Unsubscribe from Newsletter**
   - **Method**: `POST`
   - **URL**: `http://localhost:5000/api/newsletter/unsubscribe`
   - **Body**:
     ```json
     {
       "email": "user@example.com"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Successfully unsubscribed!"
     }
     ```

---

## Installation

To use this component in your React project, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/newsletter-component.git
   cd newsletter-component

2. **Install Dependencies:**
   ```bash
   npm install

3. **Set Up Environment Variables: Create a .env.local file with necessary API keys and URLs, such as:**
   ```bash
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
   
4. **Start the Development Server:**
   ```bash
   npm run dev

## Usage

1. **Import the Newsletter component into your React application:**
   ```bash
   import Newsletter from './components/Newsletter';

2. **Add the component to your desired page or layout:**
   ```bash
   const App = () => {
   return (
   <div>
   <h1>Welcome to Our Newsletter</h1>
   <Newsletter />
   </div>
   );
   };

   export default App;

3. Customize the styles and API endpoints as needed to fit your project.

## License
This project is licensed under the MIT License.
