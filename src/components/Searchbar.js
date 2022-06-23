import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import Searchbarr from './Searchbarr.css'

export default function Searchbar() {
  const [term, setTerm] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`)
  }
  const navigate = useNavigate()

  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Search:</label>
            <input 
            type="text"
            id='search'
            onChange={(e) => setTerm(e.target.value)}
            required
            />
        </form>
    </div>
  )
}

