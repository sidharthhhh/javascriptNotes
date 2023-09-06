import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./utils/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Context>
        <App />
    </Context>
);