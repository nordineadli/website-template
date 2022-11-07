const reducer = (state, action) => {
    switch (action.type) {
        default:
            throw new Error('no matching action type')

        case 'CLEAR':
            return { ...state, cart: [] }
        case 'INC':
            let tempCart = state.cart.map(cartItem => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem
            })
            return { ...state, cart: tempCart }
        case 'DEC':
            let tempCart2 = state.cart.map(cartItem => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            }).filter(cartItem => cartItem.amount !== 0)
            return { ...state, cart: tempCart2 }
        case 'REMOVE':
            return { ...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload) }
        case 'GET_TOTALS':
            const amountArray = state.cart.map(item => item.amount)
            let amountTotal = amountArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0,);

            const priceArray = state.cart.map(item => item.amount * item.price)
            let priceTotal = priceArray.reduce((prev, current) => prev + current, 0,)

            return { amount: amountTotal, price: priceTotal }

    }
}

export default reducer