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
The application consists of the following HTML pages:

### 1. `index.html`
- **Main entry point** (home page) that provides an overview of MealMate and links to other sections.

### 2. `grocery.html`
- **Grocery List Management**: Users can add new items, select recipe ingredients to add to the grocery list, and finalize the shopping list.
- **Placeholders**:
  - Placeholder for integration of third-party services to fetch grocery items.
  - Placeholder for database content to show saved grocery items.
  - Placeholder for WebSocket functionality for real-time collaboration on grocery lists.

### 3. `login.html`
- **User Login Page**: Users can enter their credentials to access their accounts.
- **Placeholders**:
  - Placeholder for displaying the username once logged in.
  - Placeholder for future WebSocket notifications regarding user logins.

### 4. `signup.html`
- **User Sign-Up Page**: Allows new users to create an account by providing a username, email, and password.
- **Placeholders**:
  - Placeholder for backend verification of user registration.
  - Placeholder for displaying feedback messages upon successful or failed sign-up.

### 5. `mealplan.html` (if applicable)
- **Meal Planning Interface**: Allows users to plan their meals for the week.
- **Placeholders**:
  - Placeholder for integrating a calendar service.
  - Placeholder for displaying user-specific meal plans fetched from the database.

## Textual Content
The pages contain textual content guiding users through the features of the application

## Application Images
Images have been added to the application

## Modifications and Additions
- Created HTML structure for each component of the application (grocery list, login, sign-up, meal planning).
- Implemented navigation links between the HTML pages.
- Added user authentication forms for login and sign-up.
- Included placeholders for future integration of third-party services and database/WebSocket functionality.