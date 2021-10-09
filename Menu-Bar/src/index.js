import React from "react";
import ReactDOM from "react-dom";
import Deco from "./Deco";
import TitleBar from "./TitleBar";
import "./css/index.css";

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <MainWindow />
            </div>
        );
    }
}

class MainWindow extends React.Component {
    constructor() {
        super();

        this.state = {
            functions: {
                utilityFunction1: this.utilityFunction1,
                utilityFunction2: this.utilityFunction1,
                utilityFunction3: this.utilityFunction3,
                utilityFunction4: this.utilityFunction4,
            },
        };
    }

    utilityFunction1() {
        alert("The button does nothing.");
    }
    utilityFunction3() {
        document.getElementById("Decoration").style.opacity = 0.5;
        document.body.style.backgroundColor = "rgb(80, 80, 82)";
    }

    utilityFunction4() {
        document.getElementById("Decoration").style.opacity = 1;
        document.body.style.backgroundColor = "#F2F2F3";
    }

    render() {
        return (
            <div id="MainWindow">
                <TitleBar functions={this.state.functions} />
                <Deco />
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
