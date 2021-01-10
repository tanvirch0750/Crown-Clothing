import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import "./cart-icon.styles.scss";

import {createStructuredSelector} from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    <span className="item-count">{itemCount}</span>
  </div>
);



const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const MapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, MapDispatchToProps)(CartIcon);
