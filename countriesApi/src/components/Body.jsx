import React, { useState, useEffect} from 'react';
import data from "../data"
import {NavLink, Outlet} from 'react-router-dom'


export default function Body(props){
    const [countrySearch, setCountrySearch] = useState("")
   
    return (
        <div className="container">
            <div className="countryFilter">
                <input className="searchBar" type="text" placeholder="Search for a country..." onChange={(event) =>
                    setCountrySearch(event.target.value)}
                />
            </div>
            <div className="regionFilter">
                <div className="region" onClick={props.toggleDropDown}>Filter by Region
                    <div><img className="arrowDown" src="../../public/images/icons8-down-24.png" alt="downArrow"></img></div>
                        </div>
                            <div className={props.dropDown ? "Region-Active" : "Region-DeActive"}>
                                <div className='regions'>
                                    <div><button>America</button></div>
                                    <div>Africa</div>
                                    <div>Asia</div>
                                    <div>Europe</div>
                                    <div>Oceania</div>
                                </div>
                            <div>
                        </div>
                </div>
            </div>
            <div>
                {
                 data.filter((fil) => {
                   if(countrySearch == ""){
                     return fil;
                   }else if(fil.name.toLowerCase().includes(countrySearch.toLowerCase())){
                     return fil;
                   }
                 })
                .map((countries)=>{
                    return(
                        <div  className="Container">
                                <div className="flagContainer">
                                  
                                <NavLink className="NavLinks" to={`/Countries/${countries.name}`}><img className="flagImg" src={countries.flags.svg}></img>
                                <div className="countriesInfo">
                                        <h2 className='CountryName'>{countries.name}</h2>
                                        <h4>Population: <span className="information">{countries.population.toLocaleString()}</span></h4>
                                        <h4>Region: <span className="information">{countries.region}</span></h4>
                                        <h4>Capital: <span className="information">{countries.capital}</span></h4>
                                    </div>
                                </NavLink>
                                </div>
                        </div>
                        )
                    })
                
                }
            </div>
        
               
        </div>
    )
}