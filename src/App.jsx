import React from "react";
import ReactDOM from "react-dom/client";
import Personajes from "./components/Personajes";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return <>
  <BrowserRouter>
  <Personajes/>
  </BrowserRouter>
 
 </>
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)