import { NavLink,Outlet, useParams } from "react-router-dom"
import data from "../data"


export default function Countries(){
    const {name} = useParams();
    let text = ""
    const boxFunc = (ele, index)=>{
        return(
           <div>{text += index + ":" + ele}</div>
        )
    }
    return(
        <div>
            <div>
                <NavLink to='/'><button>Back</button></NavLink>
            </div>
           <div  className="Container">
                {
                    data.filter((items)=>items.name === name)
                    .map((countriesMapped)=>{
                        return(
                <div className="flagContainer">
                    <img className="flagImg" src={countriesMapped.flag}></img>
                    <div className="countriesInfo">
                                <h2  className='CountryName'>{countriesMapped.name}</h2>
                        <div>
                            <div>
                                <h4>Native Name: <span className="information">{countriesMapped.nativeName}</span></h4>
                                <h4>Population: <span className="information">{countriesMapped.population.toLocaleString()}</span></h4>
                                <h4>Region: <span className="information">{countriesMapped.region}</span></h4>
                                <h4>Sub Region: <span className="information">{countriesMapped.subregion}</span></h4>
                                <h4>Capital: <span className="information">{countriesMapped.capital}</span></h4>
                            </div>
                            <div>
                                <h4>Top Level Domain: <span className="information">{countriesMapped.topLevelDomain}</span></h4>
                                <h4>Currencies: <span className="information"></span></h4>
                                <h4>Languages: <span className="information"></span></h4>
                            </div>
                            <span>
                                Border Countries:
                                <div></div>
                            </span>
                        </div>
                    </div>
                
                </div>
                        )
                    })
                }
            </div>

        </div>
        )

}