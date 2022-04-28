import * as React from "react"

export default function ListingBanner(props) {
    return (
        <>
            <div class="uk-cover-container" data-uk-height-viewport>
                <img src={props.image} alt="" data-uk-cover />
                <div class="uk-overlay-primary uk-position-cover"></div>
            </div>
        </>
    )
}