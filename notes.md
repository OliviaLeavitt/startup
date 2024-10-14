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
## Useful Links
- [GitHub Documentation](https://docs.github.com/en/github)
- [Markdown Guide](https://www.markdownguide.org/)
- [W3Schools](https://www.w3schools.com/html/)

