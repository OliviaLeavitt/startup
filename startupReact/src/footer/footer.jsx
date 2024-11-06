import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

export function Footer() {
  return (
    <div>
      <footer className="text-white text-center py-4">
        <div className="container">
          <p>Created by Olivia Leavitt</p>
          <a href="https://github.com/OliviaLeavitt" className="text-light" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
      </footer>
    </div>
  );
}
