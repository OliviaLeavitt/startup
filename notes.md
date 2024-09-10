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