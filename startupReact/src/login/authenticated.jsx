import React from 'react';
import { NavLink } from 'react-router-dom';
import './authenticated.css';

export function Authenticated(props) {
  const [imageUrl, setImageUrl] = React.useState('');

  React.useEffect(() => {
    setImageUrl('/family-meal-image.png'); 
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById('simplify-meal-planning');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-white text-center d-flex align-items-center" style={{ height: '60vh', padding: '2rem 0' }}>
        <div className="container">
          <div className="hero-text">
            <h1 className="display-4">Welcome, {props.userName}!</h1>
            <p className="lead">Plan, shop, and enjoy delicious meals with MealMate.</p>
            <div className="hero-buttons">
              <button onClick={scrollToSection} className="btn btn-lg mr-3 how-it-works-btn">How it Works</button>
              <NavLink to="/mealplan" className="btn btn-secondary btn-lg plan-now-btn">Plan Now</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section id="simplify-meal-planning" className="how-it-works-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Simplify Meal Planning</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="meal-plan-image.png" className="card-img-top" alt="Effortless Meal Planning" />
                <div className="card-body">
                  <h3>Effortless Meal Planning</h3>
                  <p>Easily manage your meals by adding recipes to your meal calendar.</p>
                  <NavLink to="/mealplan" className="btn btn-custom">Learn more →</NavLink>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="grocery-image.jpg" className="card-img-top" alt="Seamless Grocery Shopping" />
                <div className="card-body">
                  <h3>Seamless Grocery Shopping</h3>
                  <p>MealMate automatically creates a shopping list based on your meal plan.</p>
                  <NavLink to="/grocery" className="btn btn-custom">Learn more →</NavLink>
                </div>
              </div>
            </div>

            {/* Card 3 - Displaying the image from public folder */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={imageUrl} className="card-img-top" alt="Personalization and Collaboration" />
                <div className="card-body">
                  <h3>Personalization and Collaboration</h3>
                  <p>Share your meals with family and receive personalized meal recommendations.</p>
                  <NavLink to="/recipe" className="btn btn-custom">Learn more →</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
