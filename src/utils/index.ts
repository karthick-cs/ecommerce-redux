const getCartItemsCount = (cartItems: any[]) => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
};

const getCartItemsTotal = (cartItems: any[]) => {
    return cartItems
        .reduce((total, item) => total + (item.price * item.quantity), 0)
        .toFixed(2);
};

export {
    getCartItemsCount,
    getCartItemsTotal
}