import * as React from "react"
import Scott from "../../images/scott-fava.jpg"
import Christine from "../../images/Christine-headshot.jpg"
import Parrish from "../../images/Parrish-headshot.jpg"
import * as Styles from "../../styles/home.module.css"

export default function Team() {
    return (
        <div className="uk-section uk-section-large dark-background">
            <div className="uk-container">
                <div className="uk-flex uk-flex-center" data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                    <div className="uk-width-2xlarge uk-text-center uk-light">
                        <h2>The Advisory Team</h2>
                        <p>The team is a dynamic group of full-time real estate professionals who provide a highly personalized advisory service focusing on curated real estate advice based on current marketing trends and creative marketing strategies. </p>
                    </div>
                </div>
            </div>
            <div className="uk-container uk-container-large uk-margin-xlarge-top">
                <div className="uk-child-width-1-2@s uk-light" data-uk-grid data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                    <div className="uk-text-right">
                        <div className="uk-card">
                            <img src={Scott} alt="" width={400} className={Styles.index} />
                            <div className={Styles.borderBox}></div>
                        </div>
                    </div>
                    <div>
                        <h2>Scott Fava</h2>
                        <p>951 - 435 - 4563</p>
                        <p>example@example.com</p>
                        <p>Scott Fava moved to Manhattan and invested in his first real estate property in 2001.
                            Post-9/11 New York City was a different world, with worried homeowners moving to the
                            suburbs and other cities around the country, but Scott bet on the City and hasn’t looked
                            back. Market ups and downs are a reality of the real estate industry, but Scott is a firm
                            believer that New York City is as recession-proof as any major city in the world--
                            typically being the last to get hit and the first to recover. New York is truly the best city in
                            the world and Scott’s love of all that the city has to offer shines through in his sales style.
                        </p>
                        <p>
                            Over the past few decades, Scott has worked on several of the most successful teams
                            in New York City. Scott created the Fava Advisory to marry his experience and industry
                            knowledge with a select group of intelligent, honest and hardworking advisors
                            dedicated to client service. Read More...</p>
                    </div>
                </div>
            </div>
            <div className="uk-container uk-container-xlarge uk-margin-xlarge-top">
                <div className="uk-light" data-uk-grid data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                    <div className="uk-text-left uk-width-1-3@s">
                        <div className="uk-card">
                            <img src={Christine} alt="" width={400} className={Styles.index} />
                            <div className={Styles.borderBox}></div>
                        </div>
                    </div>
                    <div className="uk-width-expand">
                        <div className="uk-width-2xlarge">
                            <h2>Christine LaPuma</h2>
                            <p>951 - 435 - 4563</p>
                            <p>example@example.com</p>
                            <p>Christine began her real estate career underwriting and inspecting small multi-family investment properties in the Pennsylvania area. Her interest in the industry led her to follow her dream to New York City. Christine immersed herself in the market and had immediate success in both sales and rentals.
                            </p>
                            <p>
                            She firmly believes that market knowledge and communication are key to help clients achieve their personal and financial goals. She takes the time to develop thoughtful relationships with her clients in order to help them find and sell their dream homes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-container uk-container-large uk-margin-xlarge-top">
                <div className="uk-child-width-1-2@s uk-light" data-uk-grid data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                    <div className="uk-text-right">
                        <div className="uk-card">
                        <img src={Parrish} alt="" width={400} className={Styles.index} />
                        <div className={Styles.borderBox}></div>
                        </div>
                    </div>
                    <div>
                        <h2>Parrish Salyers</h2>
                        <p>951 - 435 - 4563</p>
                        <p>example@example.com</p>
                        <p>A Colorado native, Parrish moved to Manhattan to pursue a career in theater but quickly realized that his undeniable work ethic, love of design and passion for client interactions was perfectly suited for his current role as real estate advisor. Parrish is undeniably positive and lives by the motto that we all have unlimited potential and can achieve what we want in life by working hard and striving towards our goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}