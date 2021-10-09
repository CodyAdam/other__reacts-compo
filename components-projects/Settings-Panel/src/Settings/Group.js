import React from "react";

export default class Group extends React.Component {
    render() {
        return (
            <div className="group">
                <span>{this.props.name}</span>
                {this.props.children}
            </div>
        );
    }
}
