import { useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './Home';
import Restaurant from './Resturan';
import Safe from './Safe';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Header setPage={setPage} />

      {page === 'home' && <Home />}
      {page === 'restaurant' && <Restaurant />}
      {page === 'conference' && <Safe />}
      <Footer />
    </>
  );
}

export default App;

