import * as React from "react"
import * as Styles from "../../styles/contact.module.css"
import info from "../../../data/profile.json"
import { Link } from "gatsby"
import Social from "../Social"

export default function Contact({ props }) {
    return (
        <>
            <div className="uk-section dark-background">

            </div>
            <div className="uk-section-large dark-background">
                <div className="uk-container-large uk-container">
                    <div className="uk-light">
                        <h1 className="uk-heading-small uk-animation-slide-top-small">Let's get in touch</h1>
                    </div>
                    <div className="uk-margin-large-top">
                        <div data-uk-grid>
                            <div className="uk-width-1-3@m uk-animation-slide-left-small">
                                <div>
                                    <ul className="uk-list uk-light">
                                        <li>
                                            <span>PHONE</span><br />
                                            <a href={`tel: ${info.contact_information.cell}`} className="font-weight-medium uk-text-large">{info.contact_information.cell}</a>
                                        </li>
                                        <li className="uk-margin-medium-top">
                                            <span>EMAIL</span><br />
                                            <a href={`mailto:${info.contact_information.email}`} className="font-weight-medium uk-text-large">{info.contact_information.email}</a>
                                        </li>
                                        <li className="uk-margin-medium-top">
                                            <span>ADDRESS</span><br />
                                            <a href="" className="font-weight-medium uk-text-large">{info.contact_information.address}, {info.contact_information.city}, {info.contact_information.state} {info.contact_information.zip_code}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="uk-margin-xlarge-top">
                                    <span className="uk-light">FOLLOW US</span>
                                    <Social />
                                </div>
                            </div>
                            <div className="uk-width-expand@m uk-animation-slide-right-small">
                                <div className="uk-card uk-card-default uk-padding">
                                    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className={`uk-grid-small ${Styles.contactForm}`} data-uk-grid action="/thank-you">
                                        <input type="hidden" name="form-name" value="contact" />
                                        <input name="bot-field" type="hidden" />
                                        <input type="hidden" name="Subject" value="Website Contact Form" />
                                        <div className="uk-width-1-2@s">
                                            <label htmlFor="fname">First Name*</label>
                                            <input className="uk-input" type="text" name="First Name" id="fname" required />
                                        </div>
                                        <div className="uk-width-1-2@s">
                                            <label htmlFor="lname">Last Name*</label>
                                            <input className="uk-input" type="text" name="Last Name" id="lname" required />
                                        </div>
                                        <div className="uk-width-1-2@s">
                                            <label htmlFor="phone">Phone Number*</label>
                                            <input className="uk-input" type="text" name="Phone" id="phone" required />
                                        </div>
                                        <div className="uk-width-1-2@s">
                                            <label htmlFor="email">Email Address*</label>
                                            <input className="uk-input" type="text" name="Email" id="email" required />
                                        </div>
                                        <div className="uk-width-1-1">
                                            <label htmlFor="email">Your Message*</label>
                                            <textarea className="uk-textarea" rows="5" name="Message" id="message"></textarea>
                                        </div>
                                        <div className="uk-width-1-1">
                                            <p className="uk-text-small">By submitting the form with your information above you are agreeing to our <Link to="/legal/terms-and-conditions">Terms and Conditions</Link> and <Link to="/legal/privacy-policy">Privacy Policy</Link></p>
                                        </div>
                                        <div className="uk-width-1-1">
                                            <button className={Styles.submitBtn}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}