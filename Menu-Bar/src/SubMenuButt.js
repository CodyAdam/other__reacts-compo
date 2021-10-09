import React from "react";

export default class SubMenuButt extends React.Component {
    render() {
        let className = "subMenuButt normal";
        if (!this.props.available) className = "subMenuButt notAv";
        if (this.props.name === "break")
            return (
                <div className="break">
                    <div className="bar"></div>
                </div>
            );
        else
            return (
                <div
                    className={className}
                    onMouseDown={() => {
                        if (this.props.available) {
                            this.props.function();
                            this.props.exit();
                        }
                    }}
                    onMouseMove={() => {
                        if (
                            this.props.selected !== null &&
                            Date.now() - this.props.lastOpen > 150 &&
                            this.props.available
                        ) {
                            this.props.select(null);
                            this.props.updateTimer();
                        }
                    }}
                >
                    <span className="name">{this.props.name}</span>
                    <span className="shortcut">{this.props.shortcut}</span>
                </div>
            );
    }
}
