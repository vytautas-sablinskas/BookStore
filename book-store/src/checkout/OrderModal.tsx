import React from 'react';
import './OrderModal.sass';
import { useNavigate } from 'react-router-dom';
import Paths from '../app_navigation/Paths';
import { OrderModalProps } from '../shared/PropInterfaces';

function OrderModal(props: OrderModalProps) : JSX.Element | null {
    const navigate = useNavigate();

    if (!props.isOpen) return null;

    return (
        <div className='order-modal-overlay'>
            <div className='thank-you-card'>
                <p className='thank-you-message'>Thank you for your order!</p>
                <button className='goto-home-page' onClick={() => navigate(Paths.Products)}>
                    Home page
                </button>
            </div>
        </div>
    );
}

export default OrderModal;