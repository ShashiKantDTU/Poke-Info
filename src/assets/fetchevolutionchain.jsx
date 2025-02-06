async function GetPokemonEvolutions(pokemonName) {
    try {
        const speciesResp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}/`);
        const speciesData = await speciesResp.json();
        const chainUrl = speciesData.evolution_chain.url;
        const evolutionResp = await fetch(chainUrl);
        const evolutionData = await evolutionResp.json();

        function formatEvolutions(chain) {
            const node = {
                name: chain.species.name,
                variations: []
            };

            if (chain.evolves_to.length > 0) {
                if (chain.evolves_to.length === 1) {
                    // Single evolution path
                    node.variations.push(formatEvolutions(chain.evolves_to[0]));
                } else {
                    // Multiple possible evolutions (branched)
                    node.variations = chain.evolves_to.map(evo => ({
                        name: evo.species.name,
                        variations: formatEvolutions(evo).variations
                    }));
                }
            }
            return node;
        }

        return formatEvolutions(evolutionData.chain);
    } catch(error) {
        console.error("Error fetching Pokemon evolutions:", error);
        return null;
    }
}
export default GetPokemonEvolutions;

// comment to remeber this is a async fucntion
// Usage example:
// getPokemonEvolutions("oddish").then(evolutionTree => {
//     console.log("Formatted Evolution Tree:");
//     console.log(evolutionTree)
// });
