import React from 'react';
import './grocery.css';

export function GroceryList({ groceryList, handleRemoveItem }) {
  return (
    <div className="card wrapper">
      <div className="card-body">
        <h2>Items</h2>
        <div className="row font-weight-bold mb-2">
          <div className="col-4 col-sm-3">Name</div>
          <div className="col-4 col-sm-3">Quantity</div>
          <div className="col-4 col-sm-3 text-left">Actions</div> {/* Aligned to the left */}
        </div>
        <ul className="list-group">
          {groceryList.map(item => (
            <li key={item.id} className="list-group-item">
              <div className="row align-items-center">
                <div className="col-4 col-sm-3 d-flex align-items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>{item.name}</span>
                </div>
                <div className="col-4 col-sm-3">
                  <span>{item.quantity}</span>
                </div>
                <div className="col-4 col-sm-3 d-flex align-items-center">
                  <button 
                    className="btn btn-sm btn-danger remove-btn" 
                    onClick={() => handleRemoveItem(item.name, item.quantity)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
