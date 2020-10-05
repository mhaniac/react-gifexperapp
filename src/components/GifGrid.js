import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchgifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const state = useFetchGifs(category);
    const { data:images, loading } = state;


    // const [images, setImages] = useState([]);



    return (
        <>
            <h3 className="animate__animated animate__flash">{ category }</h3>
            { loading ? <p className="animate__animated animate__flash animate__slow">Loading</p> : '' }
            <div className="card-grid">
                {
                    images.map((img) => {
                        return <GifGridItem key={ img.id } { ...img }  />
                    })
                }
            </div>
        </>
    )
}
