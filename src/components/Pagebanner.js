import * as React from "react"

export default function Pagebanner({ title }) {
    return (
        <div>
            <div className="uk-section uk-section-xlarge" style={{ backgroundColor: '#111820' }}>
                <div className="uk-container">
                    <div data-uk-grid>
                        <div className="uk-width-1-2@s">
                            <div class="uk-text-left uk-light">
                                <h1 class="uk-text-uppercase uk-heading-small">{title}</h1>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s">
                            <div class="uk-light uk-margin-large-top">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repudiandae, consequuntur fuga vel mollitia nemo ab vitae tempora totam facilis?`</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}