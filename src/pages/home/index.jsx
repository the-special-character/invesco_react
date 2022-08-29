import { StarIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProductsAction } from '../../actions/productsActions';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Home({
  products,
  isProductsLoading,
  productsError,
  loadProducts,
}) {
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (isProductsLoading) {
    return <h1>Loading...</h1>;
  }

  if (productsError) {
    return <h1>{productsError}</h1>;
  }

  return (
    <div>
      {products.map(product => (
        <div
          key={product.id}
          className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8"
        >
          <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
            <img
              src={product.image}
              alt={product.title}
              className="object-center object-cover"
            />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
              {product.title}
            </h2>

            <section
              aria-labelledby="information-heading"
              className="mt-2"
            >
              <h3
                id="information-heading"
                className="sr-only"
              >
                Product information
              </h3>

              <p className="text-2xl text-gray-900">
                {product.price}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h4 className="sr-only">Reviews</h4>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map(rating => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating.rate > rating
                            ? 'text-gray-900'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0',
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">
                    {product.rating.rate} out of 5 stars
                  </p>
                  <a
                    href="#reviews"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {product.rating.count} reviews
                  </a>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="options-heading"
              className="mt-10"
            >
              <h3 id="options-heading" className="sr-only">
                Product options
              </h3>

              <button
                type="button"
                className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to bag
              </button>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

Home.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  isProductsLoading: PropTypes.bool.isRequired,
  productsError: PropTypes.string.isRequired,
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

const mapStateToProps = store => ({
  products: store.products,
  cart: store.cart,
  isProductsLoading: !!store.loading.LOAD_PRODUCTS,
  productsError: store.errors.LOAD_PRODUCTS || '',
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => loadProductsAction()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
