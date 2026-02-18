import { useState, useEffect } from "react";
import PokeCard from "../pokeCard";

import './index.css';

const PokeList = ({ page = 1 }) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/pokemons?page=${page}&limit=9`)
            .then((response) => response.json())
            .then((data) => {
                console.log(`Page ${page}:`, data);
                setPokemons(data.pokemons);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erreur:", error);
                setLoading(false);
            });
    }, [page]);

    if (loading) {
        return <p>Chargement...</p>
    }

    return (
        <div  className="poke-list-container">
            <h2>Liste des Pokémon</h2>
            <ul className="poke-list">
                {pokemons.map((pokemon, index) => (
                    <PokeCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </ul>
        </div>
    );
};

export default PokeList;
