
import './Search.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
function Search() {

    const Background = {
        normal: "linear-gradient(to bottom, rgba(183, 183, 183, 0.94), rgba(142, 142, 142, 0.94), rgba(102, 102, 102, 0.94))",
        fire: "linear-gradient(to bottom, rgba(255, 152, 67, 0.94), rgba(230, 94, 25, 0.94), rgba(191, 74, 12, 0.94))",
        water: "linear-gradient(to bottom, rgba(100, 181, 246, 0.94), rgba(33, 150, 243, 0.94), rgba(25, 118, 210, 0.94))",
        grass: "linear-gradient(to bottom, rgba(129, 199, 132, 0.94), rgba(76, 175, 80, 0.94), rgba(56, 142, 60, 0.94))",
        electric: "linear-gradient(to bottom, rgba(185, 169, 30, 0.94), rgba(213, 178, 0, 0.94), rgba(255, 160, 0, 0.94))",
        ice: "linear-gradient(to bottom, rgba(128, 222, 234, 0.94), rgba(77, 208, 225, 0.94), rgba(38, 198, 218, 0.94))",
        fighting: "linear-gradient(to bottom, rgba(244, 81, 30, 0.94), rgba(216, 67, 21, 0.94), rgba(191, 54, 12, 0.94))",
        poison: "linear-gradient(to bottom, rgba(186, 104, 200, 0.94), rgba(171, 71, 188, 0.94), rgba(142, 36, 170, 0.94))",
        ground: "linear-gradient(to bottom, rgba(215, 204, 200, 0.94), rgba(187, 170, 164, 0.94), rgba(141, 110, 99, 0.94))",
        flying: "linear-gradient(to bottom, rgba(144, 202, 249, 0.94), rgba(100, 181, 246, 0.94), rgba(66, 165, 245, 0.94))",
        psychic: "linear-gradient(to bottom, rgba(244, 143, 177, 0.94), rgba(240, 98, 146, 0.94), rgba(233, 30, 99, 0.94))",
        bug: "linear-gradient(to bottom, rgba(174, 213, 129, 0.94), rgba(156, 204, 101, 0.94), rgba(139, 195, 74, 0.94))",
        rock: "linear-gradient(to bottom, rgba(161, 136, 127, 0.94), rgba(141, 110, 99, 0.94), rgba(109, 76, 65, 0.94))",
        ghost: "linear-gradient(to bottom, rgba(149, 117, 205, 0.94), rgba(126, 87, 194, 0.94), rgba(103, 58, 183, 0.94))",
        dragon: "linear-gradient(to bottom, rgba(121, 134, 203, 0.94), rgba(92, 107, 176, 0.94), rgba(63, 81, 181, 0.94))",
        dark: "linear-gradient(to bottom, rgba(117, 117, 117, 0.94), rgba(97, 97, 97, 0.94), rgba(66, 66, 66, 0.94))",
        steel: "linear-gradient(to bottom, rgba(207, 216, 220, 0.94), rgba(176, 188, 197, 0.94), rgba(144, 164, 174, 0.94))",
        fairy: "linear-gradient(to bottom, rgba(248, 187, 208, 0.94), rgba(244, 143, 177, 0.94), rgba(236, 64, 122, 0.94))",
        stellar: "linear-gradient(to bottom, rgba(255, 238, 88, 0.94), rgba(251, 192, 45, 0.94), rgba(245, 127, 23, 0.94))",
    };


    const [searchvalue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [allnamelist, setAllNameList] = useState([]);
    const [resultstoshow, setresults] = useState([])
    async function getdataall() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
        const data = await response.json();
        setSearchResults(data.results);
        const tempdata = data.results;


        setAllNameList(tempdata.map((object, index) => {
            const tempid = index + 1;
            return { name: object.name, id: tempid, image: `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${tempid.toString().padStart(3, "0")}.png` }
        }))
    }

    useEffect(() => {
        if (searchResults.length === 0) {
            getdataall();
        }
    }, [])




    async function getpokemontype(Arrayofobjects_with_id) {

        const Arrayofobjects_with_id_type_and_name = await Promise.all(Arrayofobjects_with_id.map(async (object_with_id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${object_with_id.id}`);
            const data = await response.json();

            return { name: object_with_id.name, id: object_with_id.id, type: data.types[0].type.name, image: object_with_id.image }
        })
        )
        return Arrayofobjects_with_id_type_and_name
    }



    useEffect(() => {
        if (allnamelist.length === 1025 && searchvalue.length > 0) {
            // Filter Pokémon names that include the search value
            const filterednames = allnamelist.filter(name => name.name.includes(searchvalue));


            // Take only the top 15 matches
            const showresults = filterednames.slice(0, 15);

            // Fetch Pokémon types and update state

            getpokemontype(showresults).then((data) => {
                setresults(data);
            });

        }
    }, [searchvalue, allnamelist]); // Ensure dependencies are properly included









    return (
        <div className="Search-PokemonDetails-searchbar">
            <input
                id="search"
                className="Search-PokemonDetails-search"
                type="search"
                placeholder="Search by Pokémon name or ID"
                list="pokemon-list"
                autoComplete="off"
                value={searchvalue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <datalist id='pokemon-list'>

            </datalist>
            <div className="Search-search-results">

                {resultstoshow.map((pokemon, index) => {
                    return <NavLink to={`/pokemon/${pokemon.id}`} key={index}>
                        <div style={{ background: Background[pokemon.type] }} className="Search-pokemon-card">
                            <img src={pokemon.image} alt="Pokemon" />
                            <h3>{pokemon.name}</h3>
                            <p>ID #{pokemon.id}</p>
                        </div>
                    </NavLink>
                })}


                {/* <!-- More cards... --> */}
            </div>
        </div>
    );
}

export default Search;