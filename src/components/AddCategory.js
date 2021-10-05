import React, { useState } from 'react'
//validation
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => { 
        console.log( e.target.value); 
        setinputValue( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {

            setCategories(cats => [inputValue, ...cats ] );
            setinputValue('');
            console.log('submit realizado..');
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h4>{inputValue}</h4>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

//Add propTypes required 

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
