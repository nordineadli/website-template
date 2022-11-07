import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`// when pushed into the github, no one will be abble to see the key, don't forget to add the .env to the gitignore
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function App () {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('')

  const fetchImages = async () => {
    setLoading(true)
    let url; // url will change depending on wether we will be searching, or we will get the default images
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    }
    else {
      url = `${mainUrl}${clientID}${urlPage}`
    }
    try {
      const response = await fetch(url);
      const data = await response.json()
      setPhotos((oldPhotos) => {
        if (query && page == 1) {

          return data.results
        }
        else if (query) {
          return [...oldPhotos, ...data.results]
        }
        else {
          return [...oldPhotos, ...data]
        }
      })
      setLoading(false)

    }
    catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchImages()
  }, [page])
  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [])
  const handleSubmit = (e) => {

      e.preventDefault();
      setPage(2)

  }
  return <main>
    <section className='search'>
    <h1 className='title'>Stock Photos</h1>
      <form className='search-form'>
        <input type='text' placeholder='search' className='form-input' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className='submit-btn' onClick={handleSubmit}>
          <i><FaSearch /></i>
        </button>
      </form>
    </section>
    <section className="photos">
      <div className="photos-center">
        {photos.map((image, index) => {
          return <Photo key={index} {...image} />
        })}
      </div>
      {loading && <h2 className='loading'>Loading...</h2>}
    </section>
  </main>
}

export default App
