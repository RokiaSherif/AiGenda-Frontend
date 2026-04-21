import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientID = '177475552869-fdf3fkulpgp5elsd76dhj606f3ujb72h.apps.googleusercontent.com';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={clientID} locale="en">
     <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
);