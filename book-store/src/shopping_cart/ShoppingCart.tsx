import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
import './ShoppingCart.sass';
import { useNavigate } from 'react-router-dom';
import Paths from '../app_navigation/Paths';
import { ArrowLeft24Filled } from "@fluentui/react-icons";
import { ShoppingCartState } from '../Shared/ReduxInterfaces';

function ShoppingCart() : JSX.Element {
    const navigate = useNavigate();
    const shoppingCart = useSelector((state : ShoppingCartState) => state.shoppingCart);
    const totalCost = shoppingCart.reduce((acc, item) => acc + item.price * item.amount, 0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (shoppingCart.length === 0) {
        return (
            <h1>No items in cart</h1>
        );
    }

    return (
        <div className='cart-container'>
            <div className='shopping-content'>
                <button className='back-button' onClick={() => navigate(-1)}>
                    <ArrowLeft24Filled />
                </button>
                <div className='shopping-cart'>
                    {shoppingCart.map((item, index) => (
                        <React.Fragment key={index}>
                            <ShoppingCartItem
                                imageUrl={item.imageUrl}
                                title={item.title}
                                price={item.price}
                                amount={item.amount}
                                id={item.id}
                            />
                        </React.Fragment>
                    ))}

                    <hr />
                    <div className="total-cost-container">
                        <p>Total cost:</p>
                        <p>{totalCost.toFixed(2)}$</p>
                    </div>

                    <button className='checkout-button' onClick={() => navigate(Paths.Checkout)}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;