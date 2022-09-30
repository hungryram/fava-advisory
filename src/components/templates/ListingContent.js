import * as React from "react"
import showdown from "showdown"
import * as Styles from "../../styles/listing.module.css"
import { PortableText } from "@portabletext/react"

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
                                {props?.Address &&
                                    <div>
                                        <h3>Address</h3>
                                        <p className="uk-margin-remove">{props.address}<br /> {props?.city} {props?.state} {props?.zip_code}</p>
                                    </div>
                                }
                                {props?.price &&
                                    <div>
                                        <h3>Price</h3>
                                        <p className="uk-margin-remove">{props?.price}</p>
                                    </div>
                                }
                                {props?.bed &&
                                    <div>
                                        <h3>Bedrooms</h3>
                                        <p className="uk-margin-remove">{props?.bed}</p>
                                    </div>
                                }
                                {props?.bath &&
                                    <>
                                        <div>
                                            <h3>Bathrooms</h3>
                                            <p className="uk-margin-remove">{props?.bath}</p>
                                        </div>
                                    </>
                                }
                                {props?.property &&
                                    <>
                                        <div>
                                            <h3>Property</h3>
                                            <p className="uk-margin-remove">{props?.property}</p>
                                        </div>
                                    </>
                                }
                                {props?.status &&
                                    <>
                                        <div>
                                            <h3>Property Status</h3>
                                            <p className="uk-margin-remove">{props?.status}</p>
                                        </div>
                                    </>
                                }
                                {props?.hoa &&
                                    <>
                                        <div>
                                            <h3>HOA</h3>
                                            <p className="uk-margin-remove">{props?.hoa}</p>
                                        </div>
                                    </>
                                }
                            </div>

                        </div>
                        <div className="uk-width-expand@m md-content">
                            {props?.content ?
                                <PortableText
                                    value={props.content}
                                />
                                :
                                <h3>Details coming soon</h3>
                            }
                            {props?.tour &&
                                <div className="uk-margin-large">
                                    <a href={props?.tour} className="uk-button uk-button-primary" target="_blank">Virtual Tour</a>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}