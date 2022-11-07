import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App () {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')




  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0]
    const { phone, email } = person;
    const { large: image } = person.picture; /* looking for the 'large' property and renaming it */
    const { login: { password } } = person; /* password is a nest object, inside {} */
    const { first, last } = person.name;
    const { dob: { age } } = person;
    const { street: { number, name } } = person.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street:`${number} ${name}`,
      name: `${first}${last}`  // ES6 feature: no need to repeat 'image' prop
    }
    setPerson(newPerson)
    setLoading(false)
    setTitle('name')
    setValue(newPerson.name)
  }

  useEffect(() => {
    getPerson()
  }, [])
  const handleValue = (e) => {
if(e.target.classList.contains('icon')){
  const newValue=e.target.dataset.label;
  setTitle(newValue)
  setValue(person[newValue])

}
  }

  return <main>
    <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img src={(person && person.image) || defaultImage} alt='random user' className='user-img' /> {/* && operator or else error when person is null */}
        </div>
        <p className='user-title'> my {title} is</p>
        <p className='user-value'>{value}</p>
        <div className='values-list'>
          <button data-label='name' onMouseOver={handleValue} className='icon'>
            <FaUser />
          </button>
          <button data-label='email' onMouseOver={handleValue} className='icon'>
            <FaEnvelopeOpen />
          </button>
          <button data-label='age' onMouseOver={handleValue} className='icon'>
            <FaCalendarTimes />
          </button>
          <button data-label='street' onMouseOver={handleValue} className='icon'>
            <FaMap />
          </button>
          <button data-label='phone' onMouseOver={handleValue} className='icon'>
            <FaPhone />
          </button>
          <button data-label='password' onMouseOver={handleValue} className='icon'>
            <FaLock />
          </button>
        </div>
        <button className='btn' type='button' onClick={getPerson}>
          {loading ? 'loading...' : 'random user'}
        </button>
      </div>
  </main>
}

export default App
