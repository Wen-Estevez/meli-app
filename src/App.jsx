import { Route, Routes } from 'react-router-dom';

import SearchBar from './views/SearchBar';
import SearchResults from './views/SearchResults';
import ItemDetail from './views/ItemDetail';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <SearchBar />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/items" element={<SearchResults/>}/>             {/* */}
          <Route exact path="/items/:id" element={<ItemDetail/>}/>        
      </Routes>
    </>
  );
}
