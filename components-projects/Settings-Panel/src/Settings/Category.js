import React from "react";

export default class Category extends React.Component {
    render() {
        let className = "category";
        if (this.props.selected === this) className = "category active";

        return (
            <div
                className={className}
                onClick={() => {
                    this.props.select(this.props.children, this);
                }}
            >
                {this.props.name}
            </div>
        );
    }
}
