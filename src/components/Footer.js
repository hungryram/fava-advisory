import * as React from "react"
import Logo from "../images/fava-advisory-logo.png"
import * as Styles from "../styles/footer.module.css"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { IconContext } from "@react-icons/all-files"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"
import { Link } from "gatsby"

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
                            <IconContext.Provider value={{ size: '30px' }}>
                                <a href="" className="uk-padding-small">
                                    <AiOutlineInstagram />
                                </a>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ size: '30px' }}>
                                <a href="" className="uk-padding-small">
                                    <FaFacebookF />
                                </a>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ size: '30px' }}>
                                <a href="https://www.youtube.com/channel/UC4r7ohm7SEJzqwLhXxb1zKg" className="uk-padding-small">
                                    <AiFillYoutube />
                                </a>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section uk-section-small">
                <div className="uk-container uk-container-xlarge">
                    <div className="uk-child-width-1-3@s uk-light" data-uk-grid>
                        <div>
                            <ul className="uk-listt">
                                <li className="uk-display-inline uk-padding-small">
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li className="uk-display-inline uk-padding-small">
                                    <a href="">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="uk-text-center">
                            <p>Copyright</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}