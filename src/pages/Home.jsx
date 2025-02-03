import "./Home.css";
import { useState, useEffect } from "react";
import ReturnRandomArrayofanynum from "../assets/fucntions";
import Hometext from "../Components/Hometext";
import Search from "../Components/search";
import Footer from "../Components/Footer";
import MainPage from "../Components/MainPage";
import NewPokemonCard from "./NewPokemonCard";

function Home() {
    const anynum = 20;      // Number of pokemons to be displayed Max is 90
    const [randomids, setRandomids] = useState(ReturnRandomArrayofanynum(anynum));



    const [Allpokemons, setAllpokemons] = useState([]);


    async function GetData(id, index) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        const imgid = data.id.toString().padStart(3, "0");
        const height = data.height / 10;
        const weight = data.weight / 10;
        const obj = {
            serial: index,
            id: data.id,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            // sprite1: `https://img.pokemondb.net/artwork/large/${data.name}.jpg`,
            sprite1: `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${imgid}.png`,
            sprite2: data.sprites.front_default,
            sprite3: data.sprites.back_default,
            type1: data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1),
            type2: data.types[1] ? data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1) : "No second type",
            height: height,
            weight: weight
        };

        Allpokemons.push(obj);

        if (Allpokemons.length === anynum) {
            setAllpokemons(Allpokemons);
        }
        else {

        }

    }

    useEffect(
        () => {
            randomids.length > 0 ? randomids.map((id, index) => GetData(id, index)) : console.log("No data");
            setAllpokemons([]);
        }, [randomids]
    )


   
    return (
        <MainPage islinergradient={"linear-gradient(135deg, rgba(18, 21, 35, 0.97), rgba(31, 36, 56, 0.95), rgba(44, 50, 77, 0.93))"} >
            <Hometext />
            <div className="Home-searchcontainer">
            <Search/>
            </div>
            <main>
                <div className="Home-pokemon-cards">
                    {(Allpokemons.map((pokemon) => {
                        return (

                            <NewPokemonCard
                                key={pokemon.serial}
                                id={`#${pokemon.id.toString().padStart(3, "0")}`}
                                pokemonname={pokemon.name}
                                img = {pokemon.sprite1}
                                Type1={pokemon.type1}
                                Type2={pokemon.type2}
                                height={`${pokemon.height} m`}
                                weight={`${pokemon.weight} kg`}
                                link = {pokemon.id}

                            />


                        );
                    }))}

                </div>
            </main>
            <Footer/>
         </MainPage>


    )
}

export default Home;