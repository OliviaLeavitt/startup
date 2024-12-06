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
        setGroceryList(data);  // Update the grocery list with the fetched data 
      } catch (error) { 
        console.error('Error fetching groceries:', error); 
      } 
    }; 

    fetchGroceries();  // Call the function to fetch groceries when the component mounts 
  }, []);  // Empty dependency array means this runs only once after initial render 

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
        // Update the UI with the newly saved grocery item
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

  const handleRemoveItem = (id) => {
    setGroceryList(groceryList.filter(item => item.id !== id));
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


          <GroceryList 
            groceryList={groceryList} 
            handleRemoveItem={handleRemoveItem} 
          />
        </section>
      </main>
    </div>
  );
}
