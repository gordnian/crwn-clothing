import { useState } from 'react';
import { ProductsContext } from './products.context';
import SHOP_DATA from '../shop-data.json';

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
