import React, { useState, useEffect } from 'react';
import { AddItemForm } from './AddItemForm';
import { GroceryList } from './GroceryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './grocery.css';

export function Grocery() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const response = await fetch('/api/getGroceries');
        const data = await response.json();
        console.log('Fetched groceries:', data);
        setGroceryList(data);
      } catch (error) {
        console.error('Error fetching groceries:', error);
      }
    };

    fetchGroceries();
  }, []);

  const handleGrocerySave = async (groceryName, groceryQuantity) => {
    if (!groceryName || !groceryQuantity) {
      console.log('Grocery item or quantity missing. Exiting save operation.');
      return;
    }

    console.log(`Saving grocery item: ${groceryName}, Quantity: ${groceryQuantity}`);

    try {
      const response = await fetch('/api/saveGroceryItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: groceryName, quantity: groceryQuantity }),
      });

      if (response.ok) {
        console.log('Grocery item saved successfully');
        setGroceryList([...groceryList, { name: groceryName, quantity: groceryQuantity }]);
      } else {
        console.error('Failed to save grocery item');
      }
    } catch (error) {
      console.error('Error saving grocery item:', error);
    }
  };

  const handleAddItem = () => {
    if (itemName && itemQuantity) {
      handleGrocerySave(itemName, itemQuantity);
      setItemName('');
      setItemQuantity('');
    }
  };

  const handleRemoveItem = async (groceryName, groceryQuantity) => {
    if (!groceryName || !groceryQuantity) {
      console.log('Grocery item or quantity missing. Exiting remove operation.');
      return;
    }

    console.log(`Removing grocery item: ${groceryName}, Quantity: ${groceryQuantity}`);

    try {
      const response = await fetch('/api/removeGroceryItem', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: groceryName, quantity: groceryQuantity }),
      });

      if (response.ok) {
        console.log('Grocery item removed successfully');
        setGroceryList(groceryList.filter(item => item.name !== groceryName || item.quantity !== groceryQuantity));
      } else {
        console.error('Failed to remove grocery item');
      }
    } catch (error) {
      console.error('Error removing grocery item:', error);
    }
  };

  return (
    <div className="container my-4">
      <section>
        <div className="hero mb-4 shadow-sm p-4 bg-white">
          <h2 className="text-center mb-4">Grocery List</h2>
        </div>

        <AddItemForm
          itemName={itemName}
          setItemName={setItemName}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
          handleAddItem={handleAddItem}
        />

        <GroceryList groceryList={groceryList} handleRemoveItem={handleRemoveItem} />
      </section>
    </div>
  );
}
