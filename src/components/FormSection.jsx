import React from 'react';
import FormItem from './FormItem';

function FormSection(props) {

    return (
        <section>
            <h2 className='text-2xl font-medium my-5'>{props.title}</h2>
            <div>
                {
                    props.data instanceof Array ? props.data.map((item, index) =>
                        <FormItem
                            data={item}
                            section={props.title.toLowerCase()}
                            visible={index === props.data.length - 1 ? true : false}
                            key={index}
                            id={index}
                            handleChange={props.handleChange}
                            handleRemoveItem={props.handleRemoveItem}
                            handleAddItem={props.handleAddItem}
                            controls={true}
                        />
                    )
                        : <FormItem
                            data={props.data}
                            visible={true}
                            section={props.title.toLowerCase()}
                            handleChange={props.handleChange}
                        />
                }
            </div>
            {
                props.data instanceof Array &&
                    (props.data.length === 0 || Object.keys(props.data[props.data.length - 1]))
                        .every(key => props.data[props.data.length - 1][key] !== "") ?
                    <button className='bg-green-400 h-8 w-8 rounded-3xl block mx-auto' onClick={(e) => props.handleAddItem(e, props.title.toLowerCase())}><i className="fas fa-plus"></i></button>
                    : null
            }
        </section>
    );
}

export default FormSection;