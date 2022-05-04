import * as React from "react"
import showdown from "showdown"
import * as Styles from "../../styles/team.module.css"

export default function Teamsingle(props) {
    const converter = new showdown.Converter();
    return (
        <>
            <div className="uk-section uk-section-large">
                <div className="uk-container uk-container-large">
                    <div className="uk-grid-large" data-uk-grid>
                        <div className="uk-width-1-3@s">
                            <div className="uk-position-relative">
                                <img src={props.photo} alt={props.alt_image} />
                                <div className={Styles.teamBox}></div>
                            </div>
                            <div className="team-contact uk-margin-large-top">
                                <h3>GET IN TOUCH</h3>
                                <span><strong>Phone:</strong> <a href={`tel: ${props.phone}`} className="uk-link-reset">{props.phone}</a></span><br />
                                <span><strong>Email:</strong> <a href={`mailto: ${props.email}`} className="uk-link-reset">{props.email}</a></span>
                            </div>
                        </div>
                        <div className="uk-width-expand@s">
                            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(props.markdown) }} />
                            <div className="uk-margin-large">
                                <div>
                                    <a href={`tel: ${props.phone}`} className="uk-button uk-button-primary">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}