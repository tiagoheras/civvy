import React from 'react';

function General(props) {
    return (
        <div className="general">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="John Doe" onChange={props.handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="example@example.com" onChange={props.handleChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" placeholder="(+54) 0221 360-5742" onChange={props.handleChange} />
            </div>
            <div>
                <label htmlFor="birthday">Birth Date</label>
                <input type="date" name="birthday" onChange={props.handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" cols="30" rows="10" onChange={props.handleChange}></textarea>
            </div>
        </div>
    );
}

export default General;