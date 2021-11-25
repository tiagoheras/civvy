import React from 'react';
import ExperienceItem from './ExperienceItem';

class Experience extends React.Component {
    constructor() {
        super();
        this.state = {
            itemsCount: 0,
        };

        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem = () => {
        this.props.handleAddItem();
        this.setState({
            itemsCount: this.state.itemsCount + 1,
        });
    }

    render() {
        return (
            <div>
                {
                    Array(this.state.itemsCount + 1).fill().map((item, index) => {
                        return <ExperienceItem id={index} key={index} visible={index === this.state.itemsCount ? true : false} handleChange={this.props.handleChange} data={this.props.data} />
                    })
                }
                <button onClick={this.handleAddItem}>+</button>
            </div>
        );
    }
}

export default Experience;