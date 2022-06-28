import * as React from "react"
import showdown from "showdown"
import { GatsbyImage } from "gatsby-plugin-image"
import * as Styles from "../../styles/team.module.css"

export default function Teamsingle({ title, phone, email, photo, markdown }) {
    const converter = new showdown.Converter();
    return (
        <>
            <div className="uk-section uk-section-large">
                <div className="uk-container uk-container-large">
                    <div className="uk-grid-large" data-uk-grid>
                        <div className="uk-width-1-3@s">
                            <div className="uk-position-relative">
                                <GatsbyImage
                                    image={photo.childImageSharp.gatsbyImageData}
                                    alt={title}
                                />
                                <div className={Styles.teamBox}></div>
                            </div>
                            <div className="team-contact uk-margin-large-top">
                                <h3>GET IN TOUCH</h3>
                                <span><strong>Phone:</strong> <a href={`tel: ${phone}`} className="uk-link-reset">{phone}</a></span><br />
                                <span><strong>Email:</strong> <a href={`mailto: ${email}`} className="uk-link-reset">{email}</a></span>
                            </div>
                        </div>
                        <div className="uk-width-expand@s">
                            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(markdown) }} />
                            <div className="uk-margin-large">
                                <div>
                                    <a href={`tel: ${phone}`} className="uk-button uk-button-primary">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}