import * as React from "react"

export default function Pagebanner({ title, description }) {
    return (
        <div>
            <div className="uk-section uk-section-xlarge uk-visible@m" style={{ background: 'linear-gradient(rgb(17 24 32 / 79%), rgb(17 24 32)), url("https://res.cloudinary.com/hungryram19/image/upload/v1651036967/scott-fava/new-york-city.jpg") no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="uk-container">
                    <div data-uk-grid>
                        <div>
                            <div className="uk-flex uk-flex-center">
                                <div class="uk-text-left uk-light">
                                    <div className="uk-animation-slide-left-small">
                                        <h1 class="uk-text-uppercase uk-heading-small">{title}</h1>
                                    </div>
                                    <div className="uk-animation-slide-right-small">
                                        <div class="uk-light uk-margin-large-left uk-margin-large-top">
                                            {description &&
                                                <p>{description}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="uk-section uk-section-xlarge uk-hidden@m" style={{ background: 'linear-gradient(rgb(17 24 32 / 79%), rgb(17 24 32)), url("https://res.cloudinary.com/hungryram19/image/upload/v1651036967/scott-fava/new-york-city.jpg") no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="uk-container">
                    <div className="uk-flex-center uk-text-center uk-light" data-uk-grid>
                        <div>
                            <h1 class="uk-text-uppercase uk-heading-small">{title}</h1>
                            {description &&
                                <p>{description}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}