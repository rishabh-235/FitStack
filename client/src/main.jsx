import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WorkoutContext from "./Context/WorkoutContext.jsx";

createRoot(document.getElementById("root")).render(
  <WorkoutContext>
    <App />
  </WorkoutContext>
);
