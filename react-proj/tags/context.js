import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [index, setIndex] = useState(0)
    const [tags, setTags] = useState([])
    const [singleTag, setTag] = useState('')
    const [alert, setAlert] = useState({ value: false, type: '', msg: '' })

    return <AppContext.Provider value={{
        loading,
        data,
        index,
        tags,
        singleTag,
        alert,
        setLoading,
        setData,
        setIndex,
        setTags,
        setTag,
        setAlert
    }}>
        {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
