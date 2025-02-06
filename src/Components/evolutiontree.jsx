import React, { useState } from "react";
import "./evolutiontree.css"; // Import the CSS file
import NewPokemonCard from '../pages/NewPokemonCard.jsx'
const EvolutionTree = ({ evolutionData }) => {
  const [isHorizontal, setIsHorizontal] = useState(false);

 
  if (!evolutionData) return <p>No evolution data available.</p>;

  const renderEvolution = (pokemon) => {
    if (!pokemon) return null; //  Prevents crashes if `pokemon` is undefined
    
    return (
      <div className="evolution-node">
        <NewPokemonCard
        key = {pokemon.id}
        id={`#${pokemon.id.toString().padStart(3, "0")}`}
        pokemonname={pokemon.name}
        img = {pokemon.sprite1}
        Type1={pokemon.type1}
        Type2={pokemon.type2}
        height={`${pokemon.height} m`}
        weight={`${pokemon.weight} kg`}
        link = {pokemon.id}
        ></NewPokemonCard>
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/* <div className="pokemon-card">
          <img src={pokemon.sprite1} alt={pokemon.name} className="pokemon-image" />
          <h3 className="pokemon-name">{pokemon.name}</h3>
          <p className="pokemon-type">
            {pokemon.type1} {pokemon.type2 !== "No second type" ? `/ ${pokemon.type2}` : ""}
          </p>
        </div> */}
  
        {/*  Added check to prevent crashes */}
        {pokemon.variations && pokemon.variations.length > 0 && (
          <div className="evolution-branches">
            <div className="branch-line"></div>
            {pokemon.variations.map((variation, index) => (
              <div key={index} className="evolution-child">
                {renderEvolution(variation)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  

  return (
    <div className={`evolution-container ${isHorizontal ? "horizontal" : ""}`}>
      <h2 className="title">Evolution Chain</h2>
      
      {/* Toggle Layout Button */}
      <button className="toggle-button" onClick={() => setIsHorizontal(!isHorizontal)}>
        Switch to {isHorizontal ? "Vertical" : "Horizontal"} Layout
      </button>

      
      {renderEvolution(evolutionData)}

      {/* Modal for Pokémon Details */}
      {/* {selectedPokemon && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedPokemon.name}</h2>
            <img src={selectedPokemon.sprite1} alt={selectedPokemon.name} />
            <p>Type: {selectedPokemon.type1} {selectedPokemon.type2 !== "No second type" ? `/ ${selectedPokemon.type2}` : ""}</p>
            <p>Height: {selectedPokemon.height}m</p>
            <p>Weight: {selectedPokemon.weight}kg</p>
            <button onClick={() => setSelectedPokemon(null)}>Close</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default EvolutionTree;
