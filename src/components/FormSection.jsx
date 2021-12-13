import React from 'react';
import FormItem from './FormItem';
import ItemCard from './ItemCard';

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
                        />)
                        : <FormItem
                            data={props.data}
                            visible={true}
                            section={props.title.toLowerCase()}
                            handleChange={props.handleChange}
                        />
                }
            </div>
            <button></button>
        </section>
    );
}

export default FormSection;