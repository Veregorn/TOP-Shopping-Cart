import '../styles/SearchBar.css'
import SearchIcon from '../../public/icons/search-icon.svg'

function SearchBar() {
    return (
        <button className="searchBar">
            <img src={SearchIcon} alt="search icon" />
        </button>
    );
}

export default SearchBar;