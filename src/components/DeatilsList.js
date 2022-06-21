import List from './List.css';
import { Link } from 'react-router-dom'

export default function DeatilsList( { books } ) {
  if(books.length === 0) {
    return <div className={List.list}>No books found</div>
  }

  return (
    <div className='container'>
      {books.map( book => (
        <div className='card' key={book.id}>
          <h3 className='title'>{book.title}</h3>
          <p className='author'>Author: {book.author}</p>
          <small className='page'>Pages: {book.pages}</small>
          <div>{book.summary.substring(0, 100)}...</div>
          <Link to={`/details/${book.id}`}>Details</Link>
        </div>
      ))}
    </div>
  )
}
