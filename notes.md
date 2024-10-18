# Project Title

## Table of Contents
- [Introduction](#introduction)
- [GitHub Usage](#github-usage)
- [AWS EC2 Instance Setup](#aws-ec2-instance-setup)
- [Amazon Web Services - Route 53](#amazon-web-services---route-53)
- [DNS Overview](#dns-overview)
- [HTML Structure](#html-structure)
- [HTML Input Elements](#html-input-elements)
- [Console Commands](#console-commands)
- [CSS Notes](#css-notes)
- [Useful Links](#useful-links)
- [JavaScript Arrays](#javaScript-arrays)
- [JavaScript Arrow Functions](#arrow-functions)

## Introduction
This project aims to provide a comprehensive overview and setup instructions for using AWS services, along with HTML and CSS fundamentals necessary for web development. The guide covers essential topics like EC2 instance setup, DNS configuration, HTML structure, input elements, and CSS styling.

---

## GitHub Usage

### Cloning a Repository
- **Clone a Repository:**
  - Use `git clone <repository-url>` to clone a repository into a subdirectory named after the repository.

### Making Changes
- **Steps to Make Changes:**
  1. Pull the latest changes: `git pull <file>`
  2. Make changes and stage files: `git add <file>`
  3. Commit changes: `git commit -m "commit message"`
  4. Push changes: `git push`

### Pull Updates
- Fetch updates with `git fetch`.
- Use `git pull` to integrate changes into your local environment.

### Handling Merge Conflicts
1. Open the conflicting file and resolve the conflicts.
2. Mark the file as resolved: `git add <filename>`.
3. Commit the resolution with a descriptive message.
4. Push the merged changes: `git push`.

---

## AWS EC2 Instance Setup

### Steps
1. **Create an EC2 Instance**
   - Start a new EC2 instance using AMI ID: `ami-0b009f6c56cdd83ed`
   - Select instance type: `t3.micro` (or `t2.micro` if free).
   - Set up security for SSH, HTTP, and HTTPS access.
   - Create a key pair and save it securely.

2. **Assign Elastic IP**
   - Get an Elastic IP to maintain a static public IP address.
   - Attach the Elastic IP to the instance.

3. **Testing the Web Server**
   - Open a browser and enter `http://<public-ip>` to check if the page loads.

4. **SSH into Your Server**
   - Use the command:
     ```bash
     ssh -i [key pair file] ubuntu@[public_ip]
     ```

---

## Amazon Web Services - Route 53

### Steps to Buy a Domain
1. Log in to AWS Console > Route 53.
2. Navigate to **Domains > Registered domains > Register Domain**.
3. Search for a domain, select one, and add to cart.
4. Fill out contact details and complete the order.
5. AWS will create a **hosted zone** for your domain.

### Create DNS Records
1. Get the public IP address of your EC2 instance.
2. Log in to AWS Console > Route 53 > **Hosted zones**.
3. Create an **A Record** for your root domain.
4. Create another **A Record** for any subdomain.

### Test DNS
- Navigate to your domain name in the browser (example: `http://yourdomain.com`).

### Common Issues
- **Domain not accessible:** Wait 10 minutes for DNS records to propagate.
- **Site doesn't display:** Check for HTTPS issues or if the browser added `www.`.
- **Email verification:** Ensure you've responded to the AWS verification email.

---

## DNS Overview

### Function
- Translates domain names into IP addresses.

### Components
- **A Records:** Maps a domain to an IPv4 address.
- **AAAA Records:** Maps a domain to an IPv6 address.
- **CNAME Records:** Aliases one domain to another.
- **MX Records:** Directs email to appropriate mail servers.
- **TTL:** Determines how long a DNS record is cached.

---

## HTML Structure

### Overview
The major purposes of HTML are to provide **structure** and **content** to web applications. Common structural elements include:

- `body`
- `header`
- `footer`
- `main`
- `section`
- `aside`
- `p`
- `table`
- `ol` / `ul`
- `div`
- `span`

### Example HTML Structure
```html
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
```

### HTML Input Elements
Key Points
Form: Container for input elements.
Input Types: Include text, password, email, tel, url, number, etc.
Select & Option: Creates dropdown menus.
Textarea: Multiline text input.
Label: Labels an input element.

Example Form
```
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">Some text</textarea>
  <button type="submit">Submit</button>
</form>
```
### Console Commands
Used for debugging JavaScript in the browser.

Common Commands
- console.log(value): Outputs a message.
- console.error(value): Displays an error message.
- console.warn(value): Displays a warning message.
- console.table(array): Displays data in a table format.
- console.group(): Starts a new group for better organization.

### CSS Notes
Selectors
- Element Selector: h1 { color: blue; }
- Class Selector: .classname { font-size: 16px; }
- ID Selector: #idname { background-color: yellow; }

Box Model
- Content: The actual content.
- Padding: Space between content and border.
  - ex padding: 1em 2em:
      1em: This value sets the top and bottom padding. The size 1em is relative to the font size of the element, meaning if         the font size is 16 pixels, the padding will be 16 pixels.
      2em: This value sets the left and right padding. Similarly, 2em is twice the font size of the element, so it will be          32 pixels if the font size is 16 pixels.
- Border: Around the padding.
- Margin: Space outside the border.

Flexbox
Enables responsive layouts.
Main Properties
- display: flex;: Activates Flexbox.
- flex-direction: Defines direction of items.
- justify-content: Aligns items horizontally.
- align-items: Aligns items vertically.

Grid
A powerful layout system.
Main Properties
- display: grid;: Activates grid layout.
- grid-template-columns: Defines columns and sizes.
- grid-gap: Adds space between items.

Example CSS Styles
```
* {
  font-family: sans-serif;
  color: white;
}

body {
  background-color: #111;
}

header, section {
  background-color: #444;
  padding: 1em;
  margin: 1em 0;
  border-radius: 5px;
}

h1 {
  color: hsl(200, 50%, 80%);
  border-bottom: solid white thin;
}

h2 {
  font-weight: 100;
}
```
# JavaScript Notes

## Arrow Functions

Arrow functions provide a concise syntax for writing function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and have several important features and behaviors that differentiate them from traditional functions.

### 1. Basic Syntax

Arrow functions replace the traditional `function` keyword with an arrow (`=>`). The basic syntax is as follows:

```javascript
const functionName = (parameters) => {
  // function body
};
```
#### If there’s only one parameter, parentheses can be omitted:
```
const square = x => x * x; // No parentheses
```
#### For no parameters, use empty parentheses:
```
const sayHello = () => console.log('Hello!'); // Empty parentheses
```
### 2. Implicit Return
Arrow functions automatically return the result of a single expression if there are no curly braces:
```
const add = (a, b) => a + b; // Implicit return
console.log(add(2, 3)); // OUTPUT: 5
```
If curly braces are used, the return keyword must be explicitly stated:
```
const addExplicit = (a, b) => {
  return a + b; // Explicit return
};
```
### 3. Lexical this Binding
One of the key features of arrow functions is their lexical scoping of the this keyword. Unlike traditional functions, arrow functions inherit this from the surrounding context. This is useful in situations like event handlers or methods in classes.
Example of Lexical this:
```
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` refers to the Person object
    console.log(this.age);
  }, 1000);
}

const p = new Person(); // After 1 second, will log 1, then 2, etc.
```
### 4. No arguments Object
Arrow functions do not have their own arguments object. To achieve similar functionality, the rest parameter syntax (...) can be used:
```
const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};
```
### 5. Restrictions
Arrow functions cannot be used as constructors.
They cannot be used with the new keyword.
They do not have super or this bindings.

## JavaScript Arrays
JavaScript array objects represent a sequence of other objects and primitives. You can reference the members of the array using a zero-based index.

Creating Arrays
You can create an array using the Array constructor or array literal notation:

```
const a = [1, 2, 3];
console.log(a[1]); // OUTPUT: 2
console.log(a.length); // OUTPUT: 3
```
### Array Methods
The Array object has several useful methods. Here are some of the key functions:
| Function  | Meaning                                         | Example                           |
|-----------|-------------------------------------------------|-----------------------------------|
| `push`    | Add an item to the end of the array            | `a.push(4)`                      |
| `pop`     | Remove an item from the end of the array       | `x = a.pop()`                    |
| `slice`   | Return a sub-array                              | `a.slice(1, -1)`                 |
| `sort`    | Sort an array in place                          | `a.sort((a, b) => b - a)`       |
| `values`  | Creates an iterator for use with a for-of loop | `for (i of a.values()) {...}`    |
| `find`    | Find the first item that satisfies a test function | `a.find(i => i < 2)`        |
| `forEach` | Run a function on each array item               | `a.forEach(console.log)`         |
| `reduce`  | Reduce array items to a single value           | `a.reduce((a, c) => a + c)`     |
| `map`     | Map an array to a new array                     | `a.map(i => i + i)`             |
| `filter`  | Filter items based on a condition               | `a.filter(i => i % 2)`          |
| `every`   | Test if all items match a condition             | `a.every(i => i < 3)`           |
| `some`    | Test if any items match a condition             | `a.some(i => i < 1)`            |

### Example Usage
```
const a = [1, 2, 3];

console.log(a.map((i) => i + i)); // OUTPUT: [2, 4, 6]
console.log(a.reduce((v1, v2) => v1 + v2)); // OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1)); // OUTPUT: [3, 2, 1]

a.push(4);
console.log(a.length); // OUTPUT: 4
```

## JSON
JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! JSON provides a simple, and yet effective way, to share and store data. By design, JSON is easily convertible to, and from, JavaScript objects. This makes it a very convenient data format when working with web technologies.

### Format
A JSON document contains one of the following data types:

| Type          | Description                                      |
|---------------|--------------------------------------------------|
| Object        | A collection of key/value pairs                  |
| Array         | An ordered list of values                        |
| String        | A sequence of characters                          |
| Number        | A numeric value (integer or floating point)      |
| Boolean       | `true` or `false`                               |
| Null          | An empty value                                   |

### Example
```javascript
const jsonData = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "traveling", "sports"],
};
```

Here's the complete README Markdown for JavaScript, incorporating all the sections, including arrays, JSON, exceptions, regular expressions, rest and spread, destructuring, and scope, this, and closures:

markdown
Copy code
# JavaScript Notes

## Arrays
### Common Methods
| Function | Meaning                                   | Example                  |
|----------|-------------------------------------------|--------------------------|
| push     | Add an item to the end of the array      | `a.push(4)`             |
| pop      | Remove an item from the end of the array | `x = a.pop()`           |
| slice    | Return a sub-array                        | `a.slice(1, -1)`        |
| sort     | Sort an array in place                    | `a.sort((a, b) => b - a)` |
| values   | Creates an iterator for use with a for-of loop | `for (i of a.values()) {...}` |
| find     | Find the first item that satisfies a test function | `a.find(i => i < 2)`    |
| forEach  | Run a function on each array item        | `a.forEach(console.log)` |
| reduce   | Reduce array items to a single value     | `a.reduce((a, c) => a + c)` |
| map      | Map an array to a new array              | `a.map(i => i + i)`     |
| filter   | Filter items based on a condition        | `a.filter(i => i % 2)`  |
| every    | Test if all items match a condition      | `a.every(i => i < 3)`   |
| some     | Test if any items match a condition      | `a.some(i => i < 1)`     |

## JSON
JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! JSON provides a simple, and yet effective way, to share and store data. By design, JSON is easily convertible to, and from, JavaScript objects. This makes it a very convenient data format when working with web technologies.

### Format
A JSON document contains one of the following data types:

| Type          | Description                                      |
|---------------|--------------------------------------------------|
| Object        | A collection of key/value pairs                  |
| Array         | An ordered list of values                        |
| String        | A sequence of characters                          |
| Number        | A numeric value (integer or floating point)      |
| Boolean       | `true` or `false`                               |
| Null          | An empty value                                   |

### Example
```javascript
const jsonData = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "traveling", "sports"],
};
```
## Exceptions
JavaScript supports exception handling using the try, catch, and throw syntax. An exception can be triggered whenever your code generates an exception using the throw keyword, or whenever an exception is generated by the JavaScript runtime, such as when an undefined variable is used.

To catch a thrown exception, you wrap a code block with the try keyword and follow it with a catch block. If an exception is thrown in the try block, all code after the throw is ignored, and the catch block is executed.

```
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```
Example: 
```
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
```
Fallbacks
The fallback pattern is commonly implemented using exception handling. You place the normal feature path in a try block and provide a fallback implementation in the catch block. For example:
```
function getScores() {
  try {
    const scores = scoringService.getScores();
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
```
### Regular Expressions
Regular expression support is built into JavaScript and can be used to find text in a string. You can create a regular expression using the class constructor or a regular expression literal.

Example:
```
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;

const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```
### Rest and Spread
Rest
Rest syntax allows a function to accept an unknown number of parameters. You can turn the last parameter of any function into a rest parameter by prefixing it with three periods.

Example:
```
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```
Spread
Spread syntax takes an iterable object and expands it into a function's parameters.

Example:
```
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```
### Destructuring
Destructuring allows unpacking values from arrays or properties from objects into distinct variables. This makes it easier to extract values and provides a more concise syntax.

Example for Arrays:
```
const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a); // OUTPUT: 1
console.log(b); // OUTPUT: 2
```
Example for Objects
```
const obj = { x: 1, y: 2 };
const { x, y } = obj;
console.log(x); // OUTPUT: 1
console.log(y); // OUTPUT: 2
```
### Scope
- Global Scope
Variables defined outside of any function have a global scope and can be accessed from anywhere in the code.

- Function Scope
Variables defined within a function are only accessible within that function.

- Block Scope
Variables defined using let or const within a block (e.g., within {}) are only accessible within that block.

Example:
```
let globalVar = 'I am global';

function testScope() {
  let functionVar = 'I am function scoped';
  if (true) {
    let blockVar = 'I am block scoped';
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible
    console.log(blockVar); // Accessible
  }
  // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
}

testScope();
```
### this Keyword
The this keyword refers to the context in which a function is executed. Its value depends on how the function is called.

Examples of this
- In a method, this refers to the object the method belongs to.
- In a function, this refers to the global object (or undefined in strict mode).
- In an event handler, this refers to the element that fired the event.

Example:
```
const obj = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

obj.greet(); // OUTPUT: Hello, my name is Alice
```
### Closures
A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. Closures are commonly used to create private variables.

Example:
```
function outer() {
  let privateVar = 'I am private';

  return function inner() {
    console.log(privateVar); // Accesses the private variable
  };
}

const closureFunction = outer();
closureFunction(); // OUTPUT: I am private
```
# JavaScript Concepts

This document provides a deeper understanding of three essential JavaScript concepts: **Local Storage**, **Promises**, and **Async/Await**. 

## Local Storage

The browser's `localStorage` API allows for the persistent storage and retrieval of data (such as scores, usernames, etc.) on a user's browser across sessions and HTML page renderings. For instance, you can store a user's name on one HTML page and retrieve it later on a different page. This data remains available even when the user revisits the website in the future.

Additionally, `localStorage` can serve as a cache for data when it cannot be obtained from the server. For example, you could store the last high scores obtained from a service and display them if the service is temporarily unavailable.

### How to Use Local Storage

Four main functions can be utilized with `localStorage`:

| Function               | Meaning                                               |
|------------------------|-------------------------------------------------------|
| `setItem(name, value)` | Sets a named item's value into local storage          |
| `getItem(name)`        | Retrieves a named item's value from local storage     |
| `removeItem(name)`     | Removes a named item from local storage               |
| `clear()`              | Clears all items in local storage                     |

A local storage value must be of type string, number, or boolean. To store a JavaScript object or array, you must first convert it to a JSON string using `JSON.stringify()` on insertion and parse it back to JavaScript with `JSON.parse()` upon retrieval.

### Example

Open your startup website and run the following code in the browser's developer tools console window:

```javascript
let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));
```
Output
```
Alice
{name: 'Bob', info: {favoriteClass: 'CS 260', likesCS: true}}
[1, 'One', true]
```
You can view the current values set for your application by opening the Application tab in the developer tools and selecting Storage > Local Storage followed by your domain name. The developer tools also allow you to add, view, update, and delete any local storage values.

### Promises
The rendering process of your HTML executes on a single thread, meaning you cannot run long processing tasks on the main rendering thread. To manage long-running or blocking tasks, JavaScript uses Promises, allowing the main rendering thread to continue while actions execute in the background.

Promise States
A promise can be in one of three states:

- Pending: Currently running asynchronously
- Fulfilled: Completed successfully
- Rejected: Failed to complete

Example
You can demonstrate asynchronous execution with the standard JavaScript setTimeout function, which creates a delay in executing code.

```
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}
```
Output
```
In promise 0
After promise 0
In promise 1
After promise 1
In promise 2
After promise 2
```
#### Resolving and Rejecting Promises
To set the state to fulfilled when a promise completes correctly or rejected when an error occurs, the promise executor function takes two functions as parameters, resolve and reject.

Coin Toss Example
```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});

console.log(coinToss); // OUTPUT: Promise {<pending>}
```
If you wait ten seconds and log the coinToss promise again, the state will either show as fulfilled or rejected.

#### Chaining Promises
You can handle the results of promises using .then(), .catch(), and .finally().
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));
Output
```
Coin toss result: tails
Toss completed
```
### JavaScript Async/Await
Async/Await syntax provides a more concise representation for handling promises. The await keyword wraps the execution of a promise, eliminating the need to chain functions.

Example of Coin Toss
```
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};

// Using async/await
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```
#### Important Restrictions
You can only call await at the top level of the JavaScript code or within a function defined with the async keyword.

#### Using Async with Fetch
Using async/await can simplify working with multiple promises. Here’s an example that retrieves data using the Fetch API.
```
const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse);
console.log('done');
```
output
```
{email: 'bud@mail.com', authenticated: true}
done
```

### extra
#### What does the link element do?
The <link> element is used to connect an external resource, typically a stylesheet, to the HTML document.
Example:
```
html
<link rel="stylesheet" href="styles.css">
```
#### What does a div tag do?
The <div> tag is a block-level container used to group content and apply CSS styles.
Example:
```
<div class="container">
    <h1>Welcome!</h1>
    <p>This is a paragraph inside a div.</p>
</div>
```
#### What is the difference between the #title and .grid selector?
#title targets an element with the specific ID of "title," while .grid targets all elements with the class "grid."
Example:
```
#title {
    color: blue; /* Targets the element with id="title" */
}
.grid {
    display: flex; /* Targets all elements with class="grid" */
}
```
#### What is the difference between padding and margin?
Padding is the space inside an element's border, while margin is the space outside the element's border.
Example:
```
.box {
    padding: 20px; /* Space inside the element */
    margin: 10px; /* Space outside the element */
    border: 1px solid black;
}
```
#### How will the images be displayed using flex?
Images will be arranged based on the flex properties defined in the CSS.
Example:
```

<div class="image-container">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
</div>
```
```
.image-container {
    display: flex;
    justify-content: center; /* Center images horizontally */
    align-items: center; /* Center images vertically */
}
```
#### What does the following padding CSS do?
Padding CSS properties control the space between an element's content and its border.
Example:
```
.padding-example {
    padding: 15px; /* Adds 15 pixels of padding on all sides */
}
```
#### What does the following code using arrow syntax function declaration do?
Arrow functions provide a more concise syntax for writing function expressions.
Example:
```
const add = (a, b) => a + b; // Returns the sum of a and b
console.log(add(2, 3)); // Output: 5
```
#### What does the following code using map with an array output?
The map() method creates a new array by transforming each element based on the provided function.
Example:
```
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
console.log(doubled); // Output: [2, 4, 6]
```
### What does the following code output using getElementByID and addEventListener?
This code allows an element to respond to a specific event (like a click).
Example:
```
<button id="myButton">Click Me!</button>
<script>
    document.getElementById('myButton').addEventListener('click', () => {
        console.log('Button clicked!'); // Output when button is clicked
    });
</script>
```
What does the following line of Javascript do using a # selector?
A line using a # selector selects an element by its ID for manipulation.
Example:
```
const titleElement = document.querySelector('#title'); // Selects element with id="title"
titleElement.style.color = 'red'; // Changes the text color to red
```
### Which of the following are true? (mark all that are true about the DOM)

The DOM represents the structure of the document as a tree of objects.
You can manipulate the DOM using JavaScript.
The DOM is language-independent.
Examples:
```
const newElement = document.createElement('div'); // Manipulating the DOM by creating a new element
document.body.appendChild(newElement); // Adding the new element to the document body
```
#### By default, the HTML span element has a default CSS display property value of:
inline
Example:
```
<span>This text is inline.</span>
```
#### How would you use CSS to change all the div elements to have a background color of red?
Example:
```
div {
    background-color: red; /* Changes the background color of all divs to red */
}
```
#### How would you display an image with a hyperlink in HTML?
Example:
```
<a href="https://example.com">
    <img src="image.jpg" alt="Example Image">
</a>
```
### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Ordering: Content, Padding, Border, Margin
Example:
```
.box {
    margin: 10px; /* Outer margin */
    border: 2px solid black; /* Border */
    padding: 15px; /* Inner padding */
    content: "This is the content"; /* Actual content */
}
```
### Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
Example:
```
<p>This is a double trouble.</p>
p {
    color: black; /* Default color */
}
p::after {
    content: "trouble"; /* Targets "trouble" specifically */
    color: green; /* Changes color to green */
}
```
#### What will the following code output when executed using a for loop and console.log?
Example:
```
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}
``
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
Example:
```
document.getElementById('byu').style.color = 'green'; // Changes text color to green
```
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
Examples:
```
<p>This is a paragraph.</p> <!-- Paragraph -->
<ol><li>First item</li></ol> <!-- Ordered List -->
<ul><li>First item</li></ul> <!-- Unordered List -->
<h2>This is a second-level heading.</h2> <!-- Second Level Heading -->
<h1>This is a first-level heading.</h1> <!-- First Level Heading -->
<h3>This is a third-level heading.</h3> <!-- Third Level Heading -->
```
### How do you declare the document type to be HTML?
Example:
```
<!DOCTYPE html> <!-- Declares the document type -->
```

#### What is valid javascript syntax for if, else, for, while, switch statements?
Examples:
```
// If-Else Statement
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}

// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Switch Statement
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
What is the correct syntax for creating a javascript object?
Example:
javascript
Copy code
const person = {
    name: 'John Doe',
    age: 30,
    greet: function() {
        console.log('Hello!');
    }
};
```
#### Is it possible to add new properties to javascript objects?
Example: Yes, you can add new properties to JavaScript objects.
```
person.email = 'john@example.com'; // Adds a new property 'email'
```
#### If you want to include JavaScript on an HTML page, which tag do you use?
Example:
```
<script src="script.js"></script> <!-- Links to an external JavaScript file -->
```
#### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Example:
```
<p><span id="animal">animal</span> fish</p>

document.getElementById('animal').innerText = 'crow'; // Changes 'animal' to 'crow'

```
#### Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of JavaScript.
Example:
```
{
    "name": "John",
    "age": 30,
    "isStudent": false
}
```
#### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
chmod: Changes the permissions of a file or directory.
pwd: Prints the current working directory.
cd: Changes the current directory.
ls: Lists files and directories in the current directory.
vim: Opens the Vim text editor.
nano: Opens the Nano text editor.
mkdir: Creates a new directory.
mv: Moves or renames files and directories.
rm: Removes files or directories.
man: Displays the manual for a command.
ssh: Connects to a remote machine using SSH.
ps: Displays information about running processes.
wget: Downloads files from the web.
sudo: Executes a command with superuser privileges.
#### Which of the following console command creates a remote shell session?
Example:
ssh user@hostname creates a remote shell session on the specified host.

#### Which of the following is true when the -la parameter is specified for the ls console command?
It lists all files and directories, including hidden ones (those starting with a dot), and shows detailed information (permissions, owner, size, and modification date).

#### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?

Top Level Domain (TLD): click
Subdomain: banana.fruit.bozo (or just banana in this context)
Root Domain: bozo.click

What is a root domain?
Simply put, a root domain is the main part of your website’s domain name. That’s the part of your website’s URL that comes after the “www” and includes the domain name’s extension, like “.com”, “.org”, “.net,” etc.

Subdomains:
On the other hand, a subdomain is like a subsection or a smaller part of the main website. A subdomain always belongs to a root domain. For example, careers.siteground.com is a subdomain of the base domain siteground.com.

top level domain:
top-level domain (TLD) is the suffix that follows the domain name, such as .com, .org, .edu, .gov, and so on. TLDs are also referred to as “domain extensions”. It is the last part of the website’s address and comes after the root domain.

#### Is a web certificate necessary to use HTTPS?
Yes, a web certificate (SSL/TLS certificate) is necessary to use HTTPS.

#### Can a DNS A record can point to an IP address or another A record?
A DNS A record points to an IP address, not another A record.

#### Port 443, 80, 22 is reserved for which protocol?

Port 443: HTTPS (Hypertext Transfer Protocol Secure)
Port 80: HTTP (Hypertext Transfer Protocol)
Port 22: SSH (Secure Shell)
What will the following code using Promises output when executed?
Example:
javascript
Copy code
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
});

promise.then(result => console.log(result)); // Output: "Success!" after 1 second


## Useful Links
- [GitHub Documentation](https://docs.github.com/en/github)
- [Markdown Guide](https://www.markdownguide.org/)
- [W3Schools](https://www.w3schools.com/html/)

