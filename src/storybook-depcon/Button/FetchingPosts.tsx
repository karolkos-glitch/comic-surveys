import React, { useEffect, useState } from 'react'

const FetchingPosts = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/data');
            const data = await res.json();
            console.log(data);
            setData(data);
        }catch(e){
            setError(true);
        }
        setLoading(false);
    };
    fetchPosts();
  },[]);

  if(loading) return <div>LOADING...</div>;

  if(error) return <div>An error has occured :C</div>


  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default FetchingPosts