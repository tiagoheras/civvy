import React from 'react';
import EducationItem from './EducationItem';

function Education(props) {
    return (
        <section id="education">
            <h1>Education</h1>
            {
                Array(props.data.length).fill().map((item, index) => {
                    return <EducationItem
                        id={index}
                        key={index}
                        visible={index === props.data.length - 1 ? true : false}
                        handleChange={props.handleChange}
                        handleRemoveItem={props.handleRemoveItem}
                        noEmptyFields={props.noEmptyFields}
                        data={props.data}
                    />
                })
            }
            {
               props.data.length === 0 || props.noEmptyFields(props.data[props.data.length - 1]) ? <button onClick={(e) => props.handleAddItem(e, 'education')}><i className="fas fa-plus"></i></button> : null
            }
        </section>
    );
}

export default Education;