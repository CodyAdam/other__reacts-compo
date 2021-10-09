import React from "react";
import MenuButt from "./MenuButt";

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
        this.exit = this.exit.bind(this);
        this.state = {
            selected: null,
        };
    }

    select(index) {
        this.setState({ selected: index });
    }

    exit() {
        this.select(null);
        console.log("Exit!");
    }

    render() {
        const menu = this.props.menu;
        const buttons = menu.map((menu, index) => {
            return (
                <MenuButt
                    key={index}
                    index={index}
                    name={menu.name}
                    subMenu={menu.subMenu}
                    selected={this.state.selected}
                    select={this.select}
                    exit={this.exit}
                />
            );
        });
        let background = null;
        if (this.state.selected !== null) background = <div className="menuBG" onClick={this.exit}></div>;

        return (
            <div id="MenuBar">
                {buttons}
                {background}
            </div>
        );
    }
}
