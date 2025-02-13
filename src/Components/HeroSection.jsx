
import { useEffect, useState } from 'react'
import './HeroSection.css'
import EvoChain from './evo_chain';
import Loading from './loading';



function HeroSection(props) {

  const [data, setData] = useState(props.data);
  const [name, setName] = useState(data.name);
  const [type1, setType1] = useState(data.type1);
  const [type2, setType2] = useState(data.type2);
  const [height, setHeight] = useState(data.height);
  const [weight, setWeight] = useState(data.weight);
  const [id, setId] = useState(props.id);
  const [description, setDescription] = useState("hello");
  const [pokemontypes, setpokemonstype] = useState(props.pokemontypes)
  const [isloading, setloading] = useState(props.isloading)

  useEffect(() => {
    // Flag to handle component unmounting
    let isSubscribed = true;

    const updatePokemonData = async () => {
      // Set loading state first
      setloading(props.isloading);
      try {
        // Check if props.data exists
        if (!props.data) {
          throw new Error('Pokemon data is undefined');
        }



        // Batch all state updates together
        const updates = {
          data: props.data,
          name: props.data.name,
          type1: props.data.type1,
          type2: props.data.type2,
          height: props.data.height,
          weight: props.data.weight,
          id: props.id,
          description: props.data.pokedescription,
          pokemonstype: props.pokemontypes
        };

        // Only update if component is still mounted
        if (isSubscribed) {
          // Update all states at once using a reducer or context
          // Option 1: Using individual setters (less ideal)
          setData(updates.data);
          setName(updates.name);
          setType1(updates.type1);
          setType2(updates.type2);
          setHeight(updates.height);
          setWeight(updates.weight);
          setId(updates.id);
          setDescription(updates.description);
          setpokemonstype(updates.pokemonstype);

          // Update loading state last
          setloading(props.isloading);
        }
      } catch (error) {
        console.error('Error updating Pokemon data:', error);
        if (isSubscribed) {
          setloading(props.isloading);
        }
      }
    };

    updatePokemonData();

    // Cleanup function
    return () => {
      isSubscribed = false;
      setloading(props.isloading);
    };
  }, [props.data, props.id, props.pokemontypes]);


  // remove after exporting used to resolve stas page props eror








  const [button4vis, setbutton4vis] = useState(true);
  const [currentactive, setactive] = useState("btn1");
  const [currentsection, setactivesection] = useState("section1")
  const [movesdata, setmovesdata] = useState({})
  function clickedbutton1() {

    setactive("btn1")
    console.log("clicked button1")

  }

  function clickedbutton2() {
    setactive("btn2")
    console.log("clicked butotn2")
  }

  function clickedbutton3() {
    setactive("btn3")
    console.log("clicked button3")
  }

  function clickedbutton4() {
    setactive("btn4")
    console.log("clicked button4")
  }

  function handlescrollclickup() {
    if (!button4vis) {
      setbutton4vis(true)
    }
  }
  function handlescrollclickdown() {
    if (button4vis) {
      setbutton4vis(false)
    }
  }






  // for scroll moves
















  useEffect(() => {

    async function importjson() {
      const response = await fetch(`/moves/pokemon_part_${Math.ceil(Number(id) / 41)}.json`)
      const data = await response.json()
      return data
    }

    importjson().then((data) => { setmovesdata(data) })



  }, [props.data])

  useEffect(() => {
    const menu = document.getElementById("menu")

    const handlescroll = (e) => {
      console.log(button4vis)
      setbutton4vis((value) => { return !value })

    }



    if (!menu) {
      return;
    }


    menu.addEventListener("scroll", handlescroll)

    return () => { menu.removeEventListener("scroll", handlescroll) }

  }, [])

  // console.log("Type1:", type1);
  // console.log("Type1 Exists:", pokemontypes[type1] !== undefined);
  // console.log("Background Color:", pokemontypes[type1]?.bgcolor);
  const image = "/blueandgreenbg.jpg"

  //      Remove Main page before exporting  !!Important

  return (

    <div className='herocontainer' style={{ width: currentactive === "btn4" ? "100%" : "95%" }}>
      <div id='menu' className='menu'>
        <div className="hero-aside">
          <button onClick={handlescrollclickup} id='upbtn' className="triangle-btnup"></button>
          <button style={{ height: !button4vis ? "0" : "", width: !button4vis ? "0" : "", opacity: !button4vis ? "0" : "" }} onClick={clickedbutton1} id='btn1' className={`vertical-btn ${currentactive === "btn1" ? "active" : ""}`} ><span>Description</span></button>
          <button onClick={clickedbutton2} id='btn2' className={`vertical-btn ${currentactive === "btn2" ? "active" : ""}`} ><span>Stats</span></button>
          <button onClick={clickedbutton3} id='btn3' className={`vertical-btn ${currentactive === "btn3" ? "active" : ""}`} ><span>Moves</span></button>
          <button style={{ height: !button4vis ? "" : "0", width: !button4vis ? "" : "0", opacity: !button4vis ? "" : "0" }} onClick={clickedbutton4} id='btn4' className={`vertical-btn ${currentactive === "btn4" ? "active" : ""}`} ><span>Evolutions</span></button>
          <button onClick={handlescrollclickdown} id='downbtn' className="triangle-btndown"></button>
        </div>
      </div>
      {console.log(isloading)}
      {!isloading ? <Loading /> :
        <div className='herosubcont'>
          <div className='hero-main' style={{ width: currentactive === "btn4" ? "100%" : "60%" }} >

            <div className='main-pages main-description' style={{ width: currentactive === "btn1" ? "100%" : "0", opacity: currentactive === "btn1" ? "1" : "0" }} >

              <h1>{name}</h1>

              <div className='description-types'>
                <div className='descriptiontype measurements'>ID {`#${id}`}</div>
                <div className='descriptiontype type1 ' ><img style={{ backgroundColor: pokemontypes[type1]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[type1]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[type1]?.src} alt="logo.svg" /><span className='descriptiontypetext'><p>{type1}</p></span></div>
                <div>{type2 !== "No second type" ? <span className='descriptiontype type2'> <img style={{ backgroundColor: pokemontypes[type2]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[type2]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[type2]?.src} alt="logo.svg" /><span className='descriptiontypetext'><p>{type2}</p></span> </span> : ""}</div>
                <div className='descriptiontype measurements height'>Height {height + "m"}</div>
                <div className='descriptiontype measurements'>Weight {weight + "Kg"}</div>
              </div>



              <div className='descriptionpara'>
                <div className='descriptionpara-text'>
                  <p>{description}</p>

                </div>
              </div>
            </div>
            <div className='main-pages main-stats' style={{ width: currentactive === "btn2" ? "100%" : "0", opacity: currentactive === "btn2" ? "1" : "0" }} >
              <div className="PokemonDetails-detailcontainer-statscontainer" style={{ color: data.type1 === "Fire" ? "white" : "black" }}>
                <div className="PokemonDetails-detailcontainer-statscontainer-title">
                  <h1 style={{ color: "white", margin: 0 }}>{name}</h1>
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
            <div className='main-pages main-moves' style={{ width: currentactive === "btn3" ? "100%" : "0", opacity: currentactive === "btn3" ? "1" : "0" }}>

              <h1>Some Common Moves of {name} are :</h1>



              <div className='submain-moves'>

                <div className='moves-allsections'>



                  <div className='movessectionstyle movessection1' style={{ height: currentsection === "section1" ? "100%" : "0", opacity: currentsection === "section1" ? "1" : "0" }} >


                    <div className="moves-cards">
                      <div className="moves-card">
                        <div className="card-title">
                          <p>{movesdata[id]?.top_moves[0]?.move}</p>
                        </div>
                        <div className="card-contents">
                          <span className="card-image carditem">
                            Attack type :

                            <img style={{ backgroundColor: pokemontypes[movesdata[id]?.top_moves[0]?.type]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[movesdata[id]?.top_moves[0]?.type]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[(movesdata[id]?.top_moves[0]?.type)]?.src} alt="logo.svg" />
                            {(movesdata[id]?.top_moves[0]?.type)}
                          </span>
                          <div className="carditem">
                            Power: {movesdata[id]?.top_moves[0]?.power}
                          </div>
                          <div className="carditem">
                            Score: {movesdata[id]?.top_moves[0]?.score}
                          </div>
                        </div>
                      </div>
                      <div className="moves-card">
                        <div className="card-title">
                          <p>{movesdata[id]?.top_moves[1]?.move}</p>
                        </div>
                        <div className="card-contents">
                          <span className="card-image carditem">
                            Attack type :

                            <img style={{ backgroundColor: pokemontypes[movesdata[id]?.top_moves[1]?.type]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[movesdata[id]?.top_moves[0]?.type]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[(movesdata[id]?.top_moves[1]?.type)]?.src} alt="logo.svg" />
                            {(movesdata[id]?.top_moves[1]?.type)}
                          </span>
                          <div className="carditem">
                            Power: {movesdata[id]?.top_moves[1]?.power}
                          </div>
                          <div className="carditem">
                            Score: {movesdata[id]?.top_moves[1]?.score}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>






                  <div className='movessectionstyle movessection2' style={{ height: currentsection === "section2" ? "100%" : "0", opacity: currentsection === "section2" ? "1" : "0" }} >

                    <div className="moves-cards">
                      <div className="moves-card">
                        <div className="card-title">
                          <p>{movesdata[id]?.top_moves[2]?.move}</p>
                        </div>
                        <div className="card-contents">
                          <span className="card-image carditem">
                            Attack type :

                            <img style={{ backgroundColor: pokemontypes[movesdata[id]?.top_moves[2]?.type]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[movesdata[id]?.top_moves[2]?.type]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[(movesdata[id]?.top_moves[2]?.type)]?.src} alt="logo.svg" />
                            {(movesdata[id]?.top_moves[2]?.type)}
                          </span>
                          <div className="carditem">
                            Power: {movesdata[id]?.top_moves[2]?.power}
                          </div>
                          <div className="carditem">
                            Score: {movesdata[id]?.top_moves[2]?.score}
                          </div>
                        </div>
                      </div>
                      <div className="moves-card">
                        <div className="card-title">
                          <p>{movesdata[id]?.top_moves[3]?.move}</p>
                        </div>
                        <div className="card-contents">
                          <span className="card-image carditem">
                            Attack type :

                            <img style={{ backgroundColor: pokemontypes[movesdata[id]?.top_moves[3]?.type]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[movesdata[id]?.top_moves[3]?.type]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[(movesdata[id]?.top_moves[3]?.type)]?.src} alt="logo.svg" />
                            {(movesdata[id]?.top_moves[3]?.type)}
                          </span>
                          <div className="carditem">
                            Power: {movesdata[id]?.top_moves[3]?.power}
                          </div>
                          <div className="carditem">
                            Score: {movesdata[id]?.top_moves[3]?.score}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className='movessectionstyle movessection3' style={{ height: currentsection === "section3" ? "100%" : "0", opacity: currentsection === "section3" ? "1" : "0" }} >
                    <div className="moves-cards">
                      <div className="moves-card">
                        <div className="card-title">
                          <p>{movesdata[id]?.top_moves[4]?.move}</p>
                        </div>
                        <div className="card-contents">
                          <span className="card-image carditem">
                            Attack type :

                            <img style={{ backgroundColor: pokemontypes[movesdata[id]?.top_moves[4]?.type]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[movesdata[id]?.top_moves[2]?.type]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[(movesdata[id]?.top_moves[4]?.type)]?.src} alt="logo.svg" />
                            {(movesdata[id]?.top_moves[4]?.type)}
                          </span>
                          <div className="carditem">
                            Power: {movesdata[id]?.top_moves[4]?.power}
                          </div>
                          <div className="carditem">
                            Score: {movesdata[id]?.top_moves[4]?.score}
                          </div>
                        </div>
                      </div>
                      <div className="moves-card">
                        <div className="card-title">
                          <p>{movesdata[id]?.top_moves[5]?.move}</p>
                        </div>
                        <div className="card-contents">
                          <span className="card-image carditem">
                            Attack type :

                            <img style={{ backgroundColor: pokemontypes[movesdata[id]?.top_moves[5]?.type]?.bgcolor || "255,255,255,0.001", boxShadow: pokemontypes[movesdata[id]?.top_moves[5]?.type]?.boxshadow || "255,255,255,0.001" }} src={pokemontypes[(movesdata[id]?.top_moves[5]?.type)]?.src} alt="logo.svg" />
                            {(movesdata[id]?.top_moves[5]?.type)}
                          </span>
                          <div className="carditem">
                            Power: {movesdata[id]?.top_moves[5]?.power}
                          </div>
                          <div className="carditem">
                            Score: {movesdata[id]?.top_moves[5]?.score}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='scrollarea'  >
                  <div className='moves-scrollcontainer'>
                    <button className='scrollbtn scrbtn1' onClick={() => { setactivesection("section1") }} style={{ background: currentsection === "section1" ? "rgba(255, 255, 255, 0.49)" : "" }}></button>
                    <button className='scrollbtn scrbtn2' onClick={() => { setactivesection("section2") }} style={{ background: currentsection === "section2" ? "rgba(255, 255, 255, 0.49)" : "" }}></button>
                    <button className='scrollbtn scrbtn3' onClick={() => { setactivesection("section3") }} style={{ background: currentsection === "section3" ? "rgba(255, 255, 255, 0.49)" : "" }}></button>

                  </div>
                </div>


              </div>

            </div>
            <div className='main-pages main-evolution' style={{ width: currentactive === "btn4" ? "100%" : "0", opacity: currentactive === "btn4" ? "1" : "0" }}>

              <EvoChain name={name} />

            </div>

          </div>
          <div className='hero-image' style={{ width: currentactive === "btn4" ? "0" : "auto" }}>
            <div className='hero-image-img'>
              <img id='pokemon' src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${String(id).padStart(3, '0')}.png`} alt="" />

            </div>
          </div>
        </div>
      }
    </div>

  )
}

export default HeroSection
