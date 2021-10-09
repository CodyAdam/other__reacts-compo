import React from "react";
import ReactDOM from "react-dom";
import Deco from "./Deco";
import Settings from "./Settings/Settings";
import "./css/index.css";

class App extends React.Component {
    constructor() {
        super();
        this.toggleSettings = this.toggleSettings.bind(this);
    }

    toggleSettings() {
        let main = document.getElementById("MainWindow");
        let sett = document.getElementById("Settings");

        if (sett.classList.contains("hidden")) {
            sett.classList.remove("hidden");
            sett.style.display = "flex";
            setTimeout(() => {
                main.style.filter = "blur(10px)";
                main.style.scale = 1.2;
                sett.style.display = "flex";
                sett.style.opacity = "1";
            }, 10);
        } else {
            sett.classList.add("hidden");
            main.style.filter = "blur(0px)";
            main.style.scale = 1;
            sett.style.opacity = "0";
            setTimeout(() => {
                main.style.filter = "blur(0px)";
                main.style.scale = 1;
                sett.style.display = "none";
            }, 300);
        }
    }

    render() {
        return (
            <div id="App">
                <MainWindow toggleSettings={this.toggleSettings} />
                <Settings toggleSettings={this.toggleSettings} />
            </div>
        );
    }
}

class MainWindow extends React.Component {
    render() {
        return (
            <div id="MainWindow">
                <Deco toggleSettings={this.props.toggleSettings} />
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
