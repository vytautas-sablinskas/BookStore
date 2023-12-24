export interface CheckoutItemProps {
    imageSrc: string;
    title: string;
    price: number;
    amount: number;
  }
  
  export interface OrderModalProps {
    isOpen: boolean;
  }
  
  export interface AddToCartModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  