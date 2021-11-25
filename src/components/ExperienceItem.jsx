import React from 'react';

class ExperienceItem extends React.Component {
    render() {
        if (!this.props.visible) {
            console.log(this.props.data);
            return (
                <div className="xp-card">
                    <p>{this.props.data[this.props.id].position} at {this.props.data[this.props.id].company}</p>
                    <p>from {this.props.data[this.props.id].from} to {this.props.data[this.props.id].until}</p>
                </div>
            );
        }
        return (
            <div className="experience" id={this.props.id}>
                <div>
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" onChange={this.props.handleChange} />
                </div>
                <div>
                    <label htmlFor="position">Position</label>
                    <input type="text" name="position" onChange={this.props.handleChange} />
                </div>
                <div>
                    <label htmlFor="tasks">Main Tasks</label>
                    <textarea name="tasks" cols="30" rows="10" onChange={this.props.handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="from">From</label>
                    <input type="month" name="from" onChange={this.props.handleChange} />
                </div>
                <div>
                    <label htmlFor="until">Until</label>
                    <input type="month" name="until" onChange={this.props.handleChange} />
                </div>

            </div>

        );
    }
}

export default ExperienceItem;