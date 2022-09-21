import { useState } from "react";

const Search = ({query, setQuery}) => {

    return ( 
        <form  >
            <label>Search</label>
            <input
                type="text"
                required
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
     );
}
 
export default Search;