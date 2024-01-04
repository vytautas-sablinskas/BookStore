import React from 'react';
import './ProductItem.sass';
import { useNavigate } from 'react-router-dom';
import {
    DocumentCard,
    DocumentCardTitle,
    DocumentCardType
} from '@fluentui/react/lib/DocumentCard';
import Paths from '../app_navigation/Paths';
import { ProductItemEntity } from '../shared_components/EntityInterfaces';

function ProductItem(item: ProductItemEntity): JSX.Element {
    const navigate = useNavigate();
    const truncatedTitle = item.title.length > 50 ? item.title.substring(0, 47) + '...' : item.title;

    return (
        <DocumentCard 
            className="product-card" 
            type={DocumentCardType.compact} 
            onClick={() => navigate(Paths.ProductDetails.replace(':id', item.id.toString()))}
        >
            <img src={item.imageUrl} alt={truncatedTitle} className='image' />
            <div className="title-price-container">
                <DocumentCardTitle title={truncatedTitle} className='title'/>
                <p className='price'>{item.price.toString()}$</p>
            </div>
        </DocumentCard>
    );
}

export default ProductItem;