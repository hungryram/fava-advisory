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
                    </div>
                </div>
            </div>
            <div className="uk-container uk-container-large uk-margin-xlarge-top">
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
            <div className="uk-container uk-container-xlarge uk-margin-xlarge-top">
                <div className="uk-light" data-uk-grid data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                    <div className="uk-text-left@s uk-text-center uk-width-1-3@s">
                        <div className="uk-card">
                            <img src={Maryse} alt="" width={400} className={Styles.index} />
                            <div className={Styles.borderBox}></div>
                        </div>
                    </div>
                    <div className="uk-width-expand">
                        <div className="uk-width-2xlarge">
                            <h2>Maryse Hofstee</h2>
                            <p><a href="tel:646.270.9527">646.270.9527</a></p>
                            <p><a href="mailto:maryse@nestseekers.com">maryse@nestseekers.com</a></p>
                            <p>Born and raised in the Netherlands and London, Maryse did not fall into real estate coincidentally. Passionate about real estate her whole life, she made the decision to become a real estate broker at the early age of 18 and honed her skills while studying real estate at Hogeschool Rotterdam. After graduation, Maryse was an integral part of the real estate division of Ernst & Young in the Hague and Amsterdam. She used this experience to further broadened her industry expertise by adding legal and valuation skills, most notably by working on valuations for luxury hotels and real estate investment companies. After her time at EY, Maryse continued her career at the top brokerage firm Eefje Voogd Makelaardij in the Netherlands, ranked number one nationwide in new developments. There she worked as a top broker and managed a team of several agents for over six years, specializing in new development sales.
                            </p>
                            <div className="uk-margin-medium-top">
                                <a href="/team/maryse-hofstee/" className="uk-button uk-button-default">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="uk-container uk-container-large uk-margin-xlarge-top">
                <div className="uk-child-width-1-2@s uk-light" data-uk-grid data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                    <div className="uk-text-right@s uk-text-center">
                        <div className="uk-card">
                            <img src={Christine} alt="" width={400} className={Styles.index} />
                            <div className={Styles.borderBox}></div>
                        </div>
                    </div>
                    <div className="uk-width-expand">
                        <div className="uk-width-2xlarge">
                            <h2>Christine LaPuma</h2>
                            <p><a href="tel:972.322.8647">972.322.8647</a></p>
                            <p><a href="mailto:christinel@nestseekers.com">christinel@nestseekers.com</a></p>
                            <p>Christine began her real estate career underwriting and inspecting small multi-family investment properties in the Pennsylvania area. Her interest in the industry led her to follow her dream to New York City. Christine immersed herself in the market and had immediate success in both sales and rentals.
                            </p>
                            <p>
                            She firmly believes that market knowledge and communication are key to help clients achieve their personal and financial goals. She takes the time to develop thoughtful relationships with her clients in order to help them find and sell their dream homes.
                            </p>
                            <div className="uk-margin-medium-top">
                                <a href="/team/christine-lapuma/" className="uk-button uk-button-default">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="uk-container uk-container-xlarge uk-margin-xlarge-top">
                <div className="uk-light" data-uk-grid data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                    <div className="uk-text-left@s uk-text-center uk-width-1-3@s">
                        <div className="uk-card">
                            <img src={Parrish} alt="" width={400} className={Styles.index} />
                            <div className={Styles.borderBox}></div>
                        </div>
                    </div>
                    <div className="uk-width-expand">
                        <div className="uk-width-2xlarge">
                        <div>
                        <h2>Parrish Salyers</h2>
                        <p><a href="tel:720.285.6705">720.285.6705</a></p>
                        <p><a href="mailto:parrish@nestseekers.com">parrish@nestseekers.com</a></p>
                        <p>A Colorado native, Parrish moved to Manhattan to pursue a career in theater but quickly realized that his undeniable work ethic, love of design and passion for client interactions was perfectly suited for his current role as real estate advisor. Parrish is undeniably positive and lives by the motto that we all have unlimited potential and can achieve what we want in life by working hard and striving towards our goals.
                        </p>
                        <div className="uk-margin-medium-top">
                                <a href="/team/parrish-salyers/" className="uk-button uk-button-default">Read more</a>
                            </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}