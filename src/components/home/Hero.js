import * as React from "react"
import * as Styles from "../../styles/home.module.css"

export default function Hero() {
    return (
        <div className={`uk-height-viewport ${Styles.heroBackground}`}>
            <div className="uk-position-center uk-light uk-text-center">
                <div className="uk-width-2xlarge">
                <h1 className="uk-heading-medium uk-text-uppercase">Fava Advisory</h1>
                <p> The Fava Advisory is a dynamic group of full-time real estate professionals who provide a highly personalized advisory service focusing on curated real estate advice based on current marketing trends and creative marketing strategies. Over the past several years, the Fava Advisory has closed over half a billion dollars’ worth of sales and continue to stand at the forefront of this constantly evolving industry as tech and social media make adaptation a necessity.</p>
                </div>
            </div>
        </div>
    )
}