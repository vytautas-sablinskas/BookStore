export interface Product {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    rating: number;
    price: number;
}

export interface ShoppingCartItemEntity {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    amount: number;
}

export interface ProductItemEntity {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
}

export interface Order {
    shoppingCart: ShoppingCartItemEntity[];
    email: string;
    nameAndSurname: string;
}