import { useState, useEffect } from 'react'
import Addd from './Addd.css'
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'

export default function Add() {

  
    
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [summary, setSummary] = useState("");
    const navigate = useNavigate();

    const {postData, data} = useFetch('http://localhost:3000/books', 'POST')

    const handleSubmit = (e) => {
      e.preventDefault()
      postData({title, author, pages, summary})
      
    }

    useEffect(() => {
      if(data) {
        navigate('/')
      }
    }, [data])
  return (
    <div className='add-book'>
      <h2 className='page-title'>Add New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Book Title:</span>
          <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          />
        </label>
        <label>
          <span>Book Author:</span>
          <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          />
        </label>
        <label>
          <span>Pages:</span>
          <input
          type='number'
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          required
          />
        </label>
        <label>
          <span>Summary:</span>
          <textarea
          type='text'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
          />
        </label>

        <button className='btn'>Add</button>
      </form>
    </div>
  )
}

 