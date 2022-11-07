import { useState, useEffect } from 'react'
import paginate from './utils'
import { useGlobalContext } from './context'
const url = `https://6357f067c27556d289325a88.mockapi.io/api/v1/films`


export const useFetch = () => {
  const { loading, data, setLoading, setData } = useGlobalContext()

  const getProducts = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(paginate(data))
      setLoading(false)
    }
    catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
