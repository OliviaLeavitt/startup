import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './grocery.css';

export function Grocery() {
  return (
    <div>
      <main className="container my-4">
        <section>
          {/* Page Hero */}
          <div className="hero mb-4 wrapper">
            <h2 className="mb-4">Grocery List</h2>
            <p className="mb-5">Create your grocery list or generate one from the recipes in your meal plan</p>
          </div>

          {/* Add Item Section */}
          <div className="card mb-4 wrapper">
            <div className="card-body">
              <h2 className="add-item-header">Add Item</h2>
              <div className="form-group">
                <label htmlFor="itemName">Item Name:</label>
                <input type="text" className="form-control" id="itemName" placeholder="Enter item name" />
              </div>
              <div className="form-group">
                <label htmlFor="itemQuantity">Item Quantity:</label>
                <input type="text" className="form-control" id="itemQuantity" placeholder="Enter quantity" />
              </div>
              <button className="btn btn-primary" id="addItemBtn">Add Item</button>
            </div>
          </div>

          {/* Add Items from Meal Plan Recipes Section */}
          <div className="card mb-4 wrapper">
            <div className="card-body">
              <h2>Add Items from Meal Plan Recipes</h2>
              <div className="form-group">
                <label htmlFor="recipeSelect">Select a Recipe:</label>
                <select className="form-control" id="recipeSelect">
                  <option value="">--Choose a Recipe--</option>
                  <option value="recipe1">Recipe 1</option>
                  <option value="recipe2">Recipe 2</option>
                  <option value="recipe3">Recipe 3</option>
                </select>
              </div>
              <button className="btn btn-primary" id="addMealPlanItemsBtn">Add All Items from Selected Recipe</button>
            </div>
          </div>

          {/* Grocery List Section */}
          <div className="card wrapper">
            <div className="card-body">
              <h2>Items</h2>
              <div className="row font-weight-bold mb-2">
                <div className="col">Name</div>
                <div className="col">Quantity</div>
                <div className="col">Actions</div>
              </div>
              <ul id="groceryList" className="list-group">
                {/* Example Item 1 */}
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      <input type="checkbox" className="mr-2" />
                      <span>Apples</span>
                    </div>
                    <div className="col">
                      <span>6 apples</span>
                    </div>
                    <div className="col">
                      <button className="btn btn-sm btn-success">Edit</button>
                      <button className="btn btn-sm btn-danger">Remove</button>
                    </div>
                  </div>
                </li>
                {/* Example Item 2 */}
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      <input type="checkbox" className="mr-2" />
                      <span>Milk</span>
                    </div>
                    <div className="col">
                      <span>1 gallon</span>
                    </div>
                    <div className="col">
                      <button className="btn btn-sm btn-success">Edit</button>
                      <button className="btn btn-sm btn-danger">Remove</button>
                    </div>
                  </div>
                </li>
                {/* Example Item 3 */}
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      <input type="checkbox" className="mr-2" />
                      <span>Eggs</span>
                    </div>
                    <div className="col">
                      <span>12 pack</span>
                    </div>
                    <div className="col">
                      <button className="btn btn-sm btn-success">Edit</button>
                      <button className="btn btn-sm btn-danger">Remove</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}