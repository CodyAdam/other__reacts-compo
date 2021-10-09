import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Droppable from "./Droppable.js";

const initialState = [
    { id: "card-1", content: "Name 1", drag: false },
    { id: "card-2", content: "Name 2", drag: false },
    { id: "card-3", content: "Name 3", drag: false },
    { id: "card-4", content: "Name 4", drag: false },
    { id: "card-5", content: "Name 5", drag: false },
];

function App() {
    return (
        <div id="App">
            <Droppable className="container" cardClassName="card" initialState={initialState} />
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
