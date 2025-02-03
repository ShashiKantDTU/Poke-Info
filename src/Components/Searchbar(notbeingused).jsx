import "./Searchbar.css";
function Searchbar() {
    return <div className="Searchbar-search-bar">
        <img src="/search.png" alt="Search.png" />
        <input className="Searchbar-search" type="search" placeholder="Search by Pokemon name or ID" />
    </div>
}

export default Searchbar;