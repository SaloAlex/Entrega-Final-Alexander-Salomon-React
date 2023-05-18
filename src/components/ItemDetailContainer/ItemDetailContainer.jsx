import React from 'react';
import ItemDetail from './ItemDetail';
import Spinner from '../Spinner/Spinner';
import { useState, useEffect, useCallback } from 'react';
import { getSingleProduct } from '../../services/firestore';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getSingleProductAsync = useCallback(async () => {
    try {
      const respuesta = await getSingleProduct(id);
      setProduct(respuesta);
      setIsLoading(false);
    } catch (error) {
      console.error('Error desde la base de datos', error);
    }
  }, [id]);

  useEffect(() => {
    getSingleProductAsync();
  }, [getSingleProductAsync]);

  if (isLoading) {
    return <Spinner />;
  }

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
