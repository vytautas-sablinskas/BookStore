import React from 'react';
import { DocumentCard, SpinButton } from "@fluentui/react";
import './ShoppingCartItem.sass';
import { useDispatch } from 'react-redux';
import { removeItemFromShoppingCart, setItemAmountInShoppingCart } from '../redux/actions/shoppingCartActions';
import { ShoppingCartItemEntity } from "../Shared/EntityInterfaces";

function ShoppingCartItem(shoppingCartItem: ShoppingCartItemEntity): JSX.Element {
    const dispatch = useDispatch();
    const truncatedTitle = shoppingCartItem.title.length > 50 ? shoppingCartItem.title.substr(0, 47) + "..." : shoppingCartItem.title;

    const handleDeleteFromBasket = () : void => {
        dispatch(removeItemFromShoppingCart(shoppingCartItem.id));
    };

    const handleSetNewAmount = (newAmount: number) : void => {
        dispatch(setItemAmountInShoppingCart(shoppingCartItem.id, newAmount));
    };

    return (
        <DocumentCard className='shopping-cart-container'>
            <img src={shoppingCartItem.imageUrl} alt="Book" className="image" />
            <div className='details-container'>
                <p className="title">{truncatedTitle}</p>
                <p className='price'>{shoppingCartItem.price}$</p>
            </div>
            <div className='actions-container'>
                <button className='modal-close' onClick={handleDeleteFromBasket}>X</button>
                <SpinButton
                    defaultValue={shoppingCartItem.amount.toString()}
                    min={1}
                    max={100}
                    step={1}
                    className="spin-button"
                    onChange={(event, newValue) => handleSetNewAmount(Number(newValue))}
                />
            </div>
        </DocumentCard>
    );
}

export default ShoppingCartItem;