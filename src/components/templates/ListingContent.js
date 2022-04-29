import * as React from "react"
import showdown from "showdown"
import * as Styles from "../../styles/listing.module.css"

export default function ListingContent(props) {
    const converter = new showdown.Converter();
    return (
        <>
            <div className="uk-section uk-section-large">
                <div className="uk-container uk-container-large">
                    <div className={Styles.listingContent} data-uk-grid>
                        <div className="uk-width-1-3@m">
                            <h2 className="uk-h4 uk-text-bold">Overview</h2>
                            <div className={Styles.listingCategory}>
                                {props.price &&
                                    <div>
                                        <h3>Price</h3>
                                        <p className="uk-margin-remove">{props.price}</p>
                                    </div>
                                }
                                {props.bed &&
                                    <div>
                                        <h3>Bedrooms</h3>
                                        <p className="uk-margin-remove">{props.bed}</p>
                                    </div>
                                }
                                {props.bath &&
                                    <>
                                        <div>
                                            <h3>Bathrooms</h3>
                                            <p className="uk-margin-remove">{props.bath}</p>
                                        </div>
                                    </>
                                }
                                {props.property &&
                                    <>
                                        <div>
                                            <h3>Property</h3>
                                            <p className="uk-margin-remove">{props.property}</p>
                                        </div>
                                    </>
                                }
                                {props.status &&
                                    <>
                                        <div>
                                            <h3>Property Status</h3>
                                            <p className="uk-margin-remove">{props.status}</p>
                                        </div>
                                    </>
                                }
                            </div>

                        </div>
                        <div className="uk-width-expand@m">
                            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(props.content) }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}