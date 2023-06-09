import { useState, useEffect } from 'react';

function Apps() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
          headers: {
            'X-Api-Key': 'cpNEA+qWRf/D3CkC0j5VMQ==f4T4pmaKBjzW2nua',
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="list-container">
      {data.map((item) => (
        <p key="1" className="list-item">{item.quote}</p>
      ))}
    </div>
  );
}

export default Apps;
