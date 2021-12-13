import React from 'react';

function FormInput(props) {
    return (
        <div className={'col-span-3 lg:col-span-4 ' + props.containerStyle}>
            <label className='font-medium text-gray-500'>{props.label}</label>
            {
                React.createElement(props.element, {
                    className: "my-2 border-2 rounded border-gray-300 focus:outline-none focus:border-sky-300 h-10 p-2 block w-full " + props.inputStyle,
                    type: props.type,
                    name: props.name,
                    max: props.max,
                    min: props.min,
                    value: props.value,
                    onChange: (e) => props.handleChange(e, props.section, props.itemId)
                })
            }
        </div>
    );
}

export default FormInput;