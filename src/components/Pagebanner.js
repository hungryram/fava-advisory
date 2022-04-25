import * as React from "react"

export default function Pagebanner({ title }) {
    return (
        <div>
            <div className="uk-section uk-section-xlarge" style={{ backgroundColor: '#111820' }}>
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