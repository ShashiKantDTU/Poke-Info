import './NewPokemonCard.css';
import { NavLink } from 'react-router-dom';
function NewPokemonCard(props) {

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



    const getTypeStyle = (type) => ({
        backgroundColor: TYPE_COLORS[type] || "rgba(0, 0, 0, 0.8)"
    });

    
    return (
        // RED
        <div className="NewPokemonCard-main-container">
            {/* Blue */}
            <div className={`NewPokemonCard-card ${props.Type1 === "" ? "" : (props.Type1.charAt(0) + props.Type1.slice(1))  }`} style={getBackgroundStyle(props.Type1)}>

                <div className='NewPokemonCard-idtext'  >
                    <p>{props.id}</p>
                </div>
                <div className='NewPokemonCard-imagecontainer' style={{ height: props.pokemonname.length > 13 ? "33%" : "43%"}}>

                    <img src={props.img} alt={props.pokemonname} />
                </div>
                <div className="NewPokemonCard-content" style={{ height: props.pokemonname.length > 13 ? "50%" : "40%" }} >
                    <div className='NewPokemonCard-name'><h1 >{props.pokemonname}</h1></div>
                    <div className='NewPokemonCard-types'>
                        {props.Type2 === "No second type" ? <div className='NewPokemonCard-type1' style={getTypeStyle(props.Type1)}>{props.Type1}</div> :
                            <>
                                <div className='NewPokemonCard-type1' style={getTypeStyle(props.Type1)}>{props.Type1}</div>
                                <div className='NewPokemonCard-type2' style={getTypeStyle(props.Type1)}>{props.Type2}</div>
                            </>}

                    </div>
                    <div className='NewPokemonCard-heightandweight'>
                        <div className='NewPokemonCard-height'>
                            <div className='NewPokemonCard-heighttext'>
                                Height
                            </div>
                            <div className='NewPokemonCard-heightvalue'>
                                {props.height}
                            </div>
                        </div>
                        <div className='NewPokemonCard-weight'>
                            <div className='NewPokemonCard-height'>
                                <div className='NewPokemonCard-weighttext'>
                                    Weight
                                </div>
                                <div className='NewPokemonCard-weightvalue'>
                                    {props.weight}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='NewPokemonCard-details'>
                    <NavLink to={`/pokemon/${props.link}`}>Details</NavLink>
                    {/* <a href="">Details</a> */}
                </div>
            </div>
        </div>
    );
}

export default NewPokemonCard;