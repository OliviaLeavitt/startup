import React from 'react';
import './grocery.css';

export function GroceryList({ groceryList, handleRemoveItem }) {
  return (
    <div className="card wrapper">
      <div className="card-body">
        <h2>Items</h2>
        <div className="row font-weight-bold mb-2">
          <div className="col">Name</div>
          <div className="col">Quantity</div>
          <div className="col">Actions</div>
        </div>
        <ul className="list-group">
          {groceryList.map(item => (
            <li key={item.id} className="list-group-item">
              <div className="row align-items-center">
                <div className="col">
                  <input type="checkbox" className="mr-2" />
                  <span>{item.name}</span>
                </div>
                <div className="col">
                  <span>{item.quantity}</span>
                </div>
                <div className="col">

                  <button className="btn btn-sm btn-danger" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
