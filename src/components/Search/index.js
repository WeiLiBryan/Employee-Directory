import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="container">
            <input 
            className="search mx-auto" 
            type="search" 
            placeholder="Search" 
            onChange={() => props.change} 
            value={props.val}
            />
        </div>
    );
}

export default Search;