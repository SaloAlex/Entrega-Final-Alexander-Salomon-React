import React from 'react'
import ItemDetail from './ItemDetail'
import Spinner from '../Spinner/Spinner'
import { useState, useEffect } from 'react'
import { getSingleProduct } from '../../services/firestore'
import { useParams } from 'react-router-dom'



function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    async function getSingleProductAsync() {
        try {
            getSingleProduct(id).then (respuesta => {
                setProduct(respuesta);
                setIsLoading(false);
            });
        } catch (error) {
            console.error('Error desde la base de datos', error);
        }
    }

    useEffect(() => {
        getSingleProductAsync();
    }, []);

    if (isLoading) {
        return (<Spinner />);
    }

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer;