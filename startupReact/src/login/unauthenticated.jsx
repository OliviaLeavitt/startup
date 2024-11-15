import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';
import './unauthenticated.css'; // Ensure this file contains your custom styles

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName || '');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginOrCreate(endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
      } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.msg}`);
      }
    } catch (error) {
      setDisplayError('⚠ Error: Something went wrong.');
    }
  }

  function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#FCFAEE' }}>
      <main className="card shadow-lg p-5">
        <h2 className="text-center mb-4">Welcome to the App</h2>

        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input
                id="username"
                className="form-control"
                type="email"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <input
                id="password"
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <Button
            type="button"
            className="btn btn-primary btn-block"
            onClick={loginUser}
            disabled={!userName || !password}
          >
            Login
          </Button>
          <Button
            type="button"
            className="btn btn-secondary btn-block mt-2"
            onClick={createUser}
            disabled={!userName || !password}
          >
            Create Account
          </Button>
        </form>

        <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
      </main>
    </div>
  );
}
