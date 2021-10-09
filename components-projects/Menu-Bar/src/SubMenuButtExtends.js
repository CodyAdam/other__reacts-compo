import React from "react";
import SubMenu from "./SubMenu";

export default class SubMenuButt extends React.Component {
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
    }

    render() {
        let className = "subMenuButt adv";
        const isOpen = this.props.selected === this.props.index;
        let subMenu = null;
        if (isOpen) {
            className = "subMenuButt open";
            subMenu = (
                <SubMenu
                    subMenu={this.props.subMenu}
                    exit={this.props.exit}
                    anchorPoint={{ x: this.state.width, y: this.state.posY }}
                />
            );
        }

        return (
            <div
                className={className}
                onClick={this.onOpen}
                onMouseMove={() => {
                    if (this.props.selected !== null && Date.now() - this.props.lastOpen > 150) {
                        this.onOpen();
                        this.props.updateTimer();
                    }
                }}
                ref={this.container}
            >
                <span className="name">{this.props.name}</span>
                <span className="arrow">></span>
                {subMenu}
            </div>
        );
    }
}
