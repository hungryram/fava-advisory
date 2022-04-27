import * as React from "react"

export default function Pagebanner({ title }) {
    return (
        <div>
            <div className="uk-section uk-section-xlarge" style={{ background: 'linear-gradient(rgb(17 24 32 / 79%), rgb(17 24 32)), url("https://res.cloudinary.com/hungryram19/image/upload/v1651036967/scott-fava/new-york-city.jpg") no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="uk-container">
                    <div data-uk-grid>
                        <div className="uk-width-1-1@s">
                            <div className="uk-flex uk-flex-center">
                            <div class="uk-text-left uk-light">
                                <div className="uk-animation-slide-left-small">
                                <h1 class="uk-text-uppercase uk-heading-small">{title}</h1>
                                </div>
                                <div className="uk-width-2xlarge uk-animation-slide-right-small">
                                <div class="uk-light uk-margin-large-left uk-margin-large-top">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repudiandae, consequuntur fuga vel mollitia nemo ab vitae tempora totam facilis?</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}