import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App () {
  const [list, setList] = useState([])

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setList(tours)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    setList(list.filter(listItem =>  listItem.id !== id))
  }

  if (list.length == 0) {
    return <button className='refresh-btn' onClick={()=>fetchTours()}>Refresh</button>
  }

  return <main>
    <h1>Our tours</h1>
    <hr />
    <Tours list={list} removeTour={removeTour}/>
  </main>

}

export default App
