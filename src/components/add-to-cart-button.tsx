"use client";

import { useCart } from "@/contexts/cart-context";

export interface AddToCartButtonProps {
    productId: number;
}


export default function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    function handleAddToCart() {
        addToCart(productId);
    }

    return (
        <button onClick={handleAddToCart} type="button" className="text-white mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold">
            Adicionar ao carrinho
        </button>  
    );
}