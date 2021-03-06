import * as React from "react"
import { Link } from "gatsby"
import * as Styles from "../../styles/home.module.css"

export default function Intro() {
    return (
        <div className="uk-section uk-section-large">
            <div className="uk-container uk-container-xlarge">
                <div data-uk-grid>
                    <div className="uk-width-3-5@s uk-dark" data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                        <div>
                            <h2 className="uk-heading-small">We are not just brokers</h2>
                            <p>We love all things real estate but our expertise does not stop and start there. Well-versed in buying, selling and renting in New York City, the Hamptons, Connecticut, New Jersey and Florida, we are also excellent negotiators, part-time tour guides, therapists, and concierges.</p>
                            <p>Want to know where to get the best Italian food in the Village? We got you covered. Curious about the history of how the Theater District came to be? We can educate you. Need a recommendation on a hot new bar or lounge? Ask and you shall receive.</p>
                            <Link to="/team/" className="uk-button uk-button-secondary">Learn more</Link>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-medium-top">
                    <div className="uk-flex uk-flex-right">
                        <div className="uk-position-relative" data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                        <iframe width="1000" height="500" src="https://www.youtube.com/embed/YkMWRvjFhsc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ maxWidth: '100%' }}></iframe>
                            <div className={Styles.videoFrame}></div>
                            <div className={Styles.videoFrameTwo}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}