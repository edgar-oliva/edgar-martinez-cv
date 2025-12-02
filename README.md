# Edgar CV - Website

This project is a personal CV website built with React, Vite, TypeScript, and Tailwind CSS.

## Getting Started

You can run this project using either **Docker** (recommended if you don't have Node.js installed) or **Node.js**.

### Option 1: Docker (Recommended)

This method requires Docker to be installed and running.

1.  **Build and Start**:
    ```bash
    docker-compose up --build -d
    ```
2.  **Access the Website**:
    Open [http://localhost:3001](http://localhost:3001) in your browser.

3.  **Stop the Container**:
    ```bash
    docker-compose down
    ```

### Option 2: Node.js

This method requires Node.js (v18+) to be installed.

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
3.  **Access the Website**:
    Open the URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

-   `src/`: Source code for the React application.
-   `docker-compose.yml`: Docker configuration.
-   `Dockerfile`: Docker image definition.
