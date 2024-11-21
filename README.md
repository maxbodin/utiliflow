<h1 align="center">
    UtiliFlow
</h1>

<h4 align="center">A node-based, offline-first data transformation and workflow automation tool.</h4>

<p align="center">
  <a href="#✨-features">Features</a> •
  <a href="#🚀-getting-started">Getting Started</a> •
  <a href="#🤝-contributing">Contributing</a> •
  <a href="#🛠️-technologies-used">Technologies</a> •
  <a href="#📧-contact">Contact</a> •
  <a href="#©-license">License</a>
</p>

---

## ✨ Features

- **Node-based Interface:** Create workflows visually using nodes like `Merge PDFs`, `Save to File`, and more.
- **Offline-first Design:** Ensures complete data privacy—no user data is sent to external servers.
- **Customizable Workflows:** Save, share, and reuse workflows to streamline your processes.
- **Open Source:** Developers can build and integrate new modules to extend functionality.

---

## 🚀 Getting Started

### Running the Application

To clone and launch the application locally, ensure you have [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed. Then:

```bash
# Clone the repository.
git clone https://github.com/maxbodin/utiliflow.git

# Navigate into the project directory.
cd utiliflow

# Install dependencies.
npm install

# Start the application.
npm run tauri dev
```

### Example Workflow: Merge and Save PDFs

1. Add two PDF files as inputs.
2. Use the `Merge` node to combine them.
3. Attach a `Save` node to store the output.
4. Save your workflow to reuse or share!

---

## 🤝 Contributing

We welcome contributions to make UtiliFlow more versatile! Here’s how you can get involved:

### Code

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new change'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

### Develop Custom Modules

Extend UtiliFlow by developing new nodes!

---

## 🛠️ Technologies Used

<img src="https://skillicons.dev/icons?i=nextjs,react,tailwind,typescript,tauri,rust" alt="Technologies used in UtiliFlow" />

---

## 📧 Contact

For questions or suggestions, feel free to open an issue!

---

## © License

UtiliFlow is open source software licensed under the [MIT License](LICENSE).