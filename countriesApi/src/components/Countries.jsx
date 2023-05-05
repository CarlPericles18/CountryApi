import { NavLink,Outlet, useParams } from "react-router-dom"
import data from "../data"


export default function Countries(props){
    const {name} = useParams();

    return(
        <div className={props.darkMode ? "darkC":""}>
            <div >
                <NavLink to='/'><button className='BackBtn'>Back</button></NavLink>
            </div>
           <div className={props.darkMode ? "DarkCont":"Containers"}>
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
                            <div className="secondContainer">
                                <h4>Top Level Domain: <span className="information">{countriesMapped.topLevelDomain}</span></h4>
                                <h4>Currencies: <span className="information">{countriesMapped.currencies.map((x)=>{return x.name})}</span></h4>
                                <h4>Languages: <span className="information">{countriesMapped.languages.map((x)=>{return x.name}).toLocaleString()}</span></h4>
                            </div>
                            <span>
                                <h3>Border Countries:</h3>
                                <div className="borderDiv">{countriesMapped.borders ? countriesMapped.borders.map((x)=>{
                                        

                                    return <NavLink to={`/Countries/${countriesMapped.name}`}><div className={props.darkMode? "darkBorderDivTwo":"borderDivTwo"}>
                                                        {x}
                                            </div></NavLink>
                                }): "N/A"}</div>
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