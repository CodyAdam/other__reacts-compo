import React from "react";
import Group from "./Group";
import Category from "./Category";

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
        this.state = {
            content: <span>Click on a group on the side panel.</span>,
            selected: null,
        };
    }

    select(content, selected) {
        this.setState({ content: content, selected: selected });
    }
    render() {
        return (
            <div id="Settings" className="hidden">
                <div id="Container">
                    <div id="SideBar">
                        <Group name="USER SETTINGS">
                            <Category name="My account" selected={this.state.selected} select={this.select}>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum
                                </span>
                                <br /> <br />
                                <button>Lorem</button>
                                <br /> <br />
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                </span>
                                <br />
                                <br />
                                <br />
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum
                                </span>
                                <br /> <br />
                                <button>Lorem</button>
                                <br /> <br />
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                </span>
                                <br />
                                <br />
                                <br />
                            </Category>
                            <Category name="Privacy & Safety" selected={this.state.selected} select={this.select}>
                                <span>Lorem ipsum dolor sit amet</span>
                                <br />
                                <input type="text" />
                                <br />
                                <button>Bip</button>
                                <button>Boop</button>
                            </Category>
                        </Group>
                        <Group name="APP SETTINGS">
                            <Category name="Keybinds" selected={this.state.selected} select={this.select}>
                                <span>Undo </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Redo </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Save </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Close </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button> <br />
                                <br /> <span>Lorem </span>
                                <button>Press to bind a key</button>
                            </Category>
                            <Category name="Overlay" selected={this.state.selected} select={this.select}>
                                <span>Zoom</span>
                                <br />
                                <input type="range" min="1" max="100" value="50" class="slider" />
                                <br /> <br />
                                <span>Font size</span>
                                <br />
                                <input type="range" min="1" max="100" value="50" class="slider" />
                                <br /> <br />
                            </Category>
                            <Category name="Notifications" selected={this.state.selected} select={this.select}>
                                <span>Use notifications</span>
                                <br />
                                <input type="checkbox" checked />
                            </Category>
                            <Category name="Appearance" selected={this.state.selected} select={this.select}>
                                <span>Choose a theme </span>
                                <select name="Theme">
                                    <option value=""> Dark </option>
                                    <option value="dog">Light</option>
                                    <option value="cat">Purple</option>
                                    <option value="hamster">Nocturn</option>
                                </select>
                            </Category>
                            <Category name="Language" selected={this.state.selected} select={this.select}>
                                <span>Choose a language</span>
                                <br />
                                <select name="Language">
                                    <option value=""> English </option>
                                    <option value="dog">French</option>
                                    <option value="cat">Spanish</option>
                                    <option value="hamster">Italian</option>
                                    <option value="parrot">Russian</option>
                                </select>
                            </Category>
                        </Group>
                        <Group name="MISCELLANEOUS">
                            <Category name="About" selected={this.state.selected} select={this.select}>
                                <span>This is a settings menu made with ReactJs</span>
                                <br />
                                <a href="https://github.com/CodyAdam/React-Settings-Panel" target="_blank">
                                    Github
                                </a>
                            </Category>
                            <Category name="Log Out" selected={this.state.selected} select={this.select}>
                                <span>Are you sure ?</span>
                                <br />
                                <button>Yes</button>
                                <button>No</button>
                            </Category>
                        </Group>
                    </div>
                    <div id="settingsBreak" />
                    <div id="Content">{this.state.content}</div>
                    <button onClick={this.props.toggleSettings} id="CloseButt">
                        X
                    </button>
                </div>
            </div>
        );
    }
}
