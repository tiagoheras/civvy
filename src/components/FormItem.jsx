import React from 'react';
import Controls from './Controls';
import FormInput from './FormInput';
import ItemCard from './ItemCard';

class FormItem extends React.Component {
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
            return <ItemCard
                data={this.props.data}
                section={this.props.section}
                handleRemoveItem={this.props.handleRemoveItem}
                toggleVisibility={this.toggleVisibility}
            />
        }
        return (
            <div className="bg-gray-100 my-5 shadow-lg rounded-md  relative">
                {
                    this.props.controls ? (
                        <div className='absolute right-0 top-2'>
                            <button className='bg-yellow-300 w-6 h-6 rounded-3xl mr-3 rotate-180' onClick={this.toggleVisibility}><i className="fas fa-chevron-down"></i></button>
                            <button className='bg-red-400 w-6 h-6 rounded-3xl mr-3' onClick={(e) => this.props.handleRemoveItem(e, this.props.section, this.props.data)}><i className="fas fa-times"></i></button>
                        </div>
                    ) : null
                }
                <div className='grid grid-cols-3 lg:grid-cols-4 lg:gap-x-5 p-8'>
                    {
                        Object.keys(this.props.data).map((field, index) => {
                            let input = {
                                element: 'input',
                                type: 'text',
                                required: true,
                                inputStyle: '',
                                containerStyle: 'col-span-full',
                            }

                            if (field === 'description') {
                                input.element = 'textarea';
                                input.inputStyle = 'h-48'
                            } else if (field === 'picture') {
                                input.type = 'file';
                            } else if (field === 'birthday') {
                                input.type = 'date';
                                input.style = 'col-span-2';
                            } else if (field === 'phone' || field === 'from' || field === 'to') {
                                if (field === 'from' || field === 'to') {
                                    input.containerStyle = 'lg:col-span-2';
                                } else {
                                    input.containerStyle = 'lg:col-span-2';
                                }
                                input.type = 'number';
                            } else if (field === 'email') {
                                input.type = 'email';
                                input.containerStyle = 'lg:col-span-2';
                            } else {
                            }

                            return (
                                <FormInput
                                    section={this.props.section}
                                    key={index}
                                    itemId={this.props.id}
                                    name={field}
                                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                                    element={input.element}
                                    containerStyle={input.containerStyle}
                                    inputStyle={input.inputStyle}
                                    type={input.type}
                                    value={this.props.data[field]}
                                    handleChange={this.props.handleChange}
                                />
                            )
                        })
                    }
                </div>

            </div>
        )
    }


}

export default FormItem;