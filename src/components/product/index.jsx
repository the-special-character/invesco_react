import { connect } from 'react-redux';
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
    dispatch({
      type: 'ADD_CART_ITEM_REQUEST',
      payload: product,
      loadingId: product.id,
    }),
  updateCartItem: cartItem =>
    dispatch({
      type: 'UPDATE_CART_ITEM_REQUEST',
      payload: cartItem,
      loadingId: cartItem.productId,
    }),
  deleteCartItem: cartItem =>
    dispatch({
      type: 'DELETE_CART_ITEM_REQUEST',
      payload: cartItem,
      loadingId: cartItem.productId,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
