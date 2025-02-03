import "./Footer.css";
function Footer() {
  return (
    <footer>
                <div className="Footer-footer">
                    <div className="Footer-partitioner">
                        <div className="Footer-Maintext">
                            <h2>Made By Shashi Kant with ❤️ </h2>
                        </div>
                        <div className="Footer-footer-content">
                            <div className="Footer-footer-text">

                                <h3>Thanks to <a href="https://pokeapi.co/">PokeApi</a> for this incredible API </h3>
                                <p>Images from <a href="https://pokemondb.net/pokedex/national">Pokemon Database</a></p>
                                <p>© 2021 Pokémon. TM, ® Nintendo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Footer-footer-links">
                            <a target="_blank" href="https://github.com/shashikantdtu">Github</a>
                            <a target="_blank" href="https://www.linkedin.com/in/sunny-poddar-2595b4229/">LinkedIn</a>
                            <a href="#">Extras</a>
                        </div>
                </div>
            </footer>
  );
}

export default Footer;