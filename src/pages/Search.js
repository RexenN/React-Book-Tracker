import { useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import DetailsList from '../components/DeatilsList'



export default function Search() {
  const queryString = useLocation().search
  const queryParams= new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/recipes?q=' + query
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
  }, [])
  return (
    <div>
      <h2 className='page-title'>Recipe including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {loading && <p className='loading'>Loading...</p>}
      {data && <DetailsList recipes={data} />}
    </div>
  )
}
