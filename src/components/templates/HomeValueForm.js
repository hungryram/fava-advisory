import * as React from "react"

export default function HomeValueForm() {
    return (
        <>
            <div className="uk-section uk-light" style={{ backgroundColor: "#111820" }}>
                <div className="uk-container uk-container-small">
                    <form className="uk-form-horizontal uk-margin-large" name="Home Valuation Request" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thank-you">
                        <input name="bot-field" type="hidden" />
                        <input type="hidden" name="Subject" value="Website Home Valuation Request" />

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m" for="form-horizontal-text">Name*</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="form-horizontal-text" type="text" placeholder="First and Last Name" name="Name" required />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m">Email*</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text" name="Email" required />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m">Phone*</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text" name="Phone" required />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m">Address*</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text" name="Address" required />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m">City*</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text" name="City" required />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m">State*</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text" name="State" required />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m" for="form-horizontal-select">Property Type</label>
                            <div className="uk-form-controls">
                                <select className="uk-select" id="form-horizontal-select">
                                    <option selected="selected" value="Single Family House" data-uw-styling-context="true">
                                        Single Family House
                                    </option>
                                    <option value="Co-op" data-uw-styling-context="true">
                                        Co-op
                                    </option>
                                    <option value="Condominium" data-uw-styling-context="true">
                                        Condominium
                                    </option>
                                    <option value="Lots and Land" data-uw-styling-context="true">
                                        Lots / Land
                                    </option>
                                    <option value="Multi-Unit Residential" data-uw-styling-context="true">
                                        Multi-Unit Residential
                                    </option>
                                    <option value="Commercial" data-uw-styling-context="true">
                                        Commercial
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-form-label uk-text-right@m">Condition of Property</div>
                            <div className="uk-form-controls uk-form-controls-text">
                                <label className="radio"><input id="ihfValuation_Condition" name="condition" type="radio" value="Excellent" /> Excellent</label> <label className="radio"><input name="condition" type="radio" value="Good" /> Good</label> <label className="radio"><input name="condition" type="radio" value="Fair" /> Fair</label> <label className="radio"><input name="condition" type="radio" value="Needs Work" /> Needs Work</label> <label className="radio"><input name="condition" type="radio" value="Poor" /> Poor</label>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-form-label uk-text-right@m">Bedrooms</div>
                            <div className="uk-form-controls uk-form-controls-text">
                                <label className="radio"><input id="ihfValuation_Bedrooms" name="bedrooms" type="radio" value="1" /> 1</label> <label className="radio"><input name="bedrooms" type="radio" value="2" /> 2</label> <label className="radio"><input name="bedrooms" type="radio" value="3" /> 3</label> <label className="radio"><input name="bedrooms" type="radio" value="4" /> 4</label> <label className="radio"><input name="bedrooms" type="radio" value="4+" /> 5 or more</label>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-form-label uk-text-right@m">Bathrooms</div>
                            <div className="uk-form-controls uk-form-controls-text">
                                <label className="radio"><input id="ihfValuation_Bedrooms" name="bathrooms" type="radio" value="1" /> 1</label> <label className="radio"><input name="bathrooms" type="radio" value="2" /> 2</label> <label className="radio"><input name="bathrooms" type="radio" value="3" /> 3</label> <label className="radio"><input name="bathrooms" type="radio" value="4" /> 4</label> <label className="radio"><input name="bathrooms" type="radio" value="4+" /> 5 or more</label>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m">Additional Rooms and Features</label>
                            <div className="uk-form-controls">
                                <textarea className="uk-textarea" rows="5" name="additionalRooms"></textarea>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m">Approx. Size</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text" name="squareFeet" />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m">Approx. Age of Kitchen</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text" name="kitchenAge" />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m">Approx. Age of Baths</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text" name="bathsAge" />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-right@m">Comments</label>
                            <div className="uk-form-controls">
                                <textarea className="uk-textarea" rows="5" placeholder="Additional Comments" name="comments"></textarea>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-form-controls">
                                <button className="uk-button uk-button-default">Submit</button>
                                <div className="md-content">

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}