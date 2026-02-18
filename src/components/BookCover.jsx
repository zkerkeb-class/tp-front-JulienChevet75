const BookCover = ({ onOpen }) => (
  <div className="book-cover-container">
    <div className="book-cover">
      <img src="/cover_pokemon1.png" alt="Mon Pokédex TCG" className="cover-image" />
      <div className="cover-content">
        <h1 className="pokedex-title">MON POKEDEX</h1>
        <button className="open-book-btn" onClick={onOpen}>
          OUVRIR
        </button>
      </div>
    </div>
  </div>
);

export default BookCover;