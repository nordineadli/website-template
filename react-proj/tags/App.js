import React, { useState, useEffect } from 'react'
import Article from './Article.js'
import { useGlobalContext } from './context.js'
import { FaSearch } from 'react-icons/fa'
import { useFetch } from './useFetch.js'


function App () {
  const { loading, data } = useFetch()
  const { index, setIndex } = useGlobalContext()
  const page = data[index]

  /* state variables: loading (when data is fetching), index (page number). 
  Variable: page, the array of articles for the current page */


  if (loading) {
    return <h1>Loading...</h1>
  }

  return <>
    <main>
      
      {page.map((article, index) => {

        return <Article {...article} key={index} />

      })}

    </main>

    <footer className='pagination'>

      {data.map((item, index) => {

        return <button key={index} onClick={() => setIndex(index)} className='page-item'>
          {index + 1}
        </button>

      })}

    </footer>
  </>
}

export default App
