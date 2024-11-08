import React from 'react';

export function AddItemForm({ itemName, setItemName, itemQuantity, setItemQuantity, handleAddItem }) {
  return (
    <div className="card mb-4 wrapper">
      <div className="card-body">
        <h2 className="add-item-header">Add Item</h2>
        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            placeholder="Enter item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemQuantity">Item Quantity:</label>
          <input
            type="text"
            className="form-control"
            id="itemQuantity"
            placeholder="Enter quantity"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}
