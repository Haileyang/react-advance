import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(prev => !prev)

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥Data Recieves from Network');
        setProducts(data);
      });
    return () => { //when component unmount, execute
      console.log('🧹 Cleaning Data');
    };
  }, [checked]);

  return (
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange}/>
      <label htmlFor="checkbox">Show Sale Products</label>
      <ul>
        {products.map((product) => (
          // Warning: Each child in a list should have a unique "key" prop. key={product.id}
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
