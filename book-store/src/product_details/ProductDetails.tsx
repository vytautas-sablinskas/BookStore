import React, { useEffect } from 'react';
import './ProductDetails.sass';
import AddToCartModal from './AddToCartModal';
import { Rating, RatingSize, SpinButton, DocumentCard } from '@fluentui/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PageNotFound from '../shared/PageNotFound';
import { addItemToShoppingCart } from '../redux/actions/shoppingCartActions';
import { ProductState } from '../shared/ReduxInterfaces';
import { Product, ShoppingCartItemEntity } from '../shared/EntityInterfaces';

function ProductDetails() : JSX.Element {
    const { id } = useParams();
    const product = useSelector((state : ProductState) => state.products).find(p => p.id === Number(id));
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [amount, setAmount] = React.useState(1);
    const dispatch = useDispatch();

    const onAmountChange = (_, value : string | undefined) => {
        const numericValue = Math.floor(Number(value));
        if (Number.isFinite(numericValue) && numericValue >= 1 && numericValue <= 100) {
            setAmount(numericValue);
        }
    };
    
    const handleAddToCart = (item : Product) => {
        const newItem: ShoppingCartItemEntity = {
            ...item,
            amount
        };

        dispatch(addItemToShoppingCart(newItem));
        setModalOpen(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return <PageNotFound />;
    }

    return (
        <div className='product-details-parent'>
            <DocumentCard className='product-details'>
                <p className='product-title'>{product.title}</p>
                <img src={product.imageUrl} alt="Book" className='product-image' />
                <p className='product-description'>{product.description}</p>
                <div className='product-pair'>
                    <div>
                        <p className='product-amount-title'>Amount:</p>
                        <p>{product.price}$</p>
                    </div>
                    <div>
                        <SpinButton 
                            value={amount.toString()} 
                            onChange={onAmountChange} 
                            min={1} 
                            max={100} 
                            step={1}
                            className='product-amount-selector'
                        />
                        <Rating 
                            max={5} 
                            size={RatingSize.Large} 
                            readOnly={true} 
                            rating={product.rating}
                        />
                    </div>
                </div>

                <div className='product-add-to-cart-button' onClick={() => handleAddToCart(product)}>
                    Add to cart
                </div>
            </DocumentCard>

            <AddToCartModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
}

export default ProductDetails;