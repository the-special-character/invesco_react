import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Product from '../../components/product';

function Home({
  products,
  isProductsLoading,
  loadCart,
  loadProducts,
}) {
  useEffect(() => {
    loadProducts();
    loadCart();
  }, [loadProducts, loadCart]);

  if (isProductsLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

Home.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  loadCart: PropTypes.func.isRequired,
  isProductsLoading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home;
