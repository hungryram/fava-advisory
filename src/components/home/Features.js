import * as React from "react"
import Background from "../../images/footer.jpg"
import GreenSt from "../../images/20-green-st.jpg"
import Vestry from "../../images/70-vestry.jpg"
import Tribeca from "../../images/tribeca.jpg"

export default function Features() {
    return (
        <div className="uk-section uk-section-large">
            <div className="uk-container uk-container-xlarge" data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                <div className="uk-flex uk-flex-center">
                    <div className="uk-width-2xlarge uk-text-center">
                        <h2>Featured Listings</h2>
                        <p>Browse the following selection of stunning homes in the neighborhoods below.</p>
                    </div>
                </div>
                <div className="uk-section">
                    <div className="uk-child-width-1-3@s" data-uk-grid>
                        <div>
                            <a href="/listings/20-greene-street-unit-6a/" className="uk-link-reset">
                                <div className="uk-inline-clip uk-transition-toggle image-wrapper uk-cover-container uk-margin-small-bottom">
                                    <canvas height="350" width="500"></canvas>
                                    <img className="uk-transition-scale-up uk-transition-opaque" src={GreenSt} alt="" data-uk-cover />

                                </div>
                                <div className="uk-margin-small-top" data-uk-grid>
                                    <div className="uk-width-1-2">
                                        <h2 className="uk-margin-remove uk-h5 uk-text-bold accent">20 GREENE Street Unit: 6A - SOHO</h2>
                                        <span>$16,950,000</span>
                                    </div>
                                    <div className="uk-width-1-2 uk-text-right">
                                        <span>3 Beds / 4 Bath</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="/listings/70-vestry-street-unit-phs/" className="uk-link-reset">
                                <div className="uk-inline-clip uk-transition-toggle image-wrapper uk-cover-container uk-margin-small-bottom">
                                    <canvas height="350" width="500"></canvas>
                                    <img className="uk-transition-scale-up uk-transition-opaque" src={Vestry} alt="" data-uk-cover />

                                </div>
                                <div className="uk-margin-small-top" data-uk-grid>
                                    <div className="uk-width-1-2">
                                        <h2 className="uk-margin-remove uk-h5 uk-text-bold accent">70 VESTRY Street Unit: PHS - Tribeca</h2>
                                        <span>$65,000,000</span>
                                    </div>
                                    <div className="uk-width-1-2 uk-text-right">
                                        <span>5 Beds / 6 Bath</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="/listings/400-w-12th-street-unit-7c/" className="uk-link-reset">
                                <div className="uk-inline-clip uk-transition-toggle image-wrapper uk-cover-container uk-margin-small-bottom">
                                    <canvas height="350" width="500"></canvas>
                                    <img className="uk-transition-scale-up uk-transition-opaque" src={Tribeca} alt="" data-uk-cover />

                                </div>
                                <div className="uk-margin-small-top" data-uk-grid>
                                    <div className="uk-width-1-2">
                                        <h2 className="uk-margin-remove uk-h5 uk-text-bold accent">400 W 12TH Street Unit: 7C - West Village</h2>
                                        <span>$22,500,000</span>
                                    </div>
                                    <div className="uk-width-1-2 uk-text-right">
                                        <span>5 Beds / 6 Bath</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-medium-top">
                    <img src={Background} alt="" />
                </div>
            </div>
        </div>
    )
}