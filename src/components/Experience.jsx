import React from 'react';
import ExperienceItem from './ExperienceItem';

function Experience(props) {

    return (
        <section id="experience">
            <h1>Experience</h1>
            {
                Array(props.data.length).fill().map((item, index) => {
                    return <ExperienceItem id={index} key={index} visible={index === props.data.length - 1 ? true : false} handleChange={props.handleChange} handleRemoveItem={props.handleRemoveItem} noEmptyFields={props.noEmptyFields} data={props.data} />
                })
            }
            {
               props.data.length === 0 || props.noEmptyFields(props.data[props.data.length - 1]) ? <button onClick={(e) => props.handleAddItem(e, 'experience')}><i className="fas fa-plus"></i></button> : null
            }
        </section>
    );

}

export default Experience;