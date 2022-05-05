import { Link } from "gatsby"
import * as React from "react"
import * as Styles from "../../styles/home.module.css"

export default function Hero() {
    return (
        <div className={`uk-height-viewport ${Styles.heroBackground}`}>
            <div className="uk-position-center uk-light uk-text-center">
                <div className="uk-width-2xlarge uk-padding">
                <h1 className="uk-heading-medium uk-text-uppercase">Fava Advisory</h1>
                <p style={{ color: '#d7d7d7' }}> The Fava Advisory is a dynamic group of full-time real estate professionals who provide a highly personalized advisory service focusing on curated real estate advice based on current marketing trends and creative marketing strategies.</p>
                <Link to="" className="uk-button uk-button-default uk-light">Get in touch</Link>
                </div>
            </div>
        </div>
    )
}