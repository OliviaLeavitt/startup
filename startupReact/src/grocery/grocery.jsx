import React, { useState } from 'react';
import { AddItemForm } from './AddItemForm';
import { MealPlanSection } from './MealPlanSection';
import { GroceryList } from './GroceryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './grocery.css';

export function Grocery() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [groceryList, setGroceryList] = useState([
    { id: 1, name: 'Apples', quantity: '6 apples' },
    { id: 2, name: 'Milk', quantity: '1 gallon' },
    { id: 3, name: 'Eggs', quantity: '12 pack' }
  ]);

  const handleAddItem = () => {
    if (itemName && itemQuantity) {
      const newItem = {
        id: groceryList.length + 1,
        name: itemName,
        quantity: itemQuantity
      };
      setGroceryList([...groceryList, newItem]);
      setItemName('');
      setItemQuantity('');
    }
  };

  const handleRemoveItem = (id) => {
    setGroceryList(groceryList.filter(item => item.id !== id));
  };

  const handleEditItem = (id) => {
    const itemToEdit = groceryList.find(item => item.id === id);
    setItemName(itemToEdit.name);
    setItemQuantity(itemToEdit.quantity);
    handleRemoveItem(id); 
  };

  return (
    <div>
      <main className="container my-4">
        <section>
          <div className="hero mb-4 wrapper">
            <h2 className="mb-4">Grocery List</h2>
            <p className="mb-5">Create your grocery list or generate one from the recipes in your meal plan</p>
          </div>

          <AddItemForm 
            itemName={itemName}
            setItemName={setItemName}
            itemQuantity={itemQuantity}
            setItemQuantity={setItemQuantity}
            handleAddItem={handleAddItem}
          />

          <MealPlanSection />

          <GroceryList 
            groceryList={groceryList} 
            handleEditItem={handleEditItem} 
            handleRemoveItem={handleRemoveItem} 
          />
        </section>
      </main>
    </div>
  );
}
