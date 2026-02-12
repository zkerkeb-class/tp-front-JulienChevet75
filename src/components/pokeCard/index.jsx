import { Link } from "react-router";
import './index.css';

const PokeCard = ({ pokemon }) => {
  const primaryType = pokemon.type[0].toLowerCase();

  return (
    <Link to={`/pokemonDetails/${pokemon.id}`}>
      <div className="poke-card" data-type={primaryType}>
        <div className={`poke-card-header poke-type-${primaryType}`}>
          <h3 className="poke-title">{pokemon.name.french}</h3>
        </div>
        <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
          alt={pokemon.name.french}
          style={{width: '120px', height: '120px', objectFit: 'contain'}}
        />
        <div className="poke-stat-row">
          HP: {pokemon.base.HP} | ATK: {pokemon.base.Attack}
        </div>
      </div>
    </Link>
  );
};

export default PokeCard;
