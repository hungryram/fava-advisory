import * as React from "react"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"
import { IconContext } from "@react-icons/all-files"
import info from "../../data/profile.json"
import * as Styles from "../styles/contact.module.css"


export default function Social() {
    return (
        <>
            <ul className={`uk-list uk-margin-medium-top ${Styles.socialIcon}`}>
                {info.social_media.instagram &&
                    <li className="uk-display-inline">
                        <a href={info.social_media.instagram} className={Styles.socialBorder} target="_blank" rel="noopener noreferrer">
                            <IconContext.Provider value={{ size: '25px' }}>
                                <AiOutlineInstagram />
                            </IconContext.Provider>
                        </a>
                    </li>
                }
                {info.social_media.facebook &&
                    <li className="uk-display-inline">
                        <a href={info.social_media.facebook} className={Styles.socialBorder} target="_blank" rel="noopener noreferrer">
                            <IconContext.Provider value={{ size: '25px' }}>
                                <FaFacebookF />
                            </IconContext.Provider>
                        </a>
                    </li>
                }
                {info.social_media.youtube &&
                    <li className="uk-display-inline">
                        <a href={info.social_media.youtube} className={Styles.socialBorder} target="_blank" rel="noopener noreferrer">
                            <IconContext.Provider value={{ size: '25px' }}>
                                <AiFillYoutube />
                            </IconContext.Provider>
                        </a>
                    </li>
                }
            </ul>
        </>
    )
}