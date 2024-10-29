Folder Structure
The main files and folders of interest include:

/components - Contains reusable UI components, such as Navbar, Footer, Card, Newsletter, and Unsubscribe.
/pages - Includes the pages for the newsletter and unsubscribe functionalities. The routing is handled by Next.js based on the file structure.
Routing
The component includes the following routes:

/ - Main page displaying the newsletter subscription form and contact information.
/newsletter - Page where users can subscribe to the newsletter.
/unsubscribe - Page where users can unsubscribe from the newsletter.



Subscribe: POST http://localhost:5000/api/newsletter/subscribe

Body: { "email": "user@example.com" }
Response: { "message": "Successfully subscribed!" }



# Newsletter Subscription Component

A React component for subscribing to a newsletter. This component allows users to enter their email addresses to subscribe and includes an unsubscribe functionality.

## Features

- User-friendly email input form.
- Real-time feedback on subscription status.
- API integration for subscribing and unsubscribing.
- Responsive design with simple styling.

## Installation

To use this component in your React project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/newsletter-component.git
   cd newsletter-component
