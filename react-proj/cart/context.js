import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
    loading: false,
    cart: cartItems,
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const clear = () => {
        dispatch({ type: 'CLEAR' })
    }

    const inc = (id) => {
        dispatch({ type: 'INC', payload: id })
    }

    const dec = (id) => {
        dispatch({ type: 'DEC', payload: id })
    }

    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    const getTotals = () => {
        dispatch({ type: 'GET_TOTALS' })
    }

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])
    return (
        <AppContext.Provider
            value={{
                ...state,
                clear,
                inc,
                dec,
                remove,
                getTotals
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
