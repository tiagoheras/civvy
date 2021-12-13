import React from 'react';

function Controls(props) {
    return (
        <div className='absolute right-0 top-3'>
            <button className='bg-yellow-300 w-6 h-6 rounded-3xl mr-3 rotate-180' onClick={props.toggleVisibility}><i className="fas fa-chevron-down"></i></button>
            <button className='bg-red-400 w-6 h-6 rounded-3xl mr-3' onClick={(e) => props.handleRemoveItem(e, props.section, props.item)}><i className="fas fa-times"></i></button>
        </div>
    );
}

export default Controls;