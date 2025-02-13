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
    </div>
  );
};

export default EvolutionTree;
