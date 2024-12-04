import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function MealPlan() {
  const [date, setDate] = useState(new Date());
  const [meal, setMeal] = useState('');
  const [meals, setMeals] = useState({});

  useEffect(() => {
    const fetchMeals = async () => {
      const dateString = date.toISOString().split('T')[0];
      const response = await fetch(`http://localhost:5000/getMeals/${dateString}`);
      const data = await response.json();
      const mealsMap = data.reduce((acc, curr) => {
        acc[curr.date] = curr.meal;
        return acc;
      }, {});
      setMeals(mealsMap);
    };
    fetchMeals();
  }, [date]); 

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleMealSave = async () => {
    if (!meal) return;

    const dateString = date.toISOString().split('T')[0];
    const response = await fetch('api/saveMeal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: dateString,
        meal: meal,
      }),
    });

    if (response.ok) {
      setMeals({
        ...meals,
        [dateString]: meal,
      });
      setMeal('');
    }
  };

  return (
    <div>
      <h1>Meal Planner</h1>
      <Calendar onChange={handleDateChange} value={date} />
      <div>
        <h2>Save a Meal</h2>
        <input
          type="text"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          placeholder="Enter meal"
        />
        <button onClick={handleMealSave}>Save Meal</button>
      </div>
      <div>
        <h3>Meals for {date.toDateString()}</h3>
        {meals[date.toISOString().split('T')[0]] ? (
          <p>{meals[date.toISOString().split('T')[0]]}</p>
        ) : (
          <p>No meal saved for today.</p>
        )}
      </div>
    </div>
  );
}
