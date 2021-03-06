import * as React from "react"
import Logo from "../images/fava-advisory-logo.png"
import * as Styles from "../styles/footer.module.css"
import { graphql, Link, StaticQuery } from "gatsby"
import info from "../../data/profile.json"
import Social from "./Social"


export default function Footer() {
    return (
        <StaticQuery
            query={graphql`
            {
                allLegal {
                  nodes {
                    slug
                    frontmatter {
                      title
                    }
                  }
                }
              }
            `}
            render={data => (
                <div className={`footer ${Styles.footerBackground}`}>
                <div className="uk-section uk-light uk-text-center">
                    <div className="uk-container uk-container-xlarge">
                        <div className="uk-child-width-1-3@s uk-flex-middle" data-uk-grid>
                            <div className="uk-text-left@s">
                                <Link to="/"><img src={Logo} alt={info.company} width={200} /></Link>
                            </div>
                            <div>
                                <h4>Subscribe to our newsletter</h4>
                                <p>Stay up-to date with the latest news by subscribing to our newsletter.</p>
                                <div className="uk-flex uk-flex-center">
                                    <form name="Newsletter" method="POST" netlify-honeypot="bot-field" data-netlify="true" className={`uk-grid-small ${Styles.contactForm}`} data-uk-grid action="/thank-you">
                                        <input type="hidden" name="form-name" value="Newsletter" />
                                        <input name="bot-field" type="hidden" />
                                        <input type="hidden" name="Subject" value="New Newsletter Opt-in" />
                                        <div className="uk-text-center">
                                            <div uk-form-custom="target: true">
                                                <input className="uk-input" type="text" name="Email" placeholder="Email Address" />
                                            </div>
                                            <button className="uk-button uk-button-default">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div>
                            <span className="uk-light">FOLLOW US</span>
                                <Social />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-small">
                    <div className="uk-container uk-container-xlarge">
                        <div className="uk-child-width-1-3@s uk-light" data-uk-grid>
                            <div>
                                <ul className="uk-list">
                                    {data.allLegal.nodes.map((node) => {
                                        return (
                                            <li className="uk-display-inline uk-padding-small">
                                                <a href={"/legal" + node.slug} className="uk-text-small uk-link-reset"><small>{node.frontmatter.title}</small></a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="uk-text-center">
                                <p className="uk-text-small"><small>&copy; Copyright {new Date().getFullYear()} &middot; {info.company} &middot; Built by <Link to="https://www.hungryram.com/" className="uk-link-reset">Hungry Ram LLC</Link></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        />
    )
}