import React from 'react';

class FormInput extends React.Component {
    render() {
        return (
            <div className={'col-span-3 lg:col-span-4 ' + this.props.containerStyle} >
                <label className='font-medium text-gray-500'>{this.props.label}</label>
                {
                    React.createElement(this.props.element, {
                        className: "my-2 border-2 rounded border-gray-300 focus:outline-none focus:border-sky-300 h-10 p-2 block w-full " + this.props.inputStyle,
                        type: this.props.type,
                        name: this.props.name,
                        max: this.props.max,
                        min: this.props.min,
                        value: this.props.value,
                        onChange: (e) => this.props.handleChange(e, this.props.section, this.props.itemId)
                    },
                        this.props.options ? this.props.options.map((option, index) => {
                            return (
                                React.createElement("option", { key: index, value: option }, option)
                            )
                        }) : null
                    )
                }
            </div >
        );

    }
}

export default FormInput;