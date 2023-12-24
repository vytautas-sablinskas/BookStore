import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import './Products.sass';
import { useSelector } from 'react-redux';
import { ProductState } from '../shared/ReduxInterfaces';

const ITEMS_PER_PAGE = 3;
const NEAR_BOTTOM_THRESHOLD = 50;
const NO_PRODUCTS = 0;

function Products() : JSX.Element {
    const allProducts = useSelector((state : ProductState) => state.products);
    const [displayedProducts, setDisplayedProducts] = useState(getInitialProducts());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function getInitialProducts() {
        if (!allProducts) return [];

        return allProducts.slice(0, ITEMS_PER_PAGE);
    }

    function isNearBottom() {
        return (document.documentElement.scrollTop || window.pageYOffset) + window.innerHeight >= document.documentElement.scrollHeight - NEAR_BOTTOM_THRESHOLD;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        function fetchMoreProducts() {
            const nextPageStart = displayedProducts.length;
            const nextPageEnd = nextPageStart + ITEMS_PER_PAGE;
    
            return allProducts.slice(nextPageStart, Math.min(nextPageEnd, allProducts.length));
        }

        function handleScroll() {
            if (!isNearBottom() || loading) {
                return;
            }

            setLoading(true);

            const newProducts = fetchMoreProducts();
            if (newProducts.length === NO_PRODUCTS) {
                setLoading(false);
                return;
            }

            setDisplayedProducts(prev => [...prev, ...newProducts]);
            setLoading(false);
        }

        if (!allProducts || allProducts.length === NO_PRODUCTS) {
            setError("No books are available for purchasing. Try again later!");
            return;
        }
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading, displayedProducts, allProducts]);
    
    return (
        <div className="products-list">
            {error && <div className="error-message">{error}</div>}
            {displayedProducts.map(product => (
                <ProductItem 
                    key={product.id}
                    id={product.id}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default Products;
