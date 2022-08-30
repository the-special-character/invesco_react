import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = store => ({
  products: store.products,
  cart: store.cart,
  isProductsLoading: !!store.loading.LOAD_PRODUCTS,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () =>
    dispatch({ type: 'LOAD_PRODUCTS_REQUEST' }),
  loadCart: () => dispatch({ type: 'LOAD_CART_REQUEST' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
