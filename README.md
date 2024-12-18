# MealMate

## Elevator Pitch
Introducing MealMate, a go-to solution for smart meal planning and organization. This app simplifies weekly meal prep by helping you plan meals, generate grocery lists, and discover recipes tailored to your preferences.  Its real-time collaboration features make it easy to plan meals with family, friends, roommates, and others. With MealMate you can transform your meal plan into a more efficient and enjoyable experience.  

## Key Features
- **Weekly Meal Planning:** Create and manage weekly meal plans with ease.
- **Grocery List Integration:** Automatically generate and manage grocery lists based on your meal plans.
- **Recipe Discovery:** Explore recipes from various cuisines.
- **Collaborative Planning:** Share and plan meals with family and friends in real-time.
- **Personalized Recommendations:** Receive meal suggestions based on your dietary preferences and past choices.
- **User Authentication:** Securely log in and manage your profile.
- **Real-Time Updates:** Get live updates on shared meal plans and grocery lists.
- **Persistent Data Storage:** Save your meal plans, grocery lists, and preferences for future use.

## Technology Usage
- **HTML:** Structure the app with HTML elements to create pages for meal planning, recipe browsing, and user authentication.
- **CSS:** Style the application and use animations for interactive elements.
- **JavaScript:** Handle user interactions, such as updating meal plans and generating grocery lists. Use JavaScript to call and manage web service endpoints.
- **React:** Single page application with views componentized and reactive to user's actions.
- **Web Service:** Call external recipe APIs to fetch and display recipes. Provide a backend service for saving and retrieving user data, meal plans, and grocery lists.
- **Authentication:** Add user registration and login to manage personal meal plans and preferences. Store user credentials securely.
- **Database Data:** Store user profiles, meal plans, and grocery lists in a database. Display and manage this data within the app.
- **WebSocket:** Use WebSockets to provide real-time updates on collaborative meal plans and shared grocery lists.

## Rough Sketches

### Home Page
![Home Page Sketch](https://github.com/OliviaLeavitt/startup/blob/main/IMG_1501.JPG)

### Meal Planning Page
![Meal Planning Page Sketch](https://github.com/OliviaLeavitt/startup/blob/main/IMG_1503.JPG)

### Recipe Discovery Page
![Recipe Discovery Page Sketch](https://github.com/OliviaLeavitt/startup/blob/main/IMG_1502.JPG)

### Grocery List Page
![Grocery List Page Sketch](https://github.com/OliviaLeavitt/startup/blob/main/IMG_1504.JPG)

### User Authentication Page
![User Authentication Page Sketch](https://github.com/OliviaLeavitt/startup/blob/main/IMG_1505.JPG)




## MealMate - HTML Deliverable


### Home Page (`index.html`)

**Modifications:**
- I created the main home page layout with a hero section and an introduction to MealMate.
- A clickable MealMate logo was added to return users to the home page.
- Implemented a unique hero section with action buttons for quick navigation ("How it Works" and "Plan Now").
- Introduced the "Simplify Meal Planning" section with links to relevant pages.

**Features:**
- **Hero Section**: Displays a personalized welcome message and call-to-action buttons ("How it Works" and "Plan Now").
- **Introduction to Features**: Describes how MealMate works (Meal Planning, Grocery List, Personalization), with links to corresponding pages.
- **Unique Visuals**: Includes an image related to meal planning.

---

### Recipes Page (`recipes.html`)

**Modifications:**
- Created recipe search and filter options.
- Filtering options for Cuisine and Dietary Preferences were added.
- Designed a Recommended Recipes section displaying recipe cards with images and an "Add to my recipes" button.

**Features:**
- **Search and Filter Interface**: Users can search for recipes by name and filter by cuisine or dietary preference.
- **Recommended Recipes**: Displays a list of recipes, each with an image and an "Add to my recipes" button.

---

### Meal Planning Page (`mealplan.html`)

**Modifications:**
- Built the base HTML for a meal calendar, allowing users to plan meals by dragging and dropping recipes.
- Added base HTML for a recipe-sharing feature and a shopping list generation feature.
- Added the base HTML for a calendar navigation system.

**Features:**
- **My Recipes Section**: Displays saved recipes with share options and visual elements.
- **Weekly Meal Calendar**: Interactive calendar allowing users to assign meals to days.
- **Action Buttons**: Includes "Make Shopping List" and "Invite Friend" buttons to improve planning.
- **Date Navigation**: Arrows are used to navigate between weeks.

---

### Grocery List Page (`grocery.html`)

**Modifications:**
- Created an interactive grocery list feature with options to add items manually or from recipes.
- Added a placeholder for real-time updates that reflect changes to the grocery list.

**Features:**
- **Add New Item Section**: Input for manually adding items with quantities.
- **Add Recipe Items Section**: Allows users to automatically add ingredients from saved recipes.
- **Real-Time Updates**: Placeholder for WebSocket implementation, showing live updates of the grocery list.
- **Finalize Shopping List**: A button will be used to finalize the grocery shopping list.

---

### Login and Signup Pages (`login.html` and `signup.html`)

**Modifications:**
- Created dedicated login and signup pages for user authentication.

**Features:**
- **Login Page**: Includes input fields for email/username and password.
- **Signup Page**: Allows users to register with fields for username, email, password, and confirmation. Provides feedback upon successful registration.

---

### Data Handling

- **Application Data**: Structure for displaying recipes, meal plans, and grocery lists.
- **Authentication**: Created input fields for user login and signup, with plans to display user names post-login.
- **Database Data**: Recipes and meal plans will be dynamically fetched and displayed using data from a database.
- **WebSocket Data**: Planning to implement real-time updates for grocery list changes using WebSockets.

## CSS Startup
For this deliverable, I properly styled the application into its final appearance.
- Header, footer, and main content body: Consistent styling throughout for easy navigation.
- Navigation elements: Used hover effects for links to provide user feedback.
- Responsive to window resizing: Implemented Bootstrap's grid system for a good experience on all devices. I also built a responsive navigation menu that collapses into a hamburger icon on smaller screens
- Application elements: Ensured buttons and input fields have a uniform design for better usability.
- Application text content: Focused on clarity with consistent font sizes and colors for all text elements.
- Application images: All images are responsive and maintain proper ratios.
- Placeholder data: Styled the login form to display "Welcome, username!" and included a bell icon for WebSocket data.
- Recommended recipes section: I designed the recommended recipes section in my CSS to serve as a placeholder for future data from a third-party web service. When the application is set up to connect to an external recipe service, this section will automatically update to display the recommended recipes.

## React Startup
I created this deliverable using JavaScript and React, allowing the application to function fully for a user, with placeholders set up for future technologies.
- Bundling and transpiling – completed!
- Components – Implemented the main components: login, meal planner, and recipe search, with placeholder mocks for websocket and login.
- When you press enter or the login button it takes you to a authenticated page that is basically the home page.
- Database – Displayed user meal plans and saved recipes, currently stored and retrieved from local storage, with plans to replace this with a database data later.
- WebSocket Simulation - I used the setInterval function to add new notifications to the list every five seconds. In the future, this will be replaced with WebSocket messages to automatically receive updates from the server.
-Application Logic - The app allows users to add, edit, and remove items from the grocery list, updating the list dynamically based on user actions.
- Router - The app uses React Router to handle routing between different components such as Login, Signup, Grocery, Meal Plan, Recipe, and Recipe Instructions. The routing ensures that users are directed to the appropriate page based on their authentication state.
- Hooks - The app uses React's useState hook to keep track of and update things like the username and login status. This helps the app update the screen automatically when something changes.

## Startup Service

## Backend Service (Node.js/Express)
- **Status**: Done!
- Set up a Node.js/Express service to handle user authentication, recipe management
---

## Frontend Served via Express Static Middleware
- **Status**: Done!
- Served HTML, CSS, and JavaScript via Express static middleware, making the app available to the browser.

---

## Service Endpoints

### Authentication:
- `POST /api/auth/create` - Registers a new user.
- `POST /api/auth/login` - Logs in an existing user.
- `DELETE /api/auth/logout` - Logs out the user.

### Recipe Management:
- `GET /api/recipes` - Fetches recipes from Spoonacular API.
- `POST /api/addToMyRecipes` - Adds a recipe to the user's list.

## Third-Party API
- **Spoonacular API**: Fetched recipes using the Spoonacular API to search by cuisine, dietary preferences, etc.

---

## Frontend API Calls
- Used `fetch()` to call the backend for user authentication and recipe management.

## **DB/Login deliverable**

This deliverable demonstrates user authentication features and data storage functionality in **MealMate** using MongoDB Atlas.

---

### **Overview:**

For this deliverable, user accounts and saved recipes are associated with authenticated users. The saved recipes are stored securely in a MongoDB database.

---

### **Project Features and Status:**

- **MongoDB Atlas Database Setup:**  
  - Database created and connected to the application.

- **Data Storage:**  
  - Stores user data and saved recipes in MongoDB.

- **User Registration:**  
  - New users can create accounts. User credentials are stored securely in the database.

- **Existing User Management:**  
  - When an existing user logs in, their saved recipes are retrieved and displayed.

- **Data Association:**  
  - Saved recipes are linked to the authenticated user. Each user's saved recipes are stored separately.

- **Credential Storage:**  
  - User credentials and recipe data are securely stored in MongoDB.

- **Access Control:**  
  - Users must be logged in to save or view recipes.  
  - Restricted functionality on the frontend—saving or accessing recipes is not allowed without authentication.

---

### 🔐 **Security Notes:**
- Passwords are hashed before storage.  
- Users cannot access other users' data.

---

This implementation ensures a secure and personalized experience for users managing their meal plans and saved recipes.

## Chat Feature WebSocket Deliverable

For this deliverable, I made a real-time chat feature using WebSocket, allowing users to communicate with each other while planning their meals and sharing tips or recipes instantly.

### Features Implemented:

- **Backend listens for WebSocket connection** – ✅ Done!  
  The backend is set up to listen for incoming WebSocket connections, allowing users to send and receive messages in real-time.

- **Frontend establishes WebSocket connection** – ✅ Done!  
  The frontend successfully establishes a WebSocket connection, enabling communication between the user and the server.

- **Chat messages sent over WebSocket connection** – ✅ Done!  
  Users can send chat messages in real-time, and these messages are broadcast to all connected users.

- **Chat messages displayed in real-time** – ✅ Done!  
  Messages from users are displayed instantly in the chat interface, providing a seamless, interactive experience as users plan their meals and collaborate.

### Key Takeaways:
- This WebSocket chat feature makes it easy for users to communicate while working on meal plans, making collaboration smoother and more enjoyable.
- I’m really happy with how updates turned out. It's fun to see messages pop up instantly, making the meal planning experience feel even more connected.

### What's Next:
- I plan to enhance the chat by adding features like notifications for new messages or the ability to create different chat rooms for various meal planning topics, but for now, the real-time messaging is a success.







