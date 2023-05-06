
export default function NavBar(props){
    return (
        <div className={props.darkMode ? "dark":"nav"}>
            <div className="title"><h2>Where in the World?</h2></div>
            <div className="darkMode" onClick={props.toggleDarkMode}><img className="DarkMode" src={props.darkMode ? "../public/images/lightMoon.png"  : "../public/images/night-mode.png"} alt="Logo"></img>Dark Mode</div>
        </div>
    )
}