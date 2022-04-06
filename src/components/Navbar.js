import * as React from "react"
import data from "../../data/appearance.json"
import menu from "../../data/menu.json"
import { Link } from "gatsby"
import * as Styles from "../styles/navbar.module.css"

export default function Navbar() {
    return (
        <div className="uk-position-top uk-light">
            <div className="uk-navbar-container uk-navbar-transparent">
                <div className="uk-container uk-container-expand">
                    <div data-uk-navbar>
                        <div className="uk-navbar-left">
                            <Link to="/" className="uk-navbar-item uk-logo">
                                {data.branding.logo ?
                                    <img src={data.branding.logo} alt="" /> : <h1 className="uk-h2">Fava Advisory</h1>
                                }
                            </Link>
                            <ul className={`uk-navbar-nav ${Styles.navbarLinks}`}>
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
                            <Link className="uk-button uk-button-primary">Search Homes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}