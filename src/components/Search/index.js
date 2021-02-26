import React from "react";
import "./style.css";

function Search() {
    return (
        <div className="container">
            <input className="search mx-auto" type="search" placeholder="Search" onChange={() => props.change} value={props.val}></input>
        </div>
    );
}

export default Search;