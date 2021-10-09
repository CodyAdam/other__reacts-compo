import React from "react";
import MenuBar from "./MenuBar";

export default class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "This is a window title example",
            menu: [
                {
                    name: "File",
                    subMenu: [
                        { name: "New", available: true, function: props.functions.utilityFunction1, shortcut: "" },
                        { name: "Open", available: true, function: props.functions.utilityFunction1, shortcut: "" },
                        {
                            name: "Save",
                            available: false,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + S",
                        },
                        { name: "Save As", available: false, function: props.functions.utilityFunction1, shortcut: "" },
                        {
                            name: "Save All",
                            available: false,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + Shift + S",
                        },
                        { name: "break" },
                        {
                            name: "Preferences",
                            available: true,
                            function: props.functions.utilityFunction1,
                            shortcut: "",
                        },
                        { name: "break" },
                        {
                            name: "Exit",
                            available: true,
                            function: props.functions.utilityFunction1,
                            shortcut: "Alt + F4",
                        },
                    ],
                },
                {
                    name: "Edit",
                    subMenu: [
                        {
                            name: "Undo",
                            available: false,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + Z",
                        },
                        {
                            name: "Redo",
                            available: false,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + Shift + Z",
                        },
                        { name: "break" },
                        {
                            name: "Cut",
                            available: false,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + X",
                        },
                        {
                            name: "Copy",
                            available: true,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + C",
                        },
                        {
                            name: "Paste",
                            available: true,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + V",
                        },
                    ],
                },
                {
                    name: "Display",
                    subMenu: [
                        {
                            name: "Zoom",
                            subMenu: [
                                {
                                    name: "+ Zoom",
                                    available: true,
                                    function: props.functions.utilityFunction1,
                                    shortcut: "Ctrl + +",
                                },
                                {
                                    name: "- Zoom",
                                    available: true,
                                    function: props.functions.utilityFunction1,
                                    shortcut: "Ctrl + -",
                                },
                                {
                                    name: "Reset Zoom",
                                    available: false,
                                    function: props.functions.utilityFunction1,
                                    shortcut: "Ctrl + 0",
                                },
                            ],
                        },
                        {
                            name: "Fullscreen",
                            available: true,
                            function: props.functions.utilityFunction1,
                            shortcut: "F11",
                        },
                    ],
                },
                {
                    name: "Help",
                    subMenu: [
                        {
                            name: "Menu",
                            subMenu: [{
                                name: "Sub Menu",
                                subMenu: [{
                                    name: "Sub Sub Menu",
                                    subMenu: [{
                                        name: "info",
                                        available: false,
                                        function: null,
                                        shortcut: "",
                                    }],
                                }],
                            }],
                        },
                        { name: "break" },
                        {
                            name: "Contact",
                            subMenu: [
                                {
                                    name: "Discord : Cody#5717",
                                    available: false,
                                    function: null,
                                    shortcut: "",
                                },
                                {
                                    name: "Github : CodyAdam",
                                    available: false,
                                    function: null,
                                    shortcut: "",
                                },

                                {
                                    name: "Email : cody.ad4@gmail.com",
                                    available: false,
                                    function: null,
                                    shortcut: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Theme",
                    subMenu: [
                        {
                            name: "Dark",
                            available: true,
                            function: props.functions.utilityFunction3,
                            shortcut: "",
                        },
                        {
                            name: "Light",
                            available: true,
                            function: props.functions.utilityFunction4,
                            shortcut: "",
                        },
                    ],
                },
            ],
        };
    }

    render() {
        return (
            <div id="TitleBar">
                <MenuBar menu={this.state.menu} />
                <div id="Title">
                    <span>{this.state.title}</span>
                </div>
                <div id="Icons"></div>
            </div>
        );
    }
}
