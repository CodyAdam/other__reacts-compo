import React from "react";

export default class Droppable extends React.Component {
    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.cardMove = this.cardMove.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.state = { cards: props.initialState, startPos: null, lastId: props.initialState.length };
    }
    onAdd() {
        let newState = this.state;
        newState.cards.push({
            id: `card-${this.state.lastId + 1}`,
            content: `Name ${this.state.cards.length + 1}`,
            drag: false,
        });
        newState.lastId++;
        this.setState(newState);
    }

    onRemove(index) {
        let newState = this.state;
        newState.cards.splice(index, 1);
        this.setState(newState);
    }

    cardMove(old_index, new_index) {
        let newCards = this.state.cards;

        while (old_index < 0) old_index += newCards.length;
        while (new_index < 0) new_index += newCards.length;
        if (new_index >= newCards.length) {
            var k = new_index - newCards.length + 1;
            while (k--) newCards.push(undefined);
        }
        newCards.splice(new_index, 0, newCards.splice(old_index, 1)[0]);
        this.setState({ cards: newCards });
    }

    onMouseDown(e, index) {
        let newState = this.state;
        newState.cards[index].drag = true;
        newState.startPos = { x: e.clientX, y: e.clientY };
        this.setState(newState);
    }

    onMouseMove(e) {
        const { cards, startPos } = this.state;
        for (let index = 0; index < cards.length; index++) {
            if (cards[index].drag) {
                const newIndex = Math.min(
                    Math.max(index + Math.floor((e.clientY - startPos.y + 50) / 100), 0),
                    cards.length - 1,
                );
                this.cardMove(index, newIndex);

                this.setState({ startPos: { x: startPos.x, y: startPos.y + 100 * (newIndex - index) } });
                break;
            }
        }
    }

    onMouseUp() {
        let newState = this.state;
        for (let index = 0; index < newState.cards.length; index++) {
            newState.cards[index].drag = false;
        }

        this.setState(newState);
    }

    render() {
        const cards = this.state.cards;

        const containerStyle = {
            overflowX: "hidden",
            overflowY: "scroll",
        };

        const cardStyle = {
            transition: "all .1s",
        };

        const cardDragStyle = {
            transition: "all .1s",
            cursor: "grabbing",
            zIndex: "1",
            opacity: "0.5",
            scale: "0.9",
        };

        return (
            <div
                className={this.props.className}
                style={containerStyle}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
                onMouseLeave={this.onMouseUp}
            >
                {cards.map((card, index) => {
                    return (
                        <div
                            className={this.props.cardClassName}
                            key={card.id}
                            style={!card.drag ? cardStyle : cardDragStyle}
                        >
                            <div>
                                <span className="name">{card.content}</span>
                                <br />
                                <span className="id">id : {card.id}</span>
                            </div>
                            <div
                                className="drag"
                                onMouseDown={(e) => {
                                    this.onMouseDown(e, index);
                                }}
                            >
                                Drag Here
                            </div>
                            <button
                                className="minus"
                                onClick={() => {
                                    this.onRemove(index);
                                }}
                            >
                                -
                            </button>
                        </div>
                    );
                })}
                <button className="plus" onClick={this.onAdd}>
                    +
                </button>
            </div>
        );
    }
}
