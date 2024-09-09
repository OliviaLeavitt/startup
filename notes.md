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