import "./PokemonDetails.css";
import MainPage from '../Components/MainPage';
import Search from "../Components/search";
import HeroSection from "../Components/HeroSection";
import { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";

function PokemonDetails() {

    const parameters = useParams();
    const [pokemonid ,setpokemonid  ] = useState(parameters.id)
    useEffect(()=>{
        setpokemonid(parameters.id)
    },[parameters.id])
    

    const image = "/firebg.jpg"
    const TYPE_COLORS = {
        Normal: "rgba(200, 200, 200, 0.8)",
        Fire: "rgba(255, 0, 0, 0.8)",
        Water: "rgba(53, 167, 224, 0.8)",
        Grass: "rgba(0, 128, 0, 0.8)",
        Electric: "rgba(159, 159, 26, 0.8)",
        Ice: "rgba(173, 216, 230, 0.8)",
        Fighting: "rgba(255, 165, 0, 0.8)",
        Poison: "rgba(128, 0, 128, 0.8)",
        Ground: "rgba(165, 42, 42, 0.8)",
        Flying: "rgba(135, 206, 235, 0.8)",
        Psychic: "rgba(255, 192, 203, 0.8)",
        Bug: "rgba(0, 255, 0, 0.8)",
        Rock: "rgba(128, 128, 128, 0.8)",
        Ghost: "rgba(75, 0, 130, 0.8)",
        Dragon: "rgba(0, 0, 139, 0.8)",
        Dark: "rgba(0, 0, 0, 0.8)",
        Steel: "rgba(192, 192, 192, 0.8)",
        Fairy: "rgba(255, 182, 193, 0.8)",
        Stellar: "rgba(255, 215, 0, 0.8)"
    };


    useEffect(() => {
        const searchbar = document.getElementById("search");

        searchbar.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                console.log(searchbar.value);
                console.log("Enter key pressed");
            }
        });
    }, []);

    
    // Image svg files for herosection component

    
const pokemontypes = {
    Electric: {
        src: "/icons/electric.svg",
        bgcolor: "#F2D94E",
        boxshadow: "0 0 20px #F2D94E"
    },
    electric: {
        src: "/icons/electric.svg",
        bgcolor: "#F2D94E",
        boxshadow: "0 0 20px #F2D94E"
    },
    Fire: {
        src: "/icons/fire.svg",
        bgcolor: "#FBA54C",
        boxshadow: "0 0 20px #FBA54C"
    },
    fire: {
        src: "/icons/fire.svg",
        bgcolor: "#FBA54C",
        boxshadow: "0 0 20px #FBA54C"
    },
    Water: {
        src: "/icons/water.svg",
        bgcolor: "#539DDF",
        boxshadow: "0 0 20px #539DDF"
    },
    water: {
        src: "/icons/water.svg",
        bgcolor: "#539DDF",
        boxshadow: "0 0 20px #539DDF"
    },
    Grass: {
        src: "/icons/grass.svg",
        bgcolor: "#5FBD58",
        boxshadow: "0 0 20px #5FBD58"
    },
    grass: {
        src: "/icons/grass.svg",
        bgcolor: "#5FBD58",
        boxshadow: "0 0 20px #5FBD58"
    },
    Ice: {
        src: "/icons/ice.svg",
        bgcolor: "#75D0C1",
        boxshadow: "0 0 20px #75D0C1"
    },
    ice: {
        src: "/icons/ice.svg",
        bgcolor: "#75D0C1",
        boxshadow: "0 0 20px #75D0C1"
    },
    Fighting: {
        src: "/icons/fighting.svg",
        bgcolor: "#D3425F",
        boxshadow: "0 0 20px #D3425F"
    },
    fighting: {
        src: "/icons/fighting.svg",
        bgcolor: "#D3425F",
        boxshadow: "0 0 20px #D3425F"
    },
    Poison: {
        src: "/icons/poison.svg",
        bgcolor: "#B763CF",
        boxshadow: "0 0 20px #B763CF"
    },
    poison: {
        src: "/icons/poison.svg",
        bgcolor: "#B763CF",
        boxshadow: "0 0 20px #B763CF"
    },
    Ground: {
        src: "/icons/ground.svg",
        bgcolor: "#DA7C4D",
        boxshadow: "0 0 20px #DA7C4D"
    },
    ground: {
        src: "/icons/ground.svg",
        bgcolor: "#DA7C4D",
        boxshadow: "0 0 20px #DA7C4D"
    },
    Flying: {
        src: "/icons/flying.svg",
        bgcolor: "#A1BBEC",
        boxshadow: "0 0 20px #A1BBEC"
    },
    flying: {
        src: "/icons/flying.svg",
        bgcolor: "#A1BBEC",
        boxshadow: "0 0 20px #A1BBEC"
    },
    Psychic: {
        src: "/icons/psychic.svg",
        bgcolor: "#FA8581",
        boxshadow: "0 0 20px #FA8581"
    },
    psychic: {
        src: "/icons/psychic.svg",
        bgcolor: "#FA8581",
        boxshadow: "0 0 20px #FA8581"
    },
    Bug: {
        src: "/icons/bug.svg",
        bgcolor: "#92BC2C",
        boxshadow: "0 0 20px #92BC2C"
    },
    bug: {
        src: "/icons/bug.svg",
        bgcolor: "#92BC2C",
        boxshadow: "0 0 20px #92BC2C"
    },
    Rock: {
        src: "/icons/rock.svg",
        bgcolor: "#C9BB8A",
        boxshadow: "0 0 20px #C9BB8A"
    },
    rock: {
        src: "/icons/rock.svg",
        bgcolor: "#C9BB8A",
        boxshadow: "0 0 20px #C9BB8A"
    },
    Ghost: {
        src: "/icons/ghost.svg",
        bgcolor: "#5F6DBC",
        boxshadow: "0 0 20px #5F6DBC"
    },
    ghost: {
        src: "/icons/ghost.svg",
        bgcolor: "#5F6DBC",
        boxshadow: "0 0 20px #5F6DBC"
    },
    Dragon: {
        src: "/icons/dragon.svg",
        bgcolor: "#0C69C8",
        boxshadow: "0 0 20px #0C69C8"
    },
    dragon: {
        src: "/icons/dragon.svg",
        bgcolor: "#0C69C8",
        boxshadow: "0 0 20px #0C69C8"
    },
    Dark: {
        src: "/icons/dark.svg",
        bgcolor: "#595761",
        boxshadow: "0 0 20px #595761"
    },
    dark: {
        src: "/icons/dark.svg",
        bgcolor: "#595761",
        boxshadow: "0 0 20px #595761"
    },
    Steel: {
        src: "/icons/steel.svg",
        bgcolor: "#5695A3",
        boxshadow: "0 0 20px #5695A3"
    },
    steel: {
        src: "/icons/steel.svg",
        bgcolor: "#5695A3",
        boxshadow: "0 0 20px #5695A3"
    },
    Fairy: {
        src: "/icons/fairy.svg",
        bgcolor: "#EE90E6",
        boxshadow: "0 0 20px #EE90E6"
    },
    fairy: {
        src: "/icons/fairy.svg",
        bgcolor: "#EE90E6",
        boxshadow: "0 0 20px #EE90E6"
    },
    Normal: {
        src: "/icons/normal.svg",
        bgcolor: "#A0A29F",
        boxshadow: "0 0 20px #A0A29F"
    },
    normal: {
        src: "/icons/normal.svg",
        bgcolor: "#A0A29F",
        boxshadow: "0 0 20px #A0A29F"
    }
}




    function searchclick() {
        console.log(document.getElementById("search").value);
    }

    const [isdescription, setisdescription] = useState(true);
    const [isstats, setisstats] = useState(false);
    const [ismoves, setismoves] = useState(false);
    const [iseffects, setiseffects] = useState(false);
    const [isevolutions, setisevolutions] = useState(false);


    const description = document.getElementsByClassName("PokemonDetails-descriptionbutton")
    const stats = document.getElementsByClassName("PokemonDetails-statsbtn")
    const moves = document.getElementsByClassName("PokemonDetails-movesbtn")
    const effects = document.getElementsByClassName("PokemonDetails-effectsbtn")
    const evolutions = document.getElementsByClassName("PokemonDetails-evolutionsbtn")



    function handledescriptionclick() {

        if (!isdescription) {

            console.log("description clicked set true");
            setisdescription(true);
            setisstats(false);
            setismoves(false);
            setiseffects(false);
            setisevolutions(false);

        }
        else {
        }
    }

    function handlestatsclick() {
        if (!isstats) {
            console.log("stats clicked set true");
            setisstats(true);
            setisdescription(false);
            setismoves(false);
            setiseffects(false);
            setisevolutions(false);

        }
        else {
        }
    }

    function handlemovesclick() {
        if (!ismoves) {
            console.log("moves clicked set true");
            setismoves(true);
            setisdescription(false);
            setisstats(false);
            setiseffects(false);
            setisevolutions(false);

        }
        else {
        }
    }

    function handleeffectsclick() {
        if (!iseffects) {
            console.log("effects clicked set true");
            setiseffects(true);
            setisdescription(false);
            setisstats(false);
            setismoves(false);
            setisevolutions(false);


        }
        else {
        }
    }

    function handleevolutionsclick() {
        if (!isevolutions) {
            console.log("evolutions clicked set true");
            setisevolutions(true);
            setisdescription(false);
            setisstats(false);
            setismoves(false);
            setiseffects(false);

        }
        else {
        }
    }






    const [fetchingdata, setDatafetch] = useState(false);
    const [data, setData] = useState({});
    const [themecolor, setThemecolor] = useState();
    function cleanHTML(inputString) {
        // Regular expression to match escape sequences like \n, \f, etc.
        const escapeRegex = /\\[nrfb"']/g;

        // Replace escape sequences with corresponding HTML characters or an empty string
        const cleanedString = inputString.replace(escapeRegex, (match) => {
            switch (match) {
                case '\\n': return ' ';  // Replace newline with space
                case '\\r': return '';   // Replace carriage return with empty string
                case '\\f': return '';   // Replace form feed with empty string
                case '\\b': return '';   // Replace backspace with empty string
                case '\\"': return '"';  // Replace escaped quote with a single quote
                case "\\'": return "'";  // Replace escaped single quote with single quote
                case '\u000c': return ' ';    // Replace form feed with space string
                default: return match;  // Keep other cases as they are
            }
        });

        return cleanedString.replace(/\u000C/g, ' ');
    }



    async function GetData(id) {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        const imgid = data.id.toString().padStart(3, "0");
        const height = data.height / 10;
        const weight = data.weight / 10;

        async function getPokemonDescription(pokemonId) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
                const data = await response.json();

                // Filter out entries in English language
                const englishEntries = data.flavor_text_entries.filter(entry => entry.language.name === "en");

                // Combine the text from different entries into a longer description
                let fullDescription = englishEntries.map(entry => entry.flavor_text).join(" ");

                // Split into words
                let words = fullDescription.split(" ");

                // Get the first 50 words
                let first150Words = words.slice(0, 150).join(" ");
                let firs50words = words.slice(0, 50).join(" ");
                let nextwords = words.slice(50, words.length).join(" ");
                // Find the index of the first punctuation mark after 50 words (., !, ?)
                const punctuationIndex = nextwords.search(/[.!?]/);

                // If punctuation is found, slice the string to that index, else just add a period
                let limitedDescription = punctuationIndex !== -1
                    ? nextwords.slice(0, punctuationIndex + 1)
                    : nextwords + ".";
                let finaldescription = firs50words + limitedDescription;
                const cleanedDescription = cleanHTML(finaldescription);
                return (cleanedDescription);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }


        const obj = {
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            // sprite1: `https://img.pokemondb.net/artwork/large/${data.name}.jpg`,
            sprite1: `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${imgid}.png`,
            sprite2: data.sprites.front_default,
            sprite3: data.sprites.back_default,
            type1: data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1),
            type2: data.types[1] ? data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1) : "No second type",
            height: height,
            weight: weight,
            getstats: data.stats,
            pokedescription: await getPokemonDescription(pokemonid)
        };
        setThemecolor(TYPE_COLORS[obj.type1]);
        const statsObject = data.stats.reduce((acc, stat) => {
            acc[stat.stat.name] = stat.base_stat;
            return acc;
        }, {});

        statsObject.spattack = statsObject["special-attack"];
        delete statsObject["special-attack"];
        statsObject.spdefense = statsObject["special-defense"];
        delete statsObject["special-defense"];
        obj.stats = statsObject;

        return obj;

    }
    useEffect(() => {
        setDatafetch(false);
    }, [pokemonid]);


    useEffect(() => {
        if (!fetchingdata) {
            GetData(pokemonid).then((res) => {
                setData(res);
                setDatafetch(true);

            });
        }

    }, [fetchingdata, pokemonid]);

    console.log(data);

    return (
        <div className="supercontainer">
            <MainPage bgposition={"scroll"} bgsize={"cover"} img={image} islinergradient={"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"}>

                <div className='PokemonDetails-MainPokemonDetailscontainer'>

                    <div className="PokemonDetails-navigationheader">
                        <div className="PokemonDetails-uppercontainer">
                            <div className="PokemonDetails-Searchbarcontainer">
                                <Search/>
                            </div>
                            <div className="PokemonDetails-Next evolution button container pokemon-details-Navbutton">
                                <NavLink style={{ color: themecolor }}>Next Evolution<img src="/arrow-right-solid.svg" alt="" /></NavLink>
                            </div>

                        </div>
                        <div className="PokemonDetails-Lowercontainer pokemon-details-Navbutton">
                            <div className="PokemonDetails-back">
                                <NavLink style={{ color: themecolor }} to={"/"}><img src="/arrow-left-solid.svg" alt="" />Go Back</NavLink>


                            </div>
                            <div className="PokemonDetails-Lowercontainer-PrevAndBack pokemon-details-Navbutton">
                                <NavLink style={{ color: themecolor }} to={`/pokemon/${Number(pokemonid) - 1}`}><img src="/arrow-left-solid.svg" alt="" /> Previus Pokemon</NavLink>

                                <NavLink style={{ color: themecolor }} to={`/pokemon/${Number(pokemonid) + 1}`}>Next Pokemon<img src="/arrow-right-solid.svg" alt="" /></NavLink>

                            </div>



                        </div>
                    </div>





                    <div className="PokemonDetails-pokemonDetails">
                        <HeroSection pokemontypes ={pokemontypes} data = {data} id = {parameters.id} />
                    </div>

                </div>
                <Footer />
            </MainPage>
        </div>
    );
}

export default PokemonDetails;