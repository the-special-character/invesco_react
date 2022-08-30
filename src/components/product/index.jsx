import { connect } from 'react-redux';
import {
  addCartItemAction,
  deleteCartItemAction,
  updateCartItemAction,
} from '../../actions/cartActions';
import Product from './product';

const mapStateToProps = (
  { cart, loading },
  { product },
) => ({
  cartItem: cart.find(x => x.productId === product.id),
  isAdding:
    loading.ADD_CART_ITEM &&
    loading.ADD_CART_ITEM.indexOf(product.id) !== -1,
  isUpdating:
    loading.UPDATE_CART_ITEM &&
    loading.UPDATE_CART_ITEM.indexOf(product.id) !== -1,
  isDeleting:
    loading.DELETE_CART_ITEM &&
    loading.DELETE_CART_ITEM.indexOf(product.id) !== -1,
});

const mapDispatchToProps = dispatch => ({
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
)(Product);
