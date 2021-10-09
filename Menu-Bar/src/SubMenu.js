import React from "react";
import SubMenuButt from "./SubMenuButt";
import SubMenuButtExtends from "./SubMenuButtExtends";

export default class SubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
        this.state = {
            selected: null,
        };
        this.lastOpen = Date.now();
    }

    select(index) {
        this.setState({ selected: index });
    }

    updateTimer() {
        this.lastOpen = Date.now();
    }

    render() {
        const buttons = this.props.subMenu.map((subMenu, index) => {
            if (!subMenu.subMenu)
                return (
                    <SubMenuButt
                        key={index}
                        name={subMenu.name}
                        available={subMenu.available}
                        shortcut={subMenu.shortcut}
                        function={subMenu.function}
                        select={this.select}
                        exit={this.props.exit}
                        lastOpen={this.lastOpen}
                        updateTimer={this.updateTimer}
                    />
                );
            else
                return (
                    <SubMenuButtExtends
                        key={index}
                        index={index}
                        name={subMenu.name}
                        subMenu={subMenu.subMenu}
                        selected={this.state.selected}
                        select={this.select}
                        exit={this.props.exit}
                        lastOpen={this.lastOpen}
                        updateTimer={this.updateTimer}
                    />
                );
        });
        const style = { left: this.props.anchorPoint.x + "px", top: this.props.anchorPoint.y + "px" };
        return (
            <div className="subMenu" style={style}>
                {buttons}
            </div>
        );
    }
}
