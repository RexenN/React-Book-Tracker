import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function Details() {

  const { id } = useParams();
  const url = `http://localhost:3000/books/` + id ;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(url);
        const data = await result.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }
    fetchData();
    console.log(data)
  })

  return (
    <div className="book">
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h3 className="title">{data.title}</h3>
          <p className='author'>{data.author}</p>
          <p className='pages'>{data.pages}</p>
          <small className='summary'>{data.summary}</small>
       </>
      )}
    </div>
  )
}
