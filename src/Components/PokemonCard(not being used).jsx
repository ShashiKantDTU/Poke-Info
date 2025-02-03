import './PokemonCard.css';
function PokemonCard(props) {

    return (
        // Main box
        <div className="PokemonCard-pokemon-card" style={{
            backgroundColor:
            props.type1 === "Normal" ? "rgba(255, 255, 255, 0.8)" :
                props.type1 === "Fire" ? "rgba(255, 0, 0, 0.8)" :
                props.type1 === "Water" ? "rgba(53, 167, 224, 0.8)" :
                    props.type1 === "Grass" ? "rgba(0, 128, 0, 0.8)" :
                    props.type1 === "Electric" ? "rgba(255, 255, 0, 0.8)" :
                        props.type1 === "Ice" ? "rgba(173, 216, 230, 0.8)" :
                        props.type1 === "Fighting" ? "rgba(255, 165, 0, 0.8)" :
                            props.type1 === "Poison" ? "rgba(128, 0, 128, 0.8)" :
                            props.type1 === "Ground" ? "rgba(165, 42, 42, 0.8)" :
                                props.type1 === "Flying" ? "rgba(135, 206, 235, 0.8)" :
                                props.type1 === "Psychic" ? "rgba(255, 192, 203, 0.8)" :
                                    props.type1 === "Bug" ? "rgba(0, 255, 0, 0.8)" :
                                    props.type1 === "Rock" ? "rgba(128, 128, 128, 0.8)" :
                                        props.type1 === "Ghost" ? "rgba(75, 0, 130, 0.8)" :
                                        props.type1 === "Dragon" ? "rgba(0, 0, 139, 0.8)" :
                                            props.type1 === "Dark" ? "rgba(0, 0, 0, 0.8)" :
                                            props.type1 === "Steel" ? "rgba(192, 192, 192, 0.8)" :
                                                props.type1 === "Fairy" ? "rgba(255, 182, 193, 0.8)" :
                                                props.type1 === "Stellar" ? "rgba(255, 215, 0, 0.8)" :
                                                    "rgba(0, 0, 0, 0.8)"
        }} >
            

            <div className='PokemonCard-imageandcontent'>
                {/* Yellow background */}
                <div className='PokemonCard-contents'>
                    <div className='PokemonCard-type' >
                        {props.type2 === "No second type" ? <div className='PokemonCard-types'  >

                            {props.type1}
                        </div> : <><div className='PokemonCard-types'>
                            {props.type1}
                        </div>
                            <div className='PokemonCard-types'>
                                {props.type2}
                            </div>
                        </>}

                    </div>
                    <div className='PokemonCard-name'>
                        {props.pokemonname}
                    </div>

                    <div className='PokemonCard-overview'>
                        {props.overview}
                    </div>
                    <div className='PokemonCard-details'>
                        <a href="#">Details</a>
                    </div>
                </div>
                <div className='PokemonCard-imageandid'>
                    <div className='PokemonCard-id'>
                        {props.id}
                    </div>
                    <div className='PokemonCard-image-container'>
                        <div className='PokemonCard-image'>
                            <img src={props.img} alt={props.pokemonname} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );

}

export default PokemonCard;