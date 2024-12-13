# CS 260 Final Exam Questions 



## What is the default port for HTTP/HTTPS/SSH?  

- HTTP: Port 80 

- HTTPS: Port 443 

- SSH: Port 22 

## What does an HTTP status code in the range of 300/400/500 indicate? 

- 300 Range: Redirection (e.g., resource has moved to a new URL) 

- 400 Range: Client errors (e.g., 404 Not Found, 401 Unauthorized) 

- 500 Range: Server errors (e.g., 500 Internal Server Error) 

## What does the HTTP header content-type allow you to do? 

The Content-Type HTTP header specifies the media type of the resource in a request or response, allowing the recipient to handle the data properly. 

### Common Examples: 

JSON: Content-Type: application/json 

HTML: Content-Type: text/html 

Form Data: Content-Type: application/x-www-form-urlencoded 

 

## What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies 

- Secure Cookie: Sent only over HTTPS to prevent interception. 

- Http-Only Cookie: Inaccessible to JavaScript to prevent XSS attacks. 

- Same-Site Cookie: Limits cross-site requests to prevent CSRF attacks (Strict or Lax mode). 

 

## Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document? 

## Given the following Express service code: What does the following front end JavaScript that performs a fetch return? 

## Given the following MongoDB query, select all of the matching documents {name:Mark} 

db.users.find({ name: "Mark" }); 

## How should user passwords be stored? 

Store using a secure hash with a strong algorithm like bcrypt or Argon2. Never store passwords in plaintext. 

## Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console? 

// Backend code using 'ws' WebSocket library const WebSocket = require('ws'); const wss = new WebSocket.Server({ port: 8080 }); wss.on('connection', ws => { console.log('New client connected'); // Send a message to the client ws.send('Hello, client!'); // Receive messages from the client ws.on('message', message => { console.log(`Received: ${message}`); }); }); 

Message will be Message from server: Hello, client! 

 

## What is the websocket protocol intended to provide? 

WebSocket allows for instant, two-way communication between the client and server over a single connection. It’s fast and efficient, making it perfect for apps that need real-time updates, like chat or live tracking. 

 

## What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM 

- JSX: JavaScript XML 

- JS: JavaScript 

- AWS: Amazon Web Services 

- NPM: Node Package Manager 

- NVM: Node Version Manager 

 

## Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters. 

## Given a set of React components that include each other, what will be generated 

## What does a React component with React.useState do? 

is a hook that lets functional components hold and update state. It returns an array with the current state value and a function to update it. When the state changes, React re-renders the component. 

## What are React Hooks used for? 

React Hooks are used to add state and lifecycle features to functional components. They allow managing state, handling side effects, and accessing context, making functional components more powerful. Examples include useState, useEffect, and useContext. 

## What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks 

- useState: Manage state. 

- useContext: Access context values. 

- useRef: Persist values across renders. 

- useEffect: Handle side effects. 

- useMemo / useCallback: Optimize performance by memoizing values and functions. 

## Given React Router code, select statements that are true. 

## What does the package.json file do? 

The package.json file in a Node.js project holds metadata about the project, including its name, version, dependencies, and scripts. It manages the project's dependencies, defines custom commands (like npm start), and specifies the main entry point. 

## What does the fetch function do? 

The fetch function is used to make network requests (such as HTTP requests) in JavaScript. It returns a Promise that resolves to the response of the request, allowing you to handle the data asynchronously. 

## What does node.js do? 

Node.js is a JavaScript runtime that lets you run JavaScript on the server. It’s fast, event-driven, and non-blocking, making it ideal for building scalable web servers, APIs, and real-time applications. 

## What does pm2 do? 

PM2 is a process manager for Node.js that keeps apps running, automatically restarts them if they crash, and helps monitor performance and logs. It also supports running apps in clusters for better scalability. 

## What does Vite do? 

Vite is a fast build tool for web development that provides quick updates during development and optimizes code for production
