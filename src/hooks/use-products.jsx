import { useEffect, useState } from 'react';

export default function useProducts({salesOnly}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(undefined)
        fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
          .then((res) => res.json())
          .then((data) => {
            console.log('🔥Data Recieves from Network');
            setProducts(data);
          })
          .catch((e) => setError('Error!!'))
          .finally(() => setLoading(false))
        return () => { //when component unmount, execute
          console.log('🧹 Cleaning Data');
        };
    }, [salesOnly]);

    return [loading, error, products] //return designate data only not UI
}