"use client";

import { useCart } from "@/contexts/cart-context";
import { ShoppingBag } from "lucide-react";

export default function CartWidget() {
    const { items } = useCart();

    return (
        <div className="flex gap-2 items-center">
            <ShoppingBag className="h-4 w-4"/>
            <span className="text-sm">Cart [{items.length}]</span>
        </div>
    );
}