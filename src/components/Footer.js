import * as React from "react"
import Logo from "../images/fava-advisory-logo.png"
import * as Styles from "../styles/footer.module.css"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { IconContext } from "@react-icons/all-files"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"
import { Link } from "gatsby"
import info from "../../data/profile.json"

export default function Footer() {
    return (
        <div className={`footer ${Styles.footerBackground}`}>
            <div className="uk-section uk-light uk-text-center">
                <div className="uk-container uk-container-xlarge">
                    <div className="uk-child-width-1-3@s uk-flex-middle" data-uk-grid>
                        <div className="uk-text-left@s">
                            <Link to="/"><img src={Logo} alt="" width={200} /></Link>
                        </div>
                        <div>
                            <h4>Subscribe to our newsletter</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit expedita molestiae magni velit optio reprehenderit incidunt libero necessitatibus laborum?</p>

                        </div>
                        <div>
                            {info.social_media.instagram &&
                                <IconContext.Provider value={{ size: '30px' }}>
                                    <a href={info.social_media.instagram} className="uk-padding-small" target="_blank" rel="noopener noreferrer">
                                        <AiOutlineInstagram />
                                    </a>
                                </IconContext.Provider>

                            }
                            {info.social_media.facebook &&
                                <IconContext.Provider value={{ size: '30px' }}>
                                    <a href={info.social_media.facebook} className="uk-padding-small" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookF />
                                    </a>
                                </IconContext.Provider>
                            }
                            {info.social_media.youtube &&
                                <IconContext.Provider value={{ size: '30px' }}>
                                    <a href={info.social_media.youtube} className="uk-padding-small" target="_blank" rel="noopener noreferrer">
                                        <AiFillYoutube />
                                    </a>
                                </IconContext.Provider>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section uk-section-small">
                <div className="uk-container uk-container-xlarge">
                    <div className="uk-child-width-1-3@s uk-light" data-uk-grid>
                        <div>
                            <ul className="uk-list">
                                <li className="uk-display-inline uk-padding-small">
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li className="uk-display-inline uk-padding-small">
                                    <a href="">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="uk-text-center">
                            <p className="uk-text-small">&copy; Copyright {new Date().getFullYear()} &middot; {info.company} &middot; Built by <Link to="https://www.hungryram.com/" className="uk-link-reset">Hungry Ram LLC</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}