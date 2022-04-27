import * as React from "react"
import Background from "../../images/footer.jpg"

export default function Features() {
    return (
        <div className="uk-section uk-section-large">
            <div className="uk-container uk-container-xlarge" data-uk-scrollspy="cls:uk-animation-slide-bottom-small; delay: 200">
                <div className="uk-flex uk-flex-center">
                    <div className="uk-width-2xlarge uk-text-center">
                        <h2>Features</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam cumque odio optio magni omnis dicta non ipsum. Officia, magnam blanditiis.</p>
                    </div>
                </div>
                <div className="uk-section">
                    <div className="uk-child-width-1-3@s" data-uk-grid>
                        <div>
                            <h2>Feature One</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore laborum, corrupti sit hic sint optio impedit obcaecati repudiandae voluptatem delectus ex perferendis.</p>
                        </div>
                        <div>
                            <h2>Feature One</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore laborum, corrupti sit hic sint optio impedit obcaecati repudiandae voluptatem delectus ex perferendis.</p>
                        </div>
                        <div>
                            <h2>Feature One</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore laborum, corrupti sit hic sint optio impedit obcaecati repudiandae voluptatem delectus ex perferendis.</p>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-medium-top">
                    <img src={Background} alt="" />
                </div>
            </div>
        </div>
    )
}