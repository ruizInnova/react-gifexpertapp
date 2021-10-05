import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //Aqui escribimos nuestro Código
    //const categories = ['Pokemon', 'Samurai X', 'Record of Ragnarok']; de esta forma no es correcta
    const [categories, setCategories] = useState(['Goku']);
/*
    //Add new element categories
    const handleAdd = () => {
        setcategories([...categories,'Hunter X Hunter'] );
        console.log(categories);
    }

*/
    // respuesta
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        //return <li key={ category }> { category } </li>
                         < GifGrid 
                            key={ category }
                            category= { category }
                        />
                    ))
                }
            </ol>
           
        </>
    )
}
