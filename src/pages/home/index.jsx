import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  addCartItemAction,
  deleteCartItemAction,
  loadCartAction,
  updateCartItemAction,
} from '../../actions/cartActions';
import { loadProductsAction } from '../../actions/productsActions';
import Currency from '../../components/currency';
import Ratting from '../../components/ratting';

function Home({
  products,
  isProductsLoading,
  loadCart,
  productsError,
  loadProducts,
  addCartItem,
  cart,
  updateCartItem,
  deleteCartItem,
}) {
  console.log('cart data: ', cart);

  useEffect(() => {
    loadProducts();
    loadCart();
  }, [loadProducts, loadCart]);

  if (isProductsLoading) {
    return <h1>Loading...</h1>;
  }

  if (productsError) {
    return <h1>{productsError}</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      {products.map(product => {
        const cartItem = cart.find(
          item => product.id === item.productId,
        );
        return (
          <div
            key={product.id}
            className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8"
          >
            <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden col-span-3">
              <img
                src={product.image}
                alt={product.title}
                className="object-center object-cover"
              />
            </div>
            <div className="col-span-9">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {product.title}
              </h2>

              <section
                aria-labelledby="information-heading"
                className="mt-2"
              >
                <h3 id="information-heading">
                  {product.description}
                </h3>

                <Currency price={product.price} />
                <Ratting {...product.rating} />
              </section>

              <section
                aria-labelledby="options-heading"
                className="mt-10"
              >
                <h3
                  id="options-heading"
                  className="sr-only"
                >
                  Product options
                </h3>

                {cartItem ? (
                  <div className="flex items-center mt-6">
                    <button
                      type="button"
                      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() =>
                        updateCartItem({
                          ...cartItem,
                          quantity: cartItem.quantity + 1,
                        })
                      }
                    >
                      +
                    </button>
                    <p className="text-4xl font-bold px-4">
                      {cartItem.quantity}
                    </p>
                    <button
                      type="button"
                      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        if (cartItem.quantity > 1) {
                          updateCartItem({
                            ...cartItem,
                            quantity: cartItem.quantity - 1,
                          });
                        } else {
                          deleteCartItem(cartItem);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => addCartItem(product)}
                  >
                    Add to bag
                  </button>
                )}
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Home.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  addCartItem: PropTypes.func.isRequired,
  loadCart: PropTypes.func.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
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
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      productId: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
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
  loadCart: () => loadCartAction()(dispatch),
  addCartItem: product =>
    addCartItemAction(product)(dispatch),
  updateCartItem: product =>
    updateCartItemAction(product)(dispatch),
  deleteCartItem: product =>
    deleteCartItemAction(product)(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
