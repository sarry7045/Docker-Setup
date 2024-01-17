import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// docker build -t dockerapp .    -    To build and run the code or create image
// docker run appname             -    To create the container from image
// docker run -p 5173:5173 dockerapp  - To turn on port
// docker run -p 5173:5173 -v "${pwd}:/app" -v /app/node_modules dockerapp  - To turn on port with Volume


// Steps for Publish Docker Image
// docker login
// docker tag react-setup surajyadav7977/react-setup


// Docker Compose Steps
// docker init
