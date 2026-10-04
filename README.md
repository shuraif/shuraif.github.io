# Personal Portfolio

A modern, responsive, and highly customizable personal developer portfolio built with React, Vite, and Tailwind CSS. 

## 🛠 Tech Stack
- **React 19**
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling)
- **Lucide React & React Icons** (Iconography)

## 📁 Repository Structure
- **`source` branch:** This is the main working branch where all the source code lives. **Always make your edits on this branch.**
- **`main` branch:** This branch is automatically generated during deployment. It holds the built static files that GitHub Pages serves to the web. Never edit this branch manually.

## 📝 How to Update Content
All the data for the portfolio (experiences, projects, skills, contact info, etc.) is strictly separated from the UI components. 

To update your portfolio content, simply edit the JSON file:
`src/data/portfolioData.json`

The React components will automatically update to reflect any changes you make in this file.

## 💻 Local Development
To run the portfolio locally on your machine:

1. Checkout the source branch:
   ```bash
   git checkout source
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🚀 How to Deploy Changes
Whenever you make updates to the code or the JSON data, you need to deploy the changes to GitHub Pages.

**1. Deploy the Website**
Run the following command. It will automatically build the React app and push the compiled static files to the `main` branch.
```bash
npm run deploy
```

**2. Save Your Source Code**
After the deployment is successful, don't forget to commit your source code changes to the `source` branch!
```bash
git add .
git commit -m "Updated portfolio content"
git push
```
