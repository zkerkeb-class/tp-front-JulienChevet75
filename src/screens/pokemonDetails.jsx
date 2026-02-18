import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import './pokemonDetails.css';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/pokemons/${id}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur fetch:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="pokemon-details">Chargement...</div>;
  if (!pokemon) return <div className="pokemon-details">Pokémon non trouvé</div>;

  const primaryType = pokemon.type?.[0]?.toLowerCase() || 'normal';

  return (
    <div className="pokemon-details">
      <div className="detail-card" data-type={primaryType}>
        <div className="detail-header">{pokemon.name.french}</div>

        {}
        <div className="detail-image">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name.french}
          />
        </div>

        <div className="detail-stats">
          <div className="stat-section">
            <h3>Base Stats</h3>
            <div className="stat-row">HP <span className="stat-value">{pokemon.base.HP}</span></div>
            <div className="stat-row">Attack <span className="stat-value">{pokemon.base.Attack}</span></div>
            <div className="stat-row">Defense <span className="stat-value">{pokemon.base.Defense}</span></div>
          </div>
          <div className="stat-section">
            <h3>Advanced</h3>
            <div className="stat-row">Sp. Atk <span className="stat-value">{pokemon.base.SpecialAttack}</span></div>
            <div className="stat-row">Sp. Def <span className="stat-value">{pokemon.base.SpecialDefense}</span></div>
            <div className="stat-row">Speed <span className="stat-value">{pokemon.base.Speed}</span></div>
          </div>
          <div className="types">
            {pokemon.type.map((t, i) => (
              <div key={i} className={`type-badge poke-type-${t.toLowerCase()}`}>{t}</div>
            ))}
          </div>
        </div>
      </div>

      {}
      <Link to="/?open=true" className="back-btn">← Retour Pokédex</Link>
    </div>
  );
};

export default PokemonDetails;
