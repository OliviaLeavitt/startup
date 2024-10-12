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
