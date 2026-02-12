import { useState } from 'react';
import './App.css';
import BookCover from './components/BookCover';
import BookPages from './components/BookPages';

function App() {
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <div className="gameboy-app">
      {bookOpen ? (
        <BookPages onClose={() => setBookOpen(false)} />
      ) : (
        <BookCover onOpen={() => setBookOpen(true)} />
      )}
    </div>
  );
}

export default App;
