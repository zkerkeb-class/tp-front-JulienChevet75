
import { useState } from 'react';

import PokeList from './pokelist';

const BookPages = ({ onClose }) => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const totalSpreads = 9;

  const leftPage = currentSpread * 2 + 1;
  const rightPage = currentSpread * 2 + 2;

  return (
    <div className="book-pages-container">
      <button className="close-book-btn" onClick={onClose}>✕</button>
      
      <div className="book-spine"></div>
      
      <div className="book-spread">
        {/* PAGE GAUCHE */}
        <div className="book-page left-page">
          <div className="page-header">
            <h3>Page {leftPage}</h3>
          </div>
          <PokeList page={leftPage} />  {/* TES 10 POKEMONS ! */}
        </div>

        {/* PAGE DROITE */}
        <div className="book-page right-page">
          <div className="page-header">
            <h3>Page {rightPage}</h3>
          </div>
          <PokeList page={rightPage} />  {/* TES 10 POKEMONS ! */}
        </div>
      </div>

      <div className="page-controls">
        <button 
          className="page-turn-btn prev"
          onClick={() => setCurrentSpread(Math.max(0, currentSpread - 1))}
          disabled={currentSpread === 0}
        >← Précédent</button>
        
        <span className="page-indicator">
          {currentSpread + 1} / {totalSpreads}
        </span>
        
        <button 
          className="page-turn-btn next"
          onClick={() => setCurrentSpread(Math.min(totalSpreads - 1, currentSpread + 1))}
          disabled={currentSpread === totalSpreads - 1}
        >Suivant →</button>
      </div>
    </div>
  );
};

export default BookPages;
