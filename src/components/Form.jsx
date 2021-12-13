import React from 'react';
import FormSection from './FormSection';

class Form extends React.Component {
    render() {
        return (
            <div className="form-container w-full mx-auto">
                <form className='w-full lg:w-3/5 rounded lg:px-10 mx-auto px-5 py-4 bg-zinc-200'>
                    <h1 className="text-3xl font-bold underline">Resume Builder</h1>
                    <FormSection
                        title='General'
                        handleChange={this.props.handleChange}
                        data={this.props.data.general}
                    />
                    <FormSection 
                        title='Education'
                        handleChange={this.props.handleChange}
                        data={this.props.data.education}
                        handleRemoveItem={this.props.handleRemoveItem}
                        handleAddItem={this.props.handleAddItem}
                    />
                    <FormSection
                        title='Experience'
                        handleChange={this.props.handleChange}
                        data={this.props.data.experience}
                        handleRemoveItem={this.props.handleRemoveItem}
                        handleAddItem={this.props.handleAddItem}
                    />
                    {/* <FormSection
                    title='Languages'
                    data={this.props.data.languages}
                /> */}
                    {/* <FormSection
                        title='Skills'
                        handleChange={this.props.handleChange}
                        data={this.props.data.skills}
                    /> */}
                </form>
            </div>
        );
    }
}

export default Form;