# LocalLance Frontend  

This repository contains the frontend of the LocalLance platform, built with React, designed to connect freelancers in Rwanda's digital and creative sectors with local businesses and individuals.

---

## Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v16 or higher recommended): [Download Node.js](https://nodejs.org)
- **npm** or **yarn**: Comes bundled with Node.js. Check the version using:
  ```bash
  npm -v
  ```
- **Git**: [Download Git](https://git-scm.com/)

## Installation
Follow these steps to set up the project on your local machine:
1. Clone the Repository
   ```bash
   git clone https://github.com/yourusername/LocalLance-frontend.git
   ```
   Replace `yourusername` with the actual username or organization name.

2. Navigate to the Project Directory
   ```bash
   cd LocalLance-frontend
   ```

3. Install Dependencies Using `npm`:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```
## Environment Variables

This project requires a `.env` file to store environment-specific variables, such as the API URL. Follow these steps:

Create a `.env` File In the root directory of the project, create a .env file.

Add the API URL to the .env file in the following format:
```bash
VITE_API_URL=https://local-lance-backend.onrender.com
```

## Running the Project

Start the development server with the following command:

Using npm:

```bash
npm start
```
Using yarn:

```bash
yarn start
```
This will open the app in your default browser. If not, navigate to:

```bash
http://localhost:3000
```
