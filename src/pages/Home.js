import { useEffect, useState } from 'react';
import DeatilsList from '../components/DeatilsList';


export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/books')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setData(data);

    })
    
  }, []);

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {loading && <p className='loading'>Loading...</p>}
      {data && <DeatilsList books={data} />}
    </div>
  )
}
