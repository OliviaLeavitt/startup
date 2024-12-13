

1.  What is the default port for HTTP/HTTPS/SSH?  
    
2.  **HTTP**: Port **80** 
    
3.  **HTTPS**: Port **443** 
    
4.  **SSH**: Port **22** 
    
5.  What does an HTTP status code in the range of 300/400/500 indicate? 
    
6.  **300 Range**: Redirection (e.g., resource has moved to a new URL) 
    
7.  **400 Range**: Client errors (e.g., 404 Not Found, 401 Unauthorized) 
    
8.  **500 Range**: Server errors (e.g., 500 Internal Server Error) 
    
9.  What does the HTTP header content-type allow you to do? 
    
10.  The **Content-Type** HTTP header specifies the media type of the resource in a request or response, allowing the recipient to handle the data properly. 
    

**Common Examples:** 

1.  **JSON**: Content-Type: application/json 
    
2.  **HTML**: Content-Type: text/html 
    
3.  **Form Data**: Content-Type: application/x-www-form-urlencoded 
    

1.  What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? [https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) 
    

*   **Secure Cookie**: Sent only over HTTPS to prevent interception. 
    
*   **Http-Only Cookie**: Inaccessible to JavaScript to prevent XSS attacks. 
    
*   **Same-Site Cookie**: Limits cross-site requests to prevent CSRF attacks (Strict or Lax mode). 
    

1.  Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document? 
    
2.  Given the following Express service code: What does the following front end JavaScript that performs a fetch return? 
    
3.  Given the following MongoDB query, select all of the matching documents {name:Mark} 
    
4.  db.users.find({ name: "Mark" }); 
    
5.  How should user passwords be stored? 
    
6.  Store using a **secure hash** with a strong algorithm like bcrypt or Argon2. Never store passwords in plaintext. 
    
7.  Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console? 
    
8.  // Backend code using 'ws' WebSocket library const WebSocket = require('ws'); const wss = new WebSocket.Server({ port: 8080 }); wss.on('connection', ws => { console.log('New client connected'); // Send a message to the client ws.send('Hello, client!'); // Receive messages from the client ws.on('message', message => { console.log(\`Received: ${message}\`); }); }); 
    
9.  Message will be Message from server: Hello, client! 
    

1.  What is the websocket protocol intended to provide? 
    
2.  WebSocket allows for **instant, two-way communication** between the client and server over a single connection. It’s fast and efficient, making it perfect for apps that need real-time updates, like chat or live tracking. 
    

1.  What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM 
    
2.  **JSX**: JavaScript XML 
    
3.  **JS**: JavaScript 
    
4.  **AWS**: Amazon Web Services 
    
5.  **NPM**: Node Package Manager 
    
6.  **NVM**: Node Version Manager 
    

1.  Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters. 
    
2.  Given a set of React components that include each other, what will be generated 
    
3.  What does a React component with React.useState do? 
    
4.  is a hook that lets functional components hold and update state. It returns an array with the current state value and a function to update it. When the state changes, React re-renders the component. 
    
5.  What are React Hooks used for? 
    
6.  React Hooks are used to add **state** and **lifecycle** features to **functional components**. They allow managing state, handling side effects, and accessing context, making functional components more powerful. Examples include useState, useEffect, and useContext. 
    
7.  What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? [https://react.dev/reference/react/hooks](https://react.dev/reference/react/hooks) 
    
8.  **useState**: Manage state. 
    
9.  **useContext**: Access context values. 
    
10.  **useRef**: Persist values across renders. 
    
11.  **useEffect**: Handle side effects. 
    
12.  **useMemo / useCallback**: Optimize performance by memoizing values and functions. 
    
13.  Given React Router code, select statements that are true. 
    
14.  What does the package.json file do? 
    
15.  The package.json file in a Node.js project holds metadata about the project, including its name, version, dependencies, and scripts. It manages the project's dependencies, defines custom commands (like npm start), and specifies the main entry point. 
    
16.  What does the fetch function do? 
    
17.  The fetch function is used to make **network requests** (such as HTTP requests) in JavaScript. It returns a **Promise** that resolves to the **response** of the request, allowing you to handle the data asynchronously. 
    
18.  What does node.js do? 
    
19.  Node.js is a JavaScript runtime that lets you run JavaScript on the server. It’s fast, event-driven, and non-blocking, making it ideal for building scalable web servers, APIs, and real-time applications. 
    
20.  What does pm2 do? 
    
21.  **PM2** is a process manager for Node.js that keeps apps running, automatically restarts them if they crash, and helps monitor performance and logs. It also supports running apps in clusters for better scalability. 
    
22.  What does Vite do? 
    
23.  **Vite** is a fast build tool for web development that provides quick updates during development and optimizes code for production
