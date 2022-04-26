import * as React from "react"
import data from "../../data/appearance.json"
import menu from "../../data/menu.json"
import { Link } from "gatsby"
import * as Styles from "../styles/navbar.module.css"
import Logo from "../images/fava-advisory-logo.png"

export default function Navbar() {
    return (
        <div className={`uk-position-top uk-padding-small ${Styles.mainNav}`}>
            <div className="uk-navbar-container uk-navbar-transparent">
                <div className="uk-container uk-container-expand">
                    <div data-uk-navbar>
                        <div className="uk-navbar-left">
                            <Link to="/" className="uk-navbar-item uk-logo">
                                    <img src={Logo} alt="" width={200}/>
                            </Link>
                            <ul className={`uk-navbar-nav uk-light ${Styles.navbarLinks}`}>
                                {menu.menu.map((node) => {
                                    return (
                                        <li>
                                            <Link to={node.link}>{node.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            <Link to="/listings" className={Styles.ctaButton}>Exclusive Listings</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}