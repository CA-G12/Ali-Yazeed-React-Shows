import { useState } from "react";

const Search = ({ query, setQuery }) => {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setQuery(e.target.value)
        }
    }

    return (
        <form className="search-bar">
            <input
                type="text"
                required
                onKeyPress={handleKeyDown}
                placeholder="Enter your search here.."
            />
        </form>
    );
}

export default Search; 
