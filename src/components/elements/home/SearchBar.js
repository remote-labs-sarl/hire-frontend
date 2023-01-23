import React from "react";
import {Search} from "react-feather";

const SearchBar= () => {
    return(
        <div className="home-cover  container   d-flex  justify-content-center align-items-center">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <h4 className="text-site2">What are you looking for?</h4>
                <div className="col-11 search-contaner mt-4">
                    <input type="text" className="search-input col-10 col-lg-11 col-xl-11" placeholder="Search for a developer"/>
                    <div className="col-2 col-lg-1 col-xl-1 d-flex justify-content-center align-items-center">
                        <button className="col-11 btn-search-site"><Search size={35}/></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchBar