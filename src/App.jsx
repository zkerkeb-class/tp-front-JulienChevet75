import { useState, useRef } from 'react';
import { useSearchParams } from 'react-router';
import './App.css';
import BookCover from './components/BookCover';
import BookPages from './components/BookPages';

function App() {
  const [searchParams] = useSearchParams();
  const [bookOpen, setBookOpen] = useState(searchParams.get('open') === 'true');
  const audioRef = useRef(null);

  const handleOpen = () => {
    setBookOpen(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  };

  const handleClose = () => {
    setBookOpen(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="gameboy-app">
      <audio ref={audioRef} src="/generique_pokemon.mp3" loop />
      {bookOpen ? (
        <BookPages onClose={handleClose} />
      ) : (
        <BookCover onOpen={handleOpen} />
      )}
    </div>
  );
}

export default App;
