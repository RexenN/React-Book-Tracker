import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
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
    <div>Home</div>
  )
}
