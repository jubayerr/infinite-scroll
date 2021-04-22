import { useState } from 'react';
import './App.css';
import useBookSearch from './useBookSearch';

function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  useBookSearch(query, pageNumber)
  return (
    <div className="App">
      <input type="text" />
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>...loading</div>
      <div>error!</div>
    </div >
  );
}

export default App;
