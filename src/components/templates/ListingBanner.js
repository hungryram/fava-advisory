import * as React from "react"
import * as Styles from "../../styles/listing.module.css"

export default function ListingBanner(props) {
    return (
        <>
            <div class="uk-cover-container" data-uk-height-viewport>
                <img src={props.image} alt="" data-uk-cover />
                <div class="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-position-center uk-light uk-text-center">
                    <div className="uk-width-2xlarge">
                        <h1 className="uk-text-uppercase uk-heading-small font-weight-medium">{props.title}</h1>
                    </div>
                </div>
                <div class={Styles.scrollDown}><a href="#form"></a></div>
            </div>
        </>
    )
}