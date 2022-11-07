import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App () {
  const [list, setList] = useState([])
  const [item, setItem] = useState('')
  const [alert, setAlert] = useState({ value: false, type: '', msg: '' })
  const [editID, setEditID] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      setAlert({ value: true, type: 'danger', msg: 'please add an item' })
    }

    else if (isEditing) {
      setList(list.map((listItem, index) => {
        if (index === editID) {
          return item
        }
        return listItem
      }))
      setItem('')
      setAlert({ value: true, type: 'success', msg: 'item edited' })
      setIsEditing(false)
    }

    else {
      setList([...list, item])
      setAlert({ value: true, type: 'success', msg: 'item added' })
      setItem('')
    }

  }
  const remove = (id) => {
    setList(list.filter((item, index) => index !== id))
    setAlert({ value: true, type: 'danger', msg: 'item removed' })
  }
  const clear = () => {
    setList([])
  }

  const edit = (id) => {
    setIsEditing(true)
    setEditID(id)
    setItem(list[id])
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ value: false, type: '', msg: '' });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <main>
    <h2>grocery bud</h2>
    <Alert alert={alert} list={list} />
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='e.g. eggs' value={item} onChange={(e) => setItem(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
    <List list={list} remove={remove} clear={clear} edit={edit} setAlert={setAlert} />
  </main>
}

export default App
