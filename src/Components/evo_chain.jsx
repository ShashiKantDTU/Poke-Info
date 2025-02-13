import './evo_chain.css'
import { useEffect, useState } from 'react'
import EvolutionTree from './evolutiontree.jsx'
import Loading from './loading'


function EvoChain(props) {
  const [evolutiondata, setevolutiondata] = useState({})
  const [isloading, setloading] = useState(true)
  const [currentactive, setcurrentacitve] = useState(1)
  const [card3, setcard3] = useState(1)


  useEffect(() => {
    const div3 = document.getElementById("evo-card3");
    const div2 = document.getElementById("evo-card2");
    const div1 = document.getElementById("evo-card1");

    function handleForwardClick() {
      setcurrentacitve(e => {
        if (e === 3) {
          let newE = e - 1;
          return newE < 1 ? 3 : newE
        } else {
          let newE = e + 1;
          return newE > 3 ? 1 : newE;
        }
      });
    }

    function handleBackwardClick() {
      setcurrentacitve(e => {
        if (e === 2) {
          let newE = e + 1;
          return newE > 3 ? 1 : newE;
        } else {
          let newE = e - 1;
          return newE < 1 ? 3 : newE;
        }
      });
    }

    function handlediv1click() {
      setcurrentacitve(e => {
        if (e === 3) {
          let newE = e + 1;
          return newE > 3 ? 1 : newE;
        } else {
          let newE = e - 1;
          return newE < 1 ? 3 : newE;
        }

      })
    }
    function handlediv3click() {
      if (currentactive !== 3) {
        setcurrentacitve(e => {
          if (e === 2) {
            let newE = e + 1;
            return newE > 3 ? 1 : newE;
          } else {
            let newE = e - 1;
            return newE < 1 ? 3 : newE;
          }
        });
      }
    }


    // Add event listeners
    if (div3) div3.addEventListener("click", handlediv3click);
    if (div2) div2.addEventListener("click", handleForwardClick);
    if (div1) div1.addEventListener("click", handlediv1click);

    // Cleanup - make sure to remove ALL event listeners that were added
    return () => {
      if (div3) div3.removeEventListener("click", handlediv3click);
      if (div2) div2.removeEventListener("click", handleForwardClick);
      if (div1) div1.removeEventListener("click", handlediv1click);

    };
  }, [evolutiondata, currentactive]);


  const Background = {
    Normal: "linear-gradient(to bottom, rgba(183, 183, 183, 0.94), rgba(142, 142, 142, 0.94), rgba(102, 102, 102, 0.94)), url('/Cardbg1.png')",
    Fire: "linear-gradient(to bottom, rgba(255, 152, 67, 0.94), rgba(230, 94, 25, 0.94), rgba(191, 74, 12, 0.94)), url('/Cardbg1.png')",
    Water: "linear-gradient(to bottom, rgba(100, 181, 246, 0.94), rgba(33, 150, 243, 0.94), rgba(25, 118, 210, 0.94)), url('/Cardbg1.png')",
    Grass: "linear-gradient(to bottom, rgba(129, 199, 132, 0.94), rgba(76, 175, 80, 0.94), rgba(56, 142, 60, 0.94)), url('/Cardbg1.png')",
    Electric: "linear-gradient(to bottom, rgba(185, 169, 30, 0.94), rgba(213, 178, 0, 0.94), rgba(255, 160, 0, 0.94)), url('/Cardbg1.png')",
    Ice: "linear-gradient(to bottom, rgba(128, 222, 234, 0.94), rgba(77, 208, 225, 0.94), rgba(38, 198, 218, 0.94)), url('/Cardbg1.png')",
    Fighting: "linear-gradient(to bottom, rgba(244, 81, 30, 0.94), rgba(216, 67, 21, 0.94), rgba(191, 54, 12, 0.94)), url('/Cardbg1.png')",
    Poison: "linear-gradient(to bottom, rgba(186, 104, 200, 0.94), rgba(171, 71, 188, 0.94), rgba(142, 36, 170, 0.94)), url('/Cardbg1.png')",
    Ground: "linear-gradient(to bottom, rgba(215, 204, 200, 0.94), rgba(187, 170, 164, 0.94), rgba(141, 110, 99, 0.94)), url('/Cardbg1.png')",
    Flying: "linear-gradient(to bottom, rgba(144, 202, 249, 0.94), rgba(100, 181, 246, 0.94), rgba(66, 165, 245, 0.94)), url('/Cardbg1.png')",
    Psychic: "linear-gradient(to bottom, rgba(244, 143, 177, 0.94), rgba(240, 98, 146, 0.94), rgba(233, 30, 99, 0.94)), url('/Cardbg1.png')",
    Bug: "linear-gradient(to bottom, rgba(174, 213, 129, 0.94), rgba(156, 204, 101, 0.94), rgba(139, 195, 74, 0.94)), url('/Cardbg1.png')",
    Rock: "linear-gradient(to bottom, rgba(161, 136, 127, 0.94), rgba(141, 110, 99, 0.94), rgba(109, 76, 65, 0.94)), url('/Cardbg1.png')",
    Ghost: "linear-gradient(to bottom, rgba(149, 117, 205, 0.94), rgba(126, 87, 194, 0.94), rgba(103, 58, 183, 0.94)), url('/Cardbg1.png')",
    Dragon: "linear-gradient(to bottom, rgba(121, 134, 203, 0.94), rgba(92, 107, 176, 0.94), rgba(63, 81, 181, 0.94)), url('/Cardbg1.png')",
    Dark: "linear-gradient(to bottom, rgba(117, 117, 117, 0.94), rgba(97, 97, 97, 0.94), rgba(66, 66, 66, 0.94)), url('/Cardbg1.png')",
    Steel: "linear-gradient(to bottom, rgba(207, 216, 220, 0.94), rgba(176, 188, 197, 0.94), rgba(144, 164, 174, 0.94)), url('/Cardbg1.png')",
    Fairy: "linear-gradient(to bottom, rgba(248, 187, 208, 0.94), rgba(244, 143, 177, 0.94), rgba(236, 64, 122, 0.94)), url('/Cardbg1.png')",
    Stellar: "linear-gradient(to bottom, rgba(255, 238, 88, 0.94), rgba(251, 192, 45, 0.94), rgba(245, 127, 23, 0.94)), url('/Cardbg1.png')",
  };





  const getBackgroundStyle = (type) => ({
    background: Background[type] || "rgba(0, 0, 0, 0.8)",
    backgroundSize: "cover"
  });

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

  async function getPokemonEvolutions(pokemonName) {
    try {
      const speciesResp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}/`);
      const speciesData = await speciesResp.json();
      const chainUrl = speciesData.evolution_chain.url;
      const evolutionResp = await fetch(chainUrl);
      const evolutionData = await evolutionResp.json();

      function formatEvolutions(chain) {
        return {
          name: chain.species.name,
          variations: chain.evolves_to.map(formatEvolutions) // Recursively format evolutions
        };
      }

      return formatEvolutions(evolutionData.chain);
    } catch (error) {
      console.error("Error fetching Pokemon evolutions:", error);
      return null;
    }
  }

  async function getPokemonData(pokemon) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const alldata = await response.json();
      const imgid = alldata.id.toString().padStart(3, "0");

      const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.toLowerCase()}/`);
      if (!response1.ok) throw new Error("Pokémon not found");

      const data = await response1.json();

      // Find the first English description
      const entry = data.flavor_text_entries.find(entry => entry.language.name === "en");

      const description = entry ? entry.flavor_text.replace(/\f/g, " ") : "Description not available.";

      return {
        id: alldata.id,
        name: alldata.name.charAt(0).toUpperCase() + alldata.name.slice(1),
        sprite1: `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${imgid}.png`,
        sprite2: alldata.sprites.front_default,
        sprite3: alldata.sprites.back_default,
        type1: alldata.types[0].type.name.charAt(0).toUpperCase() + alldata.types[0].type.name.slice(1),
        type2: alldata.types[1] ? alldata.types[1].type.name.charAt(0).toUpperCase() + alldata.types[1].type.name.slice(1) : "No second type",
        height: alldata.height / 10,
        weight: alldata.weight / 10,
        description: description
      };
    } catch (error) {
      console.error(`Error fetching data for ${pokemon}:`, error);
      return null;
    }
  }

  async function getReadableEvolutionData(pokemonName) {
    const evolutionData = await getPokemonEvolutions(pokemonName);
    if (!evolutionData) return null;

    async function buildEvolutionTree(evolutionNode) {
      if (!evolutionNode) return null;

      return {
        ...await getPokemonData(evolutionNode.name),
        variations: await Promise.all(evolutionNode.variations.map(buildEvolutionTree)) // Recursive calls
      };
    }

    return await buildEvolutionTree(evolutionData);
  }


  useEffect(() => {
    setloading(true)
    let ismounted = true;

    if (props.name) {
      getReadableEvolutionData(props.name).then((data) => {
        if (ismounted) {
          setevolutiondata(data);
          // console.log(data)
          setloading(false);
        }
      });
    }

    return () => {
      ismounted = false;
    };
  }, [props.name]);


  // console.log(evolutiondata?.variations[0]?.variations[0]?.variations?.length === 1 || evolutiondata?.variations[0]?.variations[0]?.variations?.length === 2)
  // console.log(evolutiondata?.variations[0]?.variations[0]?.variations?.length === 1 )
  // console.log(evolutiondata?.variations[0]?.variations[0]?.variations?.length === 2)
  return <>
    {console.log(evolutiondata)}
    {isloading ?
      <div className='evo-loading container'>
        <Loading />
      </div> :

      // IF the variations in 2nd state is more than 1 
      evolutiondata?.variations?.length === 0 ?
        <div style={{ width: "100%", height: "100%" }}>

          <div style={{ width: "100%", height: "100%" }}>
            <div className='evo-main-evo-container'>
              <div id='evo-card1' className={currentactive === 1 ? 'evo-cards evo-card1 evo-activeone' : currentactive === 2 ? 'evo-cards evo-card1 evo-activethree' : 'evo-cards evo-card1 evo-activetwo'}>
                <div style={getBackgroundStyle(evolutiondata?.type1)} className='evo-containerbody'>
                  <div className='evo-container'>
                    <div className='evo-card'>
                      <div className='evo-image'>
                        <img
                          src={evolutiondata?.sprite1}
                          alt="Pokemon"
                        />
                      </div>
                      <div className='evo-info'>
                        <div className='evo-tile'>#Base Form</div>
                        <div className='evo-name'>{evolutiondata?.name}</div>
                        <div className='evo-idDetails'>
                          <span>#{evolutiondata?.id}</span>
                          <span className='evo-measures'>Height: {evolutiondata?.height} m</span>
                          <span className='evo-measures'>Weight: {evolutiondata?.weight} Kg</span>

                        </div>
                        <div className='evo-types'>
                          <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.type1]?.src} alt="logo.svg" />{evolutiondata?.type1}</div>
                          {evolutiondata?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.type2]?.src} alt="logo.svg" />{evolutiondata?.type2}</div>}
                        </div>
                        <div className='evo-description'>
                          {evolutiondata?.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div >
          </div >




        </div> :
        //  Have more than one variation in 2nd evolution

        evolutiondata?.variations?.length === 2 ?
          <div style={{ width: "100%", height: "100%" }}>



            <div className='evo-main-evo-container'>
              <div id='evo-card1' className={currentactive === 1 ? 'evo-cards evo-card1 evo-activeone' : currentactive === 2 ? 'evo-cards evo-card1 evo-activethree' : 'evo-cards evo-card1 evo-activetwo'}>
                <div style={getBackgroundStyle(evolutiondata?.type1)} className='evo-containerbody'>
                  <div className='evo-container'>
                    <div className='evo-card'>
                      <div className='evo-image'>
                        <img
                          src={evolutiondata?.sprite1}
                          alt="Pokemon"
                        />
                      </div>
                      <div className='evo-info'>
                        <div className='evo-tile'>#Base Form</div>
                        <div className='evo-name'>{evolutiondata?.name}</div>
                        <div className='evo-idDetails'>
                          <span>#{evolutiondata?.id}</span>
                          <span className='evo-measures'>Height: {evolutiondata?.height} m</span>
                          <span className='evo-measures'>Weight: {evolutiondata?.weight} Kg</span>

                        </div>
                        <div className='evo-types'>
                          <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.type1]?.src} alt="logo.svg" />{evolutiondata?.type1}</div>
                          {evolutiondata?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.type2]?.src} alt="logo.svg" />{evolutiondata?.type2}</div>}
                        </div>
                        <div className='evo-description'>
                          {evolutiondata?.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div >


              <div id='evo-card3' className={currentactive === 1 ? 'evo-cards3 evo-cards evo-activethree' : currentactive === 2 ? 'evo-cards3 evo-cards evo-activetwo' : 'evo-cards3 evo-cards evo-activeone'}>
                <>
                  <div className='evo-card3-container'>

                    <div className='evo-card3-buttons'>
                      <button onClick={() => { setcard3(1) }} className='evo-card3-btn evo-card3-btn1'><span>{evolutiondata?.variations[0]?.name}</span></button>
                      <button onClick={() => { setcard3(2) }} className='evo-card3-btn evo-card3-btn1'><span>{evolutiondata?.variations[1]?.name}</span></button>
                    </div>
                    <div className='evo-card3aside'>
                      <div onClick={() => { setcard3(1) }} style={{ width: card3 === 1 ? "100%" : "0" }} className='evo-card3_1'>
                        <div style={getBackgroundStyle(evolutiondata?.variations[0]?.type1)} className='evo-containerbody'>
                          <div className='evo-container'>
                            <div className='evo-card'>
                              <div className='evo-image'>
                                <img
                                  src={evolutiondata?.variations[0]?.sprite1}
                                  alt="Pokemon"
                                />
                              </div>
                              <div className='evo-info'>
                                <div className='evo-tile'>#Second Form</div>
                                <div className='evo-name'>{evolutiondata?.variations[0]?.name}</div>
                                <div className='evo-idDetails'>
                                  <span>#{evolutiondata?.variations[0]?.id}</span>
                                  <span className='evo-measures'>Height: {evolutiondata?.variations[0]?.height} m</span>
                                  <span className='evo-measures'>Weight: {evolutiondata?.variations[0]?.weight} Kg</span>

                                </div>
                                <div className='evo-types'>
                                  <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0]?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0]?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0]?.type1]?.src} alt="logo.svg" />{evolutiondata?.variations[0]?.type1}</div>
                                  {evolutiondata?.variations[0]?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0]?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0]?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0]?.type2]?.src} alt="logo.svg" />{evolutiondata?.variations[0]?.type2}</div>}
                                </div>
                                <div className='evo-description'>
                                  {evolutiondata.variations[0].description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ width: card3 === 1 ? "0" : "100%" }} className='evo-card3_2'>
                        <div style={getBackgroundStyle(evolutiondata?.variations[1]?.type1)} className='evo-containerbody'>
                          <div className='evo-container'>
                            <div className='evo-card'>
                              <div className='evo-image'>
                                <img
                                  src={evolutiondata?.variations[1]?.sprite1}
                                  alt="Pokemon"
                                />
                              </div>
                              <div className='evo-info'>
                                <div className='evo-tile'>#Second Form</div>
                                <div className='evo-name'>{evolutiondata?.variations[1]?.name}</div>
                                <div className='evo-idDetails'>
                                  <span>#{evolutiondata?.variations[1]?.id}</span>
                                  <span className='evo-measures'>Height: {evolutiondata?.variations[1]?.height} m</span>
                                  <span className='evo-measures'>Weight: {evolutiondata?.variations[1]?.weight} Kg</span>

                                </div>
                                <div className='evo-types'>
                                  <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[1]?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[1]?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[1]?.type1]?.src} alt="logo.svg" />{evolutiondata?.variations[1]?.type1}</div>
                                  {evolutiondata?.variations[1]?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[1]?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[1]?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[1]?.type2]?.src} alt="logo.svg" />{evolutiondata?.variations[1]?.type2}</div>}
                                </div>
                                <div className='evo-description'>
                                  {evolutiondata?.variations[1]?.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>

                </>
              </div>
            </div>











          </div>
          :


          evolutiondata?.variations?.length > 2 ?
            <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>



              <EvolutionTree evolutionData={evolutiondata} />



            </div>
            : evolutiondata?.variations[0]?.variations?.length === 1 || evolutiondata?.variations[0]?.variations?.length === 2 ?
              <div style={{ width: "100%", height: "100%" }}>
                <div className='evo-main-evo-container'>
                  <div id='evo-card1' className={currentactive === 1 ? 'evo-cards evo-card1 evo-activeone' : currentactive === 2 ? 'evo-cards evo-card1 evo-activethree' : 'evo-cards evo-card1 evo-activetwo'}>
                    <div style={getBackgroundStyle(evolutiondata?.type1)} className='evo-containerbody'>
                      <div className='evo-container'>
                        <div className='evo-card'>
                          <div className='evo-image'>
                            <img
                              src={evolutiondata?.sprite1}
                              alt="Pokemon"
                            />
                          </div>
                          <div className='evo-info'>
                            <div className='evo-tile'>#Base Form</div>
                            <div className='evo-name'>{evolutiondata?.name}</div>
                            <div className='evo-idDetails'>
                              <span>#{evolutiondata?.id}</span>
                              <span className='evo-measures'>Height: {evolutiondata?.height} m</span>
                              <span className='evo-measures'>Weight: {evolutiondata?.weight} Kg</span>

                            </div>
                            <div className='evo-types'>
                              <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.type1]?.src} alt="logo.svg" />{evolutiondata?.type1}</div>
                              {evolutiondata?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.type2]?.src} alt="logo.svg" />{evolutiondata?.type2}</div>}
                            </div>
                            <div className='evo-description'>
                              {evolutiondata?.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div >


                  <div id='evo-card2' className={currentactive === 1 ? 'evo-cards evo-card2 evo-activetwo' : currentactive === 2 ? 'evo-cards evo-card2 evo-activeone' : 'evo-cards evo-card2 evo-activethree'}>
                    <div style={getBackgroundStyle(evolutiondata?.variations[0]?.type1)} className='evo-containerbody'>
                      <div className='evo-container'>
                        <div className='evo-card'>
                          <div className='evo-image'>
                            <img
                              src={evolutiondata?.variations[0]?.sprite1}
                              alt="Pokemon"
                            />
                          </div>
                          <div className='evo-info'>
                            <div className='evo-tile'>#Second Form</div>
                            <div className='evo-name'>{evolutiondata?.variations[0]?.name}</div>
                            <div className='evo-idDetails'>
                              <span>#{evolutiondata?.variations[0]?.id}</span>
                              <span className='evo-measures'>Height: {evolutiondata?.variations[0]?.height} m</span>
                              <span className='evo-measures'>Weight: {evolutiondata?.variations[0]?.weight} Kg</span>

                            </div>
                            <div className='evo-types'>
                              <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0]?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0]?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0]?.type1]?.src} alt="logo.svg" />{evolutiondata?.variations[0]?.type1}</div>
                              {evolutiondata?.variations[0]?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0]?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0]?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0]?.type2]?.src} alt="logo.svg" />{evolutiondata?.variations[0]?.type2}</div>}
                            </div>
                            <div className='evo-description'>
                              {evolutiondata.variations[0]?.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id='evo-card3' className={currentactive === 1 ? 'evo-cards3 evo-cards evo-activethree' : currentactive === 2 ? 'evo-cards3 evo-cards evo-activetwo' : 'evo-cards3 evo-cards evo-activeone'}>

                    {evolutiondata.variations[0]?.variations.length === 2 ?
                      <>
                        <div className='evo-card3-container'>





                          {/* <div className='evo-card3-buttons'>
                            <button onClick={() => { setcard3(1) }} className='evo-card3-btn evo-card3-btn1'><span style={{color: card3 === 1 ? "red":""}}>{evolutiondata?.variations[0].variations[0]?.name}</span></button>
                            <button onClick={() => { setcard3(2) }} className='evo-card3-btn evo-card3-btn1'><span style={{color: card3 === 1 ? "":"red"}}>{evolutiondata?.variations[0].variations[1]?.name}</span></button>
                          </div> */}


                          <div className='evo-card3-buttons'>
                            <button
                              onClick={() => setcard3(1)}
                              style={{

                                borderColor: card3 === 1 ? '#ef4444' : '#e5e7eb',
                                backgroundColor: card3 === 1 ? '#fef2f2' : 'white',
                                boxShadow: card3 === 1 ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                              }}
                              className='evo-card3-btn evo-card3-btn1'
                            >
                              <span style={{
                                color: card3 === 1 ? '#dc2626' : '#4b5563',
                                transition: 'color 0.2s ease-in-out'
                              }}>
                                {evolutiondata?.variations[0].variations[0]?.name}
                              </span>
                            </button>

                            <button
                              onClick={() => setcard3(2)}
                              style={{
                                
                                borderColor: card3 === 2 ? '#ef4444' : '#e5e7eb',
                                backgroundColor: card3 === 2 ? '#fef2f2' : 'white',
                                boxShadow: card3 === 2 ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                              }}
                              className='evo-card3-btn evo-card3-btn1'
                            >
                              <span style={{
                                color: card3 === 2 ? '#dc2626' : '#4b5563',
                                transition: 'color 0.2s ease-in-out'
                              }}>
                                {evolutiondata?.variations[0].variations[1]?.name}
                              </span>
                            </button>
                          </div>




                          <div className='evo-card3aside'>
                            <div onClick={() => { setcard3(1) }} style={{ width: card3 === 1 ? "100%" : "0" }} className='evo-card3_1'>
                              <div style={getBackgroundStyle(evolutiondata?.variations[0].variations[0]?.type1)} className='evo-containerbody'>
                                <div className='evo-container'>
                                  <div className='evo-card'>
                                    <div className='evo-image'>
                                      <img
                                        src={evolutiondata?.variations[0].variations[0]?.sprite1}
                                        alt="Pokemon"
                                      />
                                    </div>
                                    <div className='evo-info'>
                                      <div className='evo-tile'>#Third Form</div>
                                      <div className='evo-name'>{evolutiondata?.variations[0].variations[0]?.name}</div>
                                      <div className='evo-idDetails'>
                                        <span>#{evolutiondata?.variations[0].variations[0]?.id}</span>
                                        <span className='evo-measures'>Height: {evolutiondata?.variations[0].variations[0]?.height} m</span>
                                        <span className='evo-measures'>Weight: {evolutiondata?.variations[0].variations[0]?.weight} Kg</span>

                                      </div>
                                      <div className='evo-types'>
                                        <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0].variations[0]?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0].variations[0]?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0].variations[0]?.type1]?.src} alt="logo.svg" />{evolutiondata?.variations[0].variations[0]?.type1}</div>
                                        {evolutiondata?.variations[0].variations[0]?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0].variations[0]?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0].variations[0]?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0].variations[0]?.type2]?.src} alt="logo.svg" />{evolutiondata?.variations[0].variations[0]?.type2}</div>}
                                      </div>
                                      <div className='evo-description'>
                                        {evolutiondata?.variations[0]?.variations[0]?.description}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ width: card3 === 1 ? "0" : "100%" }} className='evo-card3_2'>
                              <div style={getBackgroundStyle(evolutiondata?.variations[0].variations[1]?.type1)} className='evo-containerbody'>
                                <div className='evo-container'>
                                  <div className='evo-card'>
                                    <div className='evo-image'>
                                      <img
                                        src={evolutiondata?.variations[0].variations[1]?.sprite1}
                                        alt="Pokemon"
                                      />
                                    </div>
                                    <div className='evo-info'>
                                      <div className='evo-tile'>#Third Form</div>
                                      <div className='evo-name'>{evolutiondata?.variations[0].variations[1]?.name}</div>
                                      <div className='evo-idDetails'>
                                        <span>#{evolutiondata?.variations[0].variations[1]?.id}</span>
                                        <span className='evo-measures'>Height: {evolutiondata?.variations[0].variations[1]?.height} m</span>
                                        <span className='evo-measures'>Weight: {evolutiondata?.variations[0].variations[1]?.weight} Kg</span>

                                      </div>
                                      <div className='evo-types'>
                                        <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0].variations[1]?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0].variations[1]?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0].variations[1]?.type1]?.src} alt="logo.svg" />{evolutiondata?.variations[0].variations[1]?.type1}</div>
                                        {evolutiondata?.variations[0].variations[1]?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0].variations[1]?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0].variations[1]?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0].variations[1]?.type2]?.src} alt="logo.svg" />{evolutiondata?.variations[0].variations[1]?.type2}</div>}
                                      </div>
                                      <div className='evo-description'>
                                        {evolutiondata.variations[0]?.variations[1]?.description}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>

                      </>
                      :
                      <div className='evo-card3'>
                        {console.log("this hit")}
                        <div style={getBackgroundStyle(evolutiondata?.variations[0].variations[0]?.type1)} className='evo-containerbody'>
                          <div className='evo-container'>
                            <div className='evo-card'>
                              <div className='evo-image'>
                                <img
                                  src={evolutiondata?.variations[0].variations[0]?.sprite1}
                                  alt="Pokemon"
                                />
                              </div>
                              <div className='evo-info'>
                                <div className='evo-tile'>#Third Form</div>
                                <div className='evo-name'>{evolutiondata?.variations[0].variations[0]?.name}</div>
                                <div className='evo-idDetails'>
                                  <span>#{evolutiondata?.variations[0].variations[0]?.id}</span>
                                  <span className='evo-measures'>Height: {evolutiondata?.variations[0].variations[0]?.height} m</span>
                                  <span className='evo-measures'>Weight: {evolutiondata?.variations[0].variations[0]?.weight} Kg</span>

                                </div>
                                <div className='evo-types'>
                                  <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0].variations[0]?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0].variations[0]?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0].variations[0]?.type1]?.src} alt="logo.svg" />{evolutiondata?.variations[0].variations[0]?.type1}</div>
                                  {evolutiondata?.variations[0].variations[0]?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0].variations[0]?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0].variations[0]?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0].variations[0]?.type2]?.src} alt="logo.svg" />{evolutiondata?.variations[0].variations[0]?.type2}</div>}
                                </div>
                                <div className='evo-description'>
                                  {evolutiondata?.variations[0]?.variations[0]?.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>


              </div> :
              <div style={{ width: "100%", height: "100%" }}>
                <div style={{ width: "100%", height: "100%" }}>
                  <div className='evo-main-evo-container'>
                    <div id='evo-card1' className={currentactive === 1 ? 'evo-cards evo-card1 evo-activeone' : currentactive === 2 ? 'evo-cards evo-card1 evo-activethree' : 'evo-cards evo-card1 evo-activetwo'}>
                      <div style={getBackgroundStyle(evolutiondata?.type1)} className='evo-containerbody'>
                        <div className='evo-container'>
                          <div className='evo-card'>
                            <div className='evo-image'>
                              <img
                                src={evolutiondata?.sprite1}
                                alt="Pokemon"
                              />
                            </div>
                            <div className='evo-info'>
                              <div className='evo-tile'>#Base Form</div>
                              <div className='evo-name'>{evolutiondata?.name}</div>
                              <div className='evo-idDetails'>
                                <span>#{evolutiondata?.id}</span>
                                <span className='evo-measures'>Height: {evolutiondata?.height} m</span>
                                <span className='evo-measures'>Weight: {evolutiondata?.weight} Kg</span>

                              </div>
                              <div className='evo-types'>
                                <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.type1]?.src} alt="logo.svg" />{evolutiondata?.type1}</div>
                                {evolutiondata?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.type2]?.src} alt="logo.svg" />{evolutiondata?.type2}</div>}
                              </div>
                              <div className='evo-description'>
                                {evolutiondata?.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div >


                    <div id='evo-card2' className={currentactive === 1 ? 'evo-cards evo-card2 evo-activetwo' : currentactive === 2 ? 'evo-cards evo-card2 evo-activeone' : 'evo-cards evo-card2 evo-activethree'}>
                      <div style={getBackgroundStyle(evolutiondata?.variations[0]?.type1)} className='evo-containerbody'>
                        <div className='evo-container'>
                          <div className='evo-card'>
                            <div className='evo-image'>
                              <img
                                src={evolutiondata?.variations[0]?.sprite1}
                                alt="Pokemon"
                              />
                            </div>
                            <div className='evo-info'>
                              <div className='evo-tile'>#Second Form</div>
                              <div className='evo-name'>{evolutiondata?.variations[0]?.name}</div>
                              <div className='evo-idDetails'>
                                <span>#{evolutiondata?.variations[0]?.id}</span>
                                <span className='evo-measures'>Height: {evolutiondata?.variations[0]?.height} m</span>
                                <span className='evo-measures'>Weight: {evolutiondata?.variations[0]?.weight} Kg</span>

                              </div>
                              <div className='evo-types'>
                                <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0]?.type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0]?.type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0]?.type1]?.src} alt="logo.svg" />{evolutiondata?.variations[0]?.type1}</div>
                                {evolutiondata?.variations[0]?.type2 === "No second type" ? <div></div> : <div className='evo-type'><img style={{ backgroundColor: pokemontypes[evolutiondata?.variations[0]?.type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[evolutiondata?.variations[0]?.type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[evolutiondata?.variations[0]?.type2]?.src} alt="logo.svg" />{evolutiondata?.variations[0]?.type2}</div>}
                              </div>
                              <div className='evo-description'>
                                {evolutiondata?.variations[0]?.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
    }
  </>
}

export default EvoChain
