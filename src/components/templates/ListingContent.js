import * as React from "react"
import showdown from "showdown"

export default function ListingContent(props) {
    const converter = new showdown.Converter();
    return (
        <>
            <div className="uk-section uk-section-large">
                <div className="uk-container uk-container-large">
                    <div data-uk-grid>
                        <div className="uk-width-1-3@m">

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