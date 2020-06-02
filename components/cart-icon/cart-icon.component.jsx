import React from 'react';

// import './cart-icon.styles.scss';
import { CartIconContainer, ShoppingIconContainer } from './cart-icon.styles';

export const CartIcon = ( { toggleMenuShow } ) => (
    <CartIconContainer onClick={ () => toggleMenuShow()} >
        <ShoppingIconContainer src="/icons8-menu_black.svg" alt="TaiwanNiu Logo"  id="cartIcon" />
    </CartIconContainer>
);

export default CartIcon;