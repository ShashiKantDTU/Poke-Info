import "./PokemonDetails.css";
import MainPage from '../Components/MainPage';
import Search from "../Components/search";
import { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
function PokemonDetails() {

    const parameters = useParams();

    const pokemonid = parameters.id;

    const image = "/bluebg.jpg"
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
            <MainPage bgposition={"scroll"} bgsize={"cover"} img={image} islinergradient={"linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"}>

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
                        <div className="PokemonDetails-menu">
                            <div className="PokemonDetails-menucontainer">
                                <div className="PokemonDetails-menu-item ">
                                    <button className="PokemonDetails-menulink PokemonDetails-descriptionbutton" onClick={handledescriptionclick}>Description</button>
                                </div>
                                <div className="PokemonDetails-menu-item PokemonDetails-Stats">
                                    <button className="PokemonDetails-menulink PokemonDetails-statsbtn" onClick={handlestatsclick}>Stats</button>
                                </div>
                                <div className="PokemonDetails-menu-item PokemonDetails-Moves">
                                    <button className="PokemonDetails-menulink PokemonDetails-movesbtn" onClick={handlemovesclick} >Moves</button>
                                </div>
                                <div className="PokemonDetails-menu-item PokemonDetails-Effects">
                                    <button className="PokemonDetails-menulink PokemonDetails-effectsbtn" onClick={handleeffectsclick}>Effects</button>
                                </div>
                                <div className="PokemonDetails-menu-item PokemonDetails-Evolutions" onClick={handleevolutionsclick}>
                                    <button className="PokemonDetails-menulink PokemonDetails-evolutionsbtn">Evolutions</button>
                                </div>
                            </div>
                        </div>
                        <div className="PokemonDetails-details">
                            <div className="PokemonDetails-detailscontainer" style={{ width: isdescription ? "100%" : "0", opacity: isdescription ? "1" : "0" }} >  {/*Add style here for colaps of DESCRIPTION container */}
                                <div className="PokemonDetails-detailcontainer-description" style={{ color: data.type1 === "Fire" ? "white" : "black" }}>
                                    <div className="PokemonDetails-detailcontainer-pokemonname">
                                        {data.name}
                                    </div>
                                    <div className="PokemonDetails-detailcontainer-pokemonidandtype">
                                        <p className="PokemonDetails-id">{`#ID ${String(pokemonid).padStart(3, 0)}`}</p>
                                        <p className="PokemonDetails-type1">{data.type1}</p>
                                        <p className="PokemonDetails-type2">{data.type2}</p>
                                    </div>
                                    <div className="PokemonDetails-detailcontainer-pokemondescription">
                                        <div className="overflow">
                                            <p className="PokemonDetails-description">{data.pokedescription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="PokemonDetails-detailcontainer-stats" style={{ width: isstats ? "100%" : "0", opacity: isstats ? "1" : "0" }} > {/*Add style here for colaps of STATS container */}
                            <div className="PokemonDetails-detailcontainer-statscontainer" style={{ color: data.type1 === "Fire" ? "white" : "black" }}>
                                    <div className="PokemonDetails-detailcontainer-statscontainer-title">
                                        <p>Base Stats</p>
                                    </div>



                                    <div className="PokemonDetails-detailcontainer-statscontainer-Hp PokemonDetails-detailcontainer-statscontainer-stats">
                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-name">
                                            <div className="PokemonDetails-icons" ><img src="/hp.svg" alt="HP.img" /></div>
                                            <div className="PokemonDetails-Hp-text" >Hp</div>
                                        </div>


                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual">
                                            <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetwhitebg">
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetcolorbg PokemonDetails-detailcontainer-statscontainer-stats-visual-Hp" style={{ width: `${((Number(data?.stats?.hp) || 0) / 255) * 100}%` }}>
                                                    {console.log(data?.stats?.hp)}
                                                </div>
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetborder">
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                    <div className="PokemonDetails-detailcontainer-statscontainer-Attack PokemonDetails-detailcontainer-statscontainer-stats">

                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-name">
                                            <div className="PokemonDetails-icons" ><img src="/attack.svg" alt="Attack.img" /></div>
                                            <div className="PokemonDetails-Attack-text" >Attack</div>

                                        </div>



                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual">
                                            <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetwhitebg">
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetcolorbg PokemonDetails-detailcontainer-statscontainer-stats-visual-Attack" style={{ width: `${((Number(data?.stats?.attack) || 0) / 255) * 100}%` }}>

                                                </div>
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetborder">
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>



                                    <div className="PokemonDetails-detailcontainer-statscontainer-Defense PokemonDetails-detailcontainer-statscontainer-stats" >


                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-name">
                                            <div className="PokemonDetails-icons" ><img src="/Defense.svg" alt="Defense.img" /></div>
                                            <div className="PokemonDetails-Defense-text" >Defense</div>
                                        </div>



                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual">
                                            <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetwhitebg">
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetcolorbg PokemonDetails-detailcontainer-statscontainer-stats-visual-Defense" style={{ width: `${((Number(data?.stats?.defense) || 0) / 255) * 100}%` }}>

                                                </div>
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetborder">
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>



                                    <div className="PokemonDetails-detailcontainer-statscontainer-SP-Attack PokemonDetails-detailcontainer-statscontainer-stats">


                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-name">
                                            <div className="PokemonDetails-icons" ><img src="/sp-attack.png" alt="SP-Attack.img" /></div>
                                            <div className="PokemonDetails-SP-Attack-text" >SP Attack</div>
                                        </div>



                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual">
                                            <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetwhitebg">
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetcolorbg PokemonDetails-detailcontainer-statscontainer-stats-visual-SP-Attack" style={{ width: `${((Number(data?.stats?.spattack) || 0) / 255) * 100}%` }}>

                                                </div>
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetborder">
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>


                                    <div className="PokemonDetails-detailcontainer-statscontainer-SP-Defence PokemonDetails-detailcontainer-statscontainer-stats">



                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-name">
                                            <div className="PokemonDetails-icons" ><img src="/SP-Defense.svg" alt="SP-Defense.svg" /></div>
                                            <div className="PokemonDetails-SP-Defense-text" >SP Defense</div>
                                        </div>


                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual">
                                            <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetwhitebg">
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetcolorbg PokemonDetails-detailcontainer-statscontainer-stats-visual-SP-Defense" style={{ width: `${((Number(data?.stats?.spdefense) || 0) / 255) * 100}%` }}>

                                                </div>
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetborder">
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>



                                    <div className="PokemonDetails-detailcontainer-statscontainer-Speed PokemonDetails-detailcontainer-statscontainer-stats">


                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-name">
                                            <div className="PokemonDetails-icons" ><img src="/speed.png" alt="Speed.png" /></div>
                                            <div className="PokemonDetails-Speed-text" >Speed</div>
                                        </div>


                                        <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual">
                                            <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetwhitebg">
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetcolorbg PokemonDetails-detailcontainer-statscontainer-stats-visual-speed" style={{ width: `${((Number(data?.stats?.speed) || 0) / 255) * 100}%` }}>

                                                </div>
                                                <div className="PokemonDetails-detailcontainer-statscontainer-stats-visual-togetborder">
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                    <div className="getborder"></div>
                                                </div>


                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="PokemonDetails-detailcontainer-moves" style={{ width: ismoves ? "100%" : "0" }}> {/*Add style here for colaps of MOVES container */}
                                <div className="PokemonDetails-detailcontainer-movescontainer">

                                </div>
                            </div>
                            <div className="PokemonDetails-detailcontainer-effects" style={{ width: iseffects ? "100%" : "0" }}> {/*Add style here for colaps of EFFECTS container */}
                                <div className="PokemonDetails-detailcontainer-effectscontainer">

                                </div>
                            </div>
                            <div className="PokemonDetails-detailcontainer-evolutions" style={{ width: isevolutions ? "100%" : "0" }}> {/*Add style here for colaps of EVOLUTIONS container */}
                                <div className="PokemonDetails-detailcontainer-evolutionscontainer">

                                </div>
                            </div>

                        </div>
                        <div className="PokemonDetails-imagecontainer">
                            <div className="PokemonDetails-image">
                                <img src={data.sprite1} alt={data.name} />
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </MainPage>
        </div>
    );
}

export default PokemonDetails;