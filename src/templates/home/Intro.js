import * as React from "react"
import { Link } from "gatsby"
import * as Styles from "../../styles/home.module.css"

export default function Intro() {
    return (
        <div className="uk-section uk-section-large">
            <div className="uk-container uk-container-xlarge">
                <div data-uk-grid>
                    <div className="uk-width-1-2@s uk-dark" data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                        <div>
                            <h2 className="uk-heading-small">We are not just brokers</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nesciunt ad voluptas error quaerat illum veniam cupiditate sed perspiciatis sequi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a, maiores animi pariatur maxime quos.</p>
                            <Link to="" className="uk-button uk-button-primary">Learn more</Link>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-medium-top uk-margin-large-right">
                    <div className="uk-flex uk-flex-right">
                        <div className="uk-position-relative" data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                            <video src="https://res.cloudinary.com/hungryram19/video/upload/v1649728898/scott-fava/video.mp4" width="1000" height="" muted controls data-uk-video="autoplay: inview"></video>
                            <div className={Styles.videoFrame}></div>
                            <div className={Styles.videoFrameTwo}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}