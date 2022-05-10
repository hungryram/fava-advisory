import * as React from "react"
import Ig1 from "../../images/ig-1.jpg"
import Ig2 from "../../images/ig-2.jpg"
import Ig3 from "../../images/ig-3.jpg"

export default function Instagram() {
    return (
        <>
            <div>
                <div className="uk-text-center">
                    <h2 className="font-weight-medium">Follow us on Instagram</h2>
                </div>
                <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top" data-uk-grid>
                    <div>
                        <a href="https://www.instagram.com/thefavaadvisory/" target="_blank">
                            <div className="uk-cover-container">
                                <img src={Ig1} alt="" data-uk-cover />
                                <canvas height="500"></canvas>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/thefavaadvisory/" target="_blank">
                            <div className="uk-cover-container">
                                <img src={Ig2} alt="" data-uk-cover />
                                <canvas height="500"></canvas>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/thefavaadvisory/" target="_blank">
                            <div className="uk-cover-container">
                                <img src={Ig3} alt="" data-uk-cover />
                                <canvas height="500"></canvas>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}