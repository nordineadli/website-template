import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

const Article = ({ description, index }) => {

  /* ! LocalStorage issue !:  A tag gets assigned to a specific article, for example: 'Hello', every article gets the 'Hello' tag after page reload  */

  /*   const getLocalStorage = () => {
      let tags = localStorage.getItem('tags');
      if (tags) {
        return (tags = JSON.parse(localStorage.getItem('tags')));
      } else {
        return [];
      }
    }; */


  const [tags, setTags] = useState([])
  const [singleTag, setTag] = useState('')
  const [alert, setAlert] = useState({ value: false, type: '', msg: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!singleTag){
      setAlert({ value: true, type: 'danger', msg: 'Please enter tag!' })
    }
    else if (tags.length >= 5) {
      setAlert({ value: true, type: 'danger', msg: 'Maximum reached!(5 tags max.)' })
      console.log(alert);
      return;

    }
    else {
      setAlert({ value: true, type: 'success', msg: 'Tag added!' })

      setTags([...tags, singleTag])
    }

    setTag('')
  }

  const removeTag = (id) => {
    setTags(tags.filter((tag, index) => index !== id))
    setAlert({ value: true, type: 'success', msg: 'Tag removed!' })
  }

  /* useEffect hook to set timeout of the Alert to 3s, and reset timeout whenever an action is done within those 3s */

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ value: false, type: '', msg: '' })
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert.msg]);


  return <article className='item'>
    {alert.value && <p className={`alert ${alert.type}`}>{alert.msg}</p>
    }    <form onSubmit={handleSubmit} >
      <input
        type='text'
        value={singleTag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button type='submit' className='submit'>Add tag</button>
    </form>
    <p>{description}</p>
    <div className="tags">
      {tags.map((tag, index) => {
        return <span index={index}>
          <button onClick={() => removeTag(index)} className='tag-btn'><i><FaTimes /></i></button>
          {tag}
        </span>
      })}
    </div>

  </article>
}

export default Article
