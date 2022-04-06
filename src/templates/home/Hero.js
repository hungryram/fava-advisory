import * as React from "react"
import * as Styles from "../../styles/home.module.css"

export default function Hero() {
    return (
        <div className={`uk-height-viewport ${Styles.heroBackground}`}>
            <div className="uk-position-center uk-light uk-text-center">
                <div className="uk-width-2xlarge">
                <h1 className="uk-heading-medium">Fava Advisory</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex necessitatibus maxime neque quos totam velit!</p>
                </div>
            </div>
        </div>
    )
}