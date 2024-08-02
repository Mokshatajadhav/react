import { useEffect, useState } from 'react';
import './App.css';

const getPosts = async () => {
  let response = fetch( 'https://jsonplaceholder.typicode.com/posts' )
  let data = (await response).json()
  console.log(data);
}

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    getPosts().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);
  getPosts();
  return (
    <div className="App"> </div>
  );
}

export default App;
