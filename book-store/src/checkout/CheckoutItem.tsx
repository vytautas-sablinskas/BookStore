import React from 'react';
import { DocumentCard } from "@fluentui/react";
import './CheckoutItem.sass';
import { CheckoutItemProps } from '../Shared/PropInterfaces';

function CheckoutItem(props: CheckoutItemProps) : JSX.Element {
    const truncatedTitle = props.title.length > 50 ? props.title.substr(0, 47) + "..." : props.title;
    const totalPrice = props.price * props.amount;
    
    return (
        <DocumentCard className='checkout-container'>
            <img src={props.imageSrc} className="image" alt="Book"/>
            <p className="title">{truncatedTitle}</p>
            <div className="price-container">
                <p className='price'>{totalPrice.toFixed(2)}$</p>
            </div>
        </DocumentCard>
    );
}

export default CheckoutItem;