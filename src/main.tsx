import React from "react"
import ReactDOM from "react-dom/client"
import "./main.scss"
import { HomePage } from "./pages/home"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
