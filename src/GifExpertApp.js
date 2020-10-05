import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['GTA V']);

    // const handleAdd = () => {
    //     // setCategories(['HunterXHunter', ...categories]);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories = { setCategories } />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                { 
                    categories.map((category) => 
                        <GifGrid key={category} category = {category} />
                    )
                }
            </ol>
        </>
    )
}