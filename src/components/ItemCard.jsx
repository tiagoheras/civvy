import React from 'react';

class ItemCard extends React.Component {
    render() {
        if (this.props.section === 'education' || this.props.section === 'experience') {
            return (
                <div className="bg-gray-100 my-5 shadow-lg rounded-md relative">
                    <div className='absolute right-0 top-2'>
                        <button className='bg-yellow-300 w-6 h-6 rounded-3xl mr-3' onClick={this.props.toggleVisibility}><i className="fas fa-chevron-down"></i></button>
                        <button className='bg-red-400 w-6 h-6 rounded-3xl mr-3' onClick={(e) => this.props.handleRemoveItem(e, this.props.section, this.props.data)}><i className="fas fa-times"></i></button>
                    </div>
                    <div className='text-center text-lg font-medium py-10 lg:p-6'>
                        {
                            this.props.section === 'experience' ? <p className='text-lg'>{this.props.data.position} at {this.props.data.company}</p> : <p>{this.props.data.degree} at {this.props.data.school}</p>
                        }
                        <p className='text-lg font-normal'>{this.props.data.from} - {this.props.data.to}</p>
                    </div>
                </div>

            );

        }
    }

}

export default ItemCard;