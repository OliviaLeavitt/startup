import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Signup() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', padding: '50px 0' }}>
      <main className="card shadow-lg p-5" style={{ width: '600px', marginTop: '20px', marginBottom: '20px' }}>
        <h2 className="text-center mb-4">Sign Up</h2>

        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" className="form-control" placeholder="Create a username" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className="form-control" placeholder="Create a password" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirm your password" required />
          </div>

          <button type="submit" className="btn btn-custom btn-block">Sign Up</button>
        </form>

        <p className="text-center mt-3">Already have an account? <Link to="/login">Login</Link></p>
      </main>
    </div>
  );
}
