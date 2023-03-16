import React from 'react'
import ItemList from './ItemList/ItemList'
import Spinner from '../Spinner/Spinner'
import getProducts, { getProductsByCategory } from '../../services/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ItemListContainer() {

    const [products, setProducts] = useState(null);
    const { idCategory } = useParams();

    async function getProductsAsync() {
        if (idCategory) {
            let respuesta = await getProductsByCategory(idCategory);
            setProducts(respuesta);
        } else {
            let respuesta = await getProducts();
            setProducts(respuesta);
        }
    }

    useEffect(() => {
        getProductsAsync();
    }, [idCategory]);

    return <> {
        products ? <ItemList products={products} /> : <Spinner />
    }
    </>
}

export default ItemListContainer;