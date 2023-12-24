import React from 'react';
import './AddToCartModal.sass';
import { useNavigate } from 'react-router-dom';
import Paths from '../app_navigation/Paths';
import { AddToCartModalProps } from '../Shared/PropInterfaces';

function AddToCartModal(props: AddToCartModalProps): JSX.Element | null {
    const navigate = useNavigate();

    if (!props.isOpen) return null;

    return (
        <div className='modal-overlay' onClick={props.onClose}>
            <div className='modal-card' onClick={e => e.stopPropagation()}>
                <button className='modal-close' onClick={props.onClose}>X</button>
                
                <button className='goto-cart' onClick={() => navigate(Paths.ShoppingCart)}>
                    Go to cart
                </button>
                <button className='continue-shop' onClick={props.onClose}>
                    Continue to shop
                </button>
            </div>
        </div>
    );
}

export default AddToCartModal;