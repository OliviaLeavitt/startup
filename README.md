# MealMate

## Elevator Pitch
Introducing MealMate, a go-to solution for smart meal planning and organization. This app simplifies weekly meal prep by helping you plan meals, generate grocery lists, and discover recipes tailored to your preferences.  Its real-time collaboration features make it easy to plan meals with family, friends, roommates, and others. With MealMate you can transform your meal plan into a more efficient and enjoyable experience.  

## Key Features
- **Weekly Meal Planning:** Create and manage weekly meal plans with ease.
- **Grocery List Integration:** Automatically generate and manage grocery lists based on your meal plans.
- **Recipe Discovery:** Explore recipes from various cuisines.
- **Collaborative Planning:** Share and plan meals with family and friends in real-time.
- **Personalized Recommendations:** Receive meal suggestions based on your dietary preferences and past choices.
- **User Authentication:** Securely login and manage your profile.
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



## HTML Pages

### Home Page (`index.html`)

#### Modifications:
- I created the main home page layout with a hero section and an introduction to MealMate.
- A clickable MealMate logo was added to return users to the home page.
- Incorporated a unique **hero section** with action buttons for quick navigation to key features (e.g., "How it Works" and "Plan Now").
- Added the **"Simplify Meal Planning"** section, showcasing the app's core features with links to relevant pages.

#### Features:
- **Hero Section**: Contains a personalized welcome message and call-to-action buttons ("How it Works" and "Plan Now").
- **Introduction to Features**: A section describing MealMate's core functionality (Meal Planning, Grocery List, and Personalization), each with a "Learn more" link to the corresponding pages.
- **Unique Visuals**: Features a large banner image related to meal planning, which is absent from other pages.


### Recipes Page (`recipes.html`)

#### Modifications:
- Created a recipe search and filter interface.
- Added filtering options for **Cuisine** and **Dietary Preferences** for recipe discovery.
- Designed a **Recommended Recipes** section, displaying recipe cards with images and an "Add to my recipes" button.

#### Features:
- **Search Section**: Allows users to search for recipes by name with a text input field.
- **Filter Options**: Includes drop-down menus for filtering recipes by cuisine type (e.g., Italian, Mexican) and dietary preferences (e.g., Vegan, Gluten-Free).
- **Recommended Recipes**: Displays a set of recipes in a card format, with each card featuring an image, title, and an "Add to my recipes" button for saving.


### Meal Planning Page (`mealplan.html`)

#### Modifications:
- Created the base HTML for a **meal calendar** where users can plan meals by dragging and dropping recipes for each day.
- Added the base HTML for a **recipe sharing feature** and the ability to generate a shopping list directly from the meal plan.
- Added the base HTML for a **calendar navigation system** with date range and arrow buttons for switching between weeks.

#### Features:
- **My Recipes Section**: Displays saved recipes with options to share them, including images for visual appeal.
- **Weekly Meal Calendar**: Interactive calendar that allows users to assign meals to specific days by dropping recipes into day slots.
- **Action Buttons**: Features "Make Shopping List" and "Invite Friend" buttons to simplify collaborative meal planning and grocery shopping.
- **Date Navigation**: Includes left/right arrows to navigate through different weeks and view meal plans for the selected range.


### Grocery List Page (`grocery.html`)

#### Modifications:
- Added base HTML for a **interactive grocery list** feature allowing users to add items manually or from selected recipes.
- Added base HTML for a **real-time updates section** that will reflect changes in the grocery list dynamically.
- Added base HTML to **finalize the shopping list** for seamless grocery shopping.

#### Features:
- **Add New Item Section**: Users can input item names and quantities to create a personalized grocery list.
- **Add Recipe Items Section**: Allows users to select from saved recipes to automatically add necessary ingredients to the grocery list.
- **Item List**: Displays added items with checkboxes for marking off items as purchased and options to remove items from the list.
- **Real-Time Updates**: Placeholder for live updates on the grocery list, showing users instant changes as items are added or removed (planning to incorporate WebSocket).
- **Finalize Shopping List Button**: A dedicated button to prepare the final version of the grocery list for shopping, ensuring users have everything they need.

### Login and Signup Pages (`login.html` and `signup.html`)

#### Modifications:
- Created dedicated **Login** and **Signup** pages to manage user authentication.

#### Features:
##### Login Page (`login.html`):
- **User Credentials Input**: Fields for users to enter their email/username and password.

##### Signup Page (`signup.html`):
- **User Registration Form**: Fields for entering personal details, including username, email, password, and confirmation password.
- **Successful Registration Confirmation**: Users will receive a message or redirection upon successful signup, reassuring them that their account has been created.
