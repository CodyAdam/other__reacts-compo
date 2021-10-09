import React from "react";
import SubMenu from "./SubMenu";

export default class MenuButt extends React.Component {
    constructor(props) {
        super(props);
        this.onOpen = this.onOpen.bind(this);
        this.state = {
            posX: null,
            posY: null,
            width: null,
            height: null,
        };

        this.container = React.createRef();
    }

    componentDidMount() {
        const container = this.container.current;
        this.setState({
            posX: container.offsetLeft,
            posY: container.offsetTop,
            width: container.offsetWidth,
            height: container.offsetHeight,
        });
    }

    onOpen() {
        this.props.select(this.props.index);
        console.log("onOpen");
    }

    render() {
        let className = "menuButt";
        const isOpen = this.props.selected === this.props.index;
        let subMenu = null;
        if (isOpen) {
            className = "menuButtOpen";
            subMenu = (
                <SubMenu
                    subMenu={this.props.subMenu}
                    exit={this.props.exit}
                    anchorPoint={{ x: this.state.posX, y: this.state.height }}
                />
            );
        }

        return (
            <div
                className={className}
                onClick={(e) => {
                    this.onOpen();
                }}
                onMouseMove={() => {
                    if (this.props.selected !== null) this.onOpen();
                }}
                ref={this.container}
            >
                <span className="MName">{this.props.name}</span>
                {subMenu}
            </div>
        );
    }
}
