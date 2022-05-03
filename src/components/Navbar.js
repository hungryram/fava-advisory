import * as React from "react"
import data from "../../data/appearance.json"
import menu from "../../data/menu.json"
import { Link } from "gatsby"
import * as Styles from "../styles/navbar.module.css"
import Logo from "../images/fava-advisory-logo.png"
import contact from "../../data/profile.json"
import { IconContext } from "@react-icons/all-files"
import { CgMenuGridR } from "@react-icons/all-files/cg/CgMenuGridR"
import { GrClose } from "@react-icons/all-files/gr/GrClose"

export default function Navbar() {
    return (
        <>
            <div className={`uk-position-top uk-padding-small uk-visible@m ${Styles.mainNav}`}>
                <div className="uk-navbar-container uk-navbar-transparent">
                    <div className="uk-container uk-container-expand">
                        <div data-uk-navbar>
                            <div className="uk-navbar-left">
                                <Link to="/" className="uk-navbar-item uk-logo">
                                    <img src={Logo} alt="" width={200} />
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

            <div className="uk-position-top">
                <nav className="uk-navbar uk-container uk-hidden@m uk-box-shadow-small uk-padding-small">
                    <div className="uk-navbar-left">
                        <Link to="/" className="uk-navbar-item uk-logo">
                            {data.branding.logo ?
                                <img src={data.branding.logo} alt="Fava Advisory" width="150" /> : <h1>Fava Advisory</h1>
                            }
                        </Link>
                    </div>
                    <div className="uk-navbar-right">
                        <a className="uk-navbar-toggle" data-uk-toggle="target: #offcanvas-flip">
                            <IconContext.Provider value={{ size: '30px', color: 'white' }}>
                                <CgMenuGridR />
                            </IconContext.Provider>
                        </a>
                    </div>
                </nav>
            </div>

            <div id="offcanvas-flip" data-uk-offcanvas="flip: true; overlay: true">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column">

                    <IconContext.Provider
                        value={{ size: '40px', color: 'white' }}
                    >
                        <GrClose className="uk-offcanvas-close" />
                    </IconContext.Provider>


                    <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertica">
                        <li>
                            <Link to="/" className="uk-navbar-item uk-logo">
                                {data.branding.logo ?
                                    <img src={data.branding.logo} alt="Fava Advisory" width={110} data-uk-scrollspy="cls:uk-animation-slide-bottom-small;repeat:true" /> : <h1 className="uk-heading-large accent">Iris</h1>
                                }
                            </Link>
                        </li>
                    </ul>
                    <ul className="uk-nav uk-margin-auto-vertical uk-dark" data-uk-scrollspy="target: > li; cls: uk-animation-slide-left-small; delay: 100;repeat:true">
                        {menu.menu.map((node) => {
                            return (
                                <li>
                                    <Link to={node.link} className={`${Styles.menuLink}`}>{node.name}</Link>
                                </li>
                            )
                        })}
                        <li>
                            <Link to="/listings/" className={`${Styles.menuLink}`}>Exclusive Listings</Link>
                        </li>
                    </ul>
                    <ul className="uk-dark uk-padding-remove uk-list" data-uk-scrollspy="cls:uk-animation-slide-bottom-small;repeat:true">
                        <li className={Styles.listContact}>
                            <a href={`mailto: ${contact.contact_information.email}`} className={Styles.menuContact}>{contact.contact_information.email}</a>
                        </li>
                        <li className={Styles.listContact}>
                            <a href={`tel: ${contact.contact_information.cell}`} className={Styles.menuContact}>{contact.contact_information.cell}</a>
                        </li>
                        <li className={Styles.listContact}></li>
                        <li>
                            <a href="" className={Styles.menuContact}>{contact.contact_information.address} {contact.contact_information.city}, {contact.contact_information.state} {contact.contact_information.zip_code}</a>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}