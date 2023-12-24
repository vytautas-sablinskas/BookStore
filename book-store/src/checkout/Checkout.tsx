import './Checkout.sass';
import { useSelector } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import React, { useEffect, useState } from 'react';
import OrderModal from './OrderModal';
import { resetShoppingCart } from '../redux/actions/shoppingCartActions';
import { useDispatch } from 'react-redux';
import { TextField } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft24Filled } from "@fluentui/react-icons";
import { addOrder } from '../redux/actions/orderActions';
import { ShoppingCartState } from '../shared/ReduxInterfaces';
import { Order, ShoppingCartItemEntity } from '../shared/EntityInterfaces';

function Checkout() : JSX.Element {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [nameSurname, setNameSurname] = useState('');
    const shoppingCart = useSelector((state : ShoppingCartState) => state.shoppingCart);
    const dispatch = useDispatch();
    const [orderedItems, setOrderedItems] = useState<ShoppingCartItemEntity[] | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailError = (email === "" || !emailRegex.test(email)) ? 'Invalid email format' : undefined;

    const confirmEmailError = email !== confirmEmail ? 'Emails do not match' : undefined;
    const nameSurnameRegex = /^[A-Za-z\u0100-\u017F]+\s+[A-Za-z\u0100-\u017F]+(?:\s+[A-Za-z\u0100-\u017F]+)*$/;
    const nameSurnameError = (nameSurname === "" || !nameSurnameRegex.test(nameSurname)) ? 'Please enter at least two words with only letters' : undefined;

    const totalCost = (orderedItems || shoppingCart).reduce((acc, item) => acc + item.price * item.amount, 0);
    const itemsToDisplay = orderedItems !== null ? orderedItems : shoppingCart;

    const handleOrder = () : void => {
        if (!emailError && !confirmEmailError && !nameSurnameError) {
            setOrderedItems(shoppingCart);
            const order: Order = {
                shoppingCart: shoppingCart,
                email: email,
                nameAndSurname: nameSurname
            }

            dispatch(addOrder(order));
            dispatch(resetShoppingCart());
            setModalOpen(true);
        }
    };

    const handleTextFieldChange = (setter: React.Dispatch<React.SetStateAction<string>>, newValue: string | undefined) : void => {
        if (newValue !== undefined) {
            setter(newValue);
          } else {
            setter('');
          }
      };      

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (itemsToDisplay.length === 0) {
        return (
            <h1>No items in cart</h1>
        );
    }

    return (
        <div className='checkout-container-parent'>
            <button className='back-to-cart-button' onClick={() => navigate(-1)}>
                <ArrowLeft24Filled />
            </button>
            <div className='shopping-cart'>
                {itemsToDisplay.map((item, index) => (
                    <React.Fragment key={index}>
                        <CheckoutItem
                            imageSrc={item.imageUrl}
                            title={item.title}
                            price={item.price}
                            amount={item.amount}
                        />
                    </React.Fragment>
                ))}
    
                <p className='total-cost'>Total cost: <b>{totalCost.toFixed(2)}$</b></p>
                <hr />
                <TextField
                    label="Email:"
                    type="email"
                    value={email}
                    onChange={(e, newValue) => handleTextFieldChange(setEmail, newValue)}
                    errorMessage={emailError}
                />
                <TextField
                    label="Confirm Email:"
                    type="email"
                    value={confirmEmail}
                    onChange={(e, newValue) => handleTextFieldChange(setConfirmEmail, newValue)}
                    errorMessage={confirmEmailError}
                />
                <TextField
                    label="Name / Surname:"
                    type="text"
                    value={nameSurname}
                    onChange={(e, newValue) => handleTextFieldChange(setNameSurname, newValue)}
                    errorMessage={nameSurnameError}
                />

                <button className='checkout-button' onClick={handleOrder}>Order</button>
            </div>
    
            <OrderModal isOpen={isModalOpen} />
        </div>
    );
}

export default Checkout;