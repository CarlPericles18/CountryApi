import React, { useState, useEffect} from 'react';
import data from "../data"
import {NavLink, Outlet} from 'react-router-dom'


export default function Body(props){

    const [countrySearch, setCountrySearch] = useState("")
    const [countryFilter, setCountryFilter] = useState(data)

    const filterItems = (items)=>{
        const updatedItems = data.filter((currentItem)=>{
            return currentItem.region === items
        })
        setCountryFilter(updatedItems)
    }

    const active = props.dropDown ? "Region-Active" : "Region-DeActive"
    return (

        <div className={props.darkMode ? "darkBody":"container"}>
            <div className="countryFilter">
                <input className={props.darkMode? "searchBarDark":"searchBar"} type="text" placeholder="Search for a country..." onChange={(event) =>
                    setCountrySearch(event.target.value)}
                />
            </div>
            <div className={props.darkMode ? "darkRegionFil" : "regionFilter"}>
                <div className={props.darkMode? "darkRegion":"region"} onClick={props.toggleDropDown}>Filter by Region
                    <div><img className="arrowDown" src={props.darkMode ? "../../public/images/arrow-White-xxl.png":"../../public/images/icons8-down-24.png"} alt="downArrow"></img></div>
                        </div>
                            
                                <div  className={
                                    `${props.dropDown ? "Region-Active" : "Region-DeActive"} ${props.darkMode ? "darkAct" : "dark-deAct"}`
                                    }>
                                    <div className={props.darkMode ? "darkRegions":"regions"}>
                                        <div><button onClick={()=>setCountryFilter(data)}>All Countries</button></div>
                                        <div><button onClick={()=>filterItems("Americas")}>America</button></div>
                                        <div><button onClick={()=>filterItems("Africa")}>Africa</button></div>
                                        <div><button onClick={()=>filterItems("Asia")}>Asia</button></div>
                                        <div><button onClick={()=>filterItems("Europe")}>Europe</button></div>
                                        <div><button onClick={()=>filterItems("Oceania")}>Oceania</button></div>
                                    </div>
                                </div>
            </div>
            <div>
                {countryFilter.filter((fil) => {
                  if(countrySearch == ""){
                    return fil;
                  }else if(fil.name.toLowerCase().includes(countrySearch.toLowerCase())){
                    return fil;
                  }
                })
                .map((countries)=>{
                    return(
                        <div  className={props.darkMode ? "DarkCont":"Container"}>
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

