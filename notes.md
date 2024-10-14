# Notes

## GitHub

### Cloning a Repository
- **Clone a Repository:**
  - When you clone a repository it is placed in a subdirectory named with the name of the repository. So make sure you are in the directory where you keep all of your source repositories before you run the command.
  - Use `git clone <repository-url>` to clone a repository.

### Making Changes
- **Make Changes:**
  **This is the pattern that you want to make a reflexive part of your development process.**
  1. Pull the repository's latest changes from GitHub `git pull <file>`
  2. change files and use `git add <file>` to stage changes.
  3. Commit changes with `git commit -m "commit message"`.
  - Push changes using `git push`.
- **Pull Updates:**
  - Fetch updates with `git fetch`.
  - Use `git pull` to get the latest changes from the repository and add them to a local enviroment (vscode)

### Handling Merge Conflicts
  1. Open the problem file and resolve the conflicts by editing the problem line/lines.
  2. Mark the file as resolved by adding it to the staging area with git add <filename>.
  3. Commit the resolution with a message explaining the merge.
  4. Push the merged changes back to GitHub with git push.

## Useful Links
- [GitHub Documentation](https://docs.github.com/en/github)
- [Markdown Guide](https://www.markdownguide.org/)

## AWS EC2 Instance Setup

### Steps

1. **Create AWS EC2 Instance**
   - Start a new EC2 instance using the following AMI ID: ami-0b009f6c56cdd83ed
   - Selected instance type: `t3.micro` (or `t2.micro` if free).
   - Set up security to allow SSH, HTTP, and HTTPS access.
   - Create a key pair and save it to a safe location for future logins.

2. **Assign Elastic IP**
   - Get an elastic IP to keep the same public IP address
   - Attach the elastic IP to the instance

3. **Testing the Web Server**
   - Open a browser and enter http://<public-ip>.
   - Check to see that the page loads correctly.

4. **SSH into your server**
   - Open a console and enter: 
     ```bash
     ssh -i [key pair file] ubuntu@[public_ip]
     ```


## Amazon Web Services - Route 53 Notes
### Steps to Buy a Domain
1. Log in to AWS Console > Route 53.
2. Navigate to **Domains > Registered domains** > **Register Domain**.
3. Search for a domain, select one, and **Add to cart**.
4. Fill out contact details and complete the order.
5. AWS will create a **hosted zone** for your domain.

### Create DNS Records
1. Get the public IP address of your EC2 instance.
2. Log in to AWS Console > Route 53 > **Hosted zones**.
3. Create an **A Record** for your root domain (use your server's IP address).
4. Create another **A Record** (`*`) for any subdomain (use your server's IP).

### Test DNS
- Navigate to your domain name in the browser (example: `http://yourdomain.com`).

### Common Issues
- **Domain not accessible:** Wait 10 minutes for DNS records to propagate.
- **Site doesn't display:** Check if you're using HTTPS, or if the browser added `www.`.
- **Email verification:** Ensure you responded to AWS verification email (check spam).

- 

## HTML Structure Elements Tutorial
### HTML Definition: A protocol used for transferring hypertext requests and information on the internet.
### Methods:
- GET: Used to request data from a specified resource. No data is sent in the request body.
Example: GET /index.html

- POST: Used to send data to the server for processing. Data is included in the request body.
Example: Submitting a form.

- PUT: Used to update a resource. Sends the updated data to the server.
Example: PUT /user/123

- DELETE: Used to delete a specified resource.
Example: DELETE /user/123

### Status Codes: Important for understanding responses:
- 200: OK - The request has succeeded.
- 301: Moved Permanently - The resource has been moved to a new URL.
- 404: Not Found - The requested resource could not be found.
- 500: Internal Server Error - A generic error occurred on the server.

### Overview

The two major purposes of HTML are to provide **structure** and **content** to your web application. Some of the common HTML structural elements include:
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

We demonstrate the use of each element with the following HTML document. It starts with the top-level content `body`. The `body` has three children: a `header`, `main`, and `footer`. Each of these elements contains other structural content.

- **Header** contains a paragraph with a `span`, and a `nav` containing multiple `div` elements.
- **Main** contains multiple `section` elements, which include an unordered list (`ul`) and a table. `Main` also contains an `aside` for content that doesn’t fit the main content flow.
- **Footer** has a `div` with a single `span`.

## W3schools has a bunch of resources on how to do things in html, css, bootstrap, react and javascript
- [W3Schools](https://www.w3schools.com/html/)

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



# Key Points: HTML Input Elements

- **Form**
  - Container for input elements.
  - `<form action="url" method="post"> ... </form>`

- **Fieldset**
  - Groups related inputs with a label.
  - `<fieldset><legend>...</legend> ... </fieldset>`

- **Input Types**
  - `text`, `password`, `email`, `tel`, `url`, `number`, `range`, `color`, `file`, `submit`
  - `<input type="..." />`

- **Select & Option**
  - Creates dropdown menus.
  - `<select><option>...</option></select>`

- **Optgroup**
  - Groups options in a dropdown.
  - `<optgroup label="..."><option>...</option></optgroup>`

- **Textarea**
  - Multiline text input.
  - `<textarea></textarea>`

- **Label**
  - Labels an input element.
  - `<label for="id">...</label>`

- **Output**
  - Displays results of calculations or actions.
  - `<output for="id">...</output>`

- **Meter**
  - Displays a value within a known range.
  - `<meter min="0" max="100" value="..."></meter>`

- **Common Attributes**
  - `name`, `disabled`, `value`, `required`

- **Validation**
  - Use `required` and `pattern` for input validation.

### Example Form
```html
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">Some text</textarea>
  <button type="submit">Submit</button>
</form>
```

## CSS Notes

### 1. Universal Selector `*`
- **Usage:** Quickly apply base styles across all elements on a page.
- **Example:** Setting a global font or text color.

    ```css
    * {
      font-family: sans-serif;
      color: white;
    }
    ```

### 2. Body Styling
- **Usage:** Define background color for the entire page. Use dark colors for high contrast themes or light for minimalist designs.

    ```css
    body {
      background-color: #111; /* Dark background */
    }
    ```

### 3. Header and Section Styling
- **Usage:** Set background colors, padding, margins, and rounded corners for containers like `header` and `section` to make them visually distinct.
- Apply this structure to other containers like `div`, `main`, or `article` for consistent layout designs.

    ```css
    header, section {
      background-color: #444; /* Change based on use case */
      padding: 1em;
      margin: 1em 0;
      border-radius: 5px;
    }
    ```

### 4. Text Styling (Headings and Paragraphs)
- **Usage:** Customize headings with different font weights, colors, and borders. Use for creating distinct sections on a webpage.
- Apply similar styles to `p`, `span`, or other inline elements as needed.

    ```css
    h1 {
      color: hsl(200, 50%, 80%); /* Use HSL for flexible color adjustments */
      border-bottom: solid white thin;
    }

    h2 {
      font-weight: 100; /* Light weight for subtler headings */
    }
    ```

### 5. Tables
- **Usage:** Style tables to ensure data is visually organized and easy to read. You can use this pattern for any tabular data.
- Customize further for different table themes.

    ```css
    #table-data {
      background-color: #eee;
      width: 300px;
    }

    td, th {
      color: black;
      text-align: center;
      border: black solid thin;
      padding: 1em;
    }
    ```

### 6. Footer and Italics Styling
- **Usage:** Style footers or any secondary text with different font sizes, italics, or alignment. Useful for creating emphasis or de-emphasizing content.

    ```css
    footer {
      font-style: italic;
      font-size: 1.5em;
      text-align: end; /* Aligns text to the right */
      padding: 0 1em;
    }
    ```

### 7. List Customization
- **Usage:** Customize list bullets with different `list-style` types, like square or circle. This can be used for any list (`ul` or `ol`) to match the theme of the page.

    ```css
    li {
      list-style: square; /* Options: circle, decimal, none, etc. */
    }
    ```

### 8. Animations
- **Usage:** Apply smooth animations to elements using `@keyframes`. This can be used to animate movement or transitions for interactive elements.

    ```css
    .fly-in {
      animation: fly-from-left 1s ease-out;
    }

    @keyframes fly-from-left {
      0% {
        transform: translateX(-200%);
      }
      100% {
        transform: translateX(0%);
      }
    }
    ```
