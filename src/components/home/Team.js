import * as React from "react"
import Scott from "../../images/scott-fava.jpg"
import Christine from "../../images/Christine-headshot.jpg"
import Parrish from "../../images/Parrish-headshot.jpg"
import Maryse from "../../images/Maryse.jpg"
import * as Styles from "../../styles/home.module.css"

export default function Team() {
    return (
        <div className="uk-section uk-section-large dark-background">
            <div className="uk-container">
                <div className="uk-flex uk-flex-center" data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                    <div className="uk-width-2xlarge uk-text-center uk-light">
                        <h2>The Advisory Team</h2>
                        <p>The Fava Advisory has closed over half a billion dollars' worth of sales and continue to stand at the forefront of this constantly evolving industry as tech and social media make adaptation a necessity.</p>
                        <a href="/team/" className="uk-button uk-button-text">View Our Team</a>
                    </div>
                </div>
            </div>
            <div className="uk-container uk-container-xlarge uk-margin-xlarge-top">
                <div className="uk-child-width-1-2@s uk-light" data-uk-grid data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                    <div className="uk-text-right@s uk-text-center">
                        <div className="uk-card">
                            <img src={Scott} alt="" width={400} className={Styles.index} />
                            <div className={Styles.borderBox}></div>
                        </div>
                    </div>
                    <div>
                        <h2>Scott Fava</h2>
                        <p><a href="tel:917.841.7330">917.841.7330</a></p>
                        <p><a href="mailto:scottfava@nestseekers.com">scottfava@nestseekers.com</a></p>
                        <p>Scott Fava moved to Manhattan and invested in his first real estate property in 2001.
                            Post-9/11 New York City was a different world, with worried homeowners moving to the
                            suburbs and other cities around the country. Scott bet on the City and hasn’t looked
                            back. Market ups and downs are a reality of the real estate industry, but Scott is a firm
                            believer that New York City is as recession-proof as any major city in the world--
                            typically being the last to get hit and the first to recover. New York is truly the best city in
                            the world and Scott’s love of all that the city has to offer shines through in his sales style.
                        </p>
                            <div className="uk-margin-medium-top">
                                <a href="/team/scott-fava/" className="uk-button uk-button-default">Read more</a>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    )
}