import React from 'react';
import Education from './Education';
import Experience from './Experience';
import General from './General';

function Form(props) {
    return (
        <div>
            <General handleChange={props.handleGeneralChange} data={props.data.general} />
            <Education handleChange={props.handleChange} handleAddItem={props.handleAddItem} data={props.data.education} />
            <Experience handleChange={props.handleItemChange} handleAddItem={props.handleAddItem} data={props.data.experience} />
        </div>
    );
}

export default Form;