import React from 'react';
import ItemList from './ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import getProducts, { getProductsByCategory } from '../../services/firestore';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { idCategory } = useParams();

  const getProductsAsync = useCallback(async () => {
    if (idCategory) {
      const respuesta = await getProductsByCategory(idCategory);
      setProducts(respuesta);
    } else {
      const respuesta = await getProducts();
      setProducts(respuesta);
    }
  }, [idCategory]);

  useEffect(() => {
    getProductsAsync();
  }, [getProductsAsync]);

  return <> {products ? <ItemList products={products} /> : <Spinner />} </>;
}

export default ItemListContainer;
