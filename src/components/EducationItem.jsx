import React from 'react';

class EducationItem extends React.Component {
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
                <div className="card">
                    <div className="info">
                        <p>{this.props.data[this.props.id].degree} at {this.props.data[this.props.id].school}</p>
                        <p>{this.props.data[this.props.id].from} - {this.props.data[this.props.id].to}</p>
                    </div>
                    <button onClick={this.toggleVisibility}><i className="fas fa-chevron-down"></i></button>
                    <button onClick={(e) => this.props.handleRemoveItem(e, 'education', this.props.data[this.props.id])}><i className="fas fa-times"></i></button>
                </div>
            );
        }
        return (
            <div className="education-item" id={this.props.id}>
                <button onClick={(e) => this.props.handleRemoveItem(e, 'education', this.props.data[this.props.id])}><i className="fas fa-times"></i></button>
                <div>
                    <label htmlFor="school">School</label>
                    <input type="text" name="school" value={this.props.data[this.props.id].school} onChange={this.props.handleChange} />
                </div>
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" name="degree" value={this.props.data[this.props.id].degree} onChange={this.props.handleChange} />
                </div>
                <div>
                    <label htmlFor="from">From</label>
                    <input type="text" name="from" value={this.props.data[this.props.id].from} placeholder="MM/YYYY" onChange={this.props.handleChange} />
                </div>
                <div>
                    <label htmlFor="until">To</label>
                    <input type="text" name="to" value={this.props.data[this.props.id].to} placeholder="MM/YYYY" onChange={this.props.handleChange} />
                </div>
                {
                    this.props.noEmptyFields(this.props.data[this.props.data.length - 1]) ? <button onClick={this.toggleVisibility}><i className="fas fa-minus"></i></button> : null
                }
            </div>
        );
    }

}

export default EducationItem;