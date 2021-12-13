import React from 'react';

class ExperienceItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.visible !== this.props.visible) {
            this.setState({
                visible: this.props.visible
            });
        }
    }

    toggleVisibility() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        if (!this.state.visible) {
            return (
                <div className="experience-card">
                    <p>{this.props.data[this.props.id].position} at {this.props.data[this.props.id].company}</p>
                    <p>{this.props.data[this.props.id].from} - {this.props.data[this.props.id].to}</p>
                    <button onClick={this.toggleVisibility}><i className="fas fa-chevron-down"></i></button>
                    <button onClick={(e) => this.props.handleRemoveItem(e, 'experience', this.props.data[this.props.id])}><i className="fas fa-times"></i></button>
                </div>
            );
        }
        return (
            <div className="experience-item" id={this.props.id}>
                <button onClick={(e) => this.props.handleRemoveItem(e, 'experience', this.props.data[this.props.id])}><i className="fas fa-times"></i></button>
                <div>
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" value={this.props.data[this.props.id].company} onChange={this.props.handleChange} />
                </div>
                <div>
                    <label htmlFor="position">Position</label>
                    <input type="text" name="position" value={this.props.data[this.props.id].position} onChange={this.props.handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" cols="30" rows="10" value={this.props.data[this.props.id].description} onChange={this.props.handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="from">From</label>
                    <input type="text" name="from" value={this.props.data[this.props.id].from} placeholder="MM/YYYY" onChange={this.props.handleChange} />
                </div>
                <div>
                    <label htmlFor="to">to</label>
                    <input type="text" name="to" value={this.props.data[this.props.id].to} placeholder="MM/YYYY" onChange={this.props.handleChange} />
                </div>
                {
                    this.props.noEmptyFields(this.props.data[this.props.data.length - 1]) ? <button onClick={this.toggleVisibility}><i className="fas fa-minus"></i></button> : null
                }
            </div>

        );
    }
}

export default ExperienceItem;