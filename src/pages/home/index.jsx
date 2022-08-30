import { connect } from 'react-redux';
import { loadCartAction } from '../../actions/cartActions';
import { loadProductsAction } from '../../actions/productsActions';
import Home from './home';

const mapStateToProps = store => ({
  products: store.products,
  cart: store.cart,
  isProductsLoading: !!store.loading.LOAD_PRODUCTS,
  productsError: store.errors.LOAD_PRODUCTS || '',
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => loadProductsAction()(dispatch),
  loadCart: () => loadCartAction()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
