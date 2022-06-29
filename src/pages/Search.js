import { useLocation,  } from 'react-router-dom';
import DetailsList from '../components/DeatilsList'
import { useFetch } from '../hooks/useFetch'



export default function Search() {
  const queryString = useLocation().search
  const queryParams= new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/books?q=' + query
  const { error, loading, data } = useFetch(url)

  return (
    <div>
      <h2 className='page-title'>Recipe including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {loading && <p className='loading'>Loading...</p>}
      {data && <DetailsList books={data} />}
    </div>
  )
}
