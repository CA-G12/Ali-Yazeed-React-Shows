import { useState } from "react";

const Search = ({ query, setQuery }) => {
    
    // useEffect((e) => {
    //     const input = document.querySelector('input')
    //     input.addEventListener('keydown', eventHandler)
    //     return () => input.removeEventListener('keydown', eventHandler)
    // }, [])

    return ( 
        <form className="search-bar">
            <input
                type="text"
                required
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your search here.."
            />
        </form>
     );
}
 
export default Search; 
