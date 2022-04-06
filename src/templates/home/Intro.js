import * as React from "react"
import { Link } from "gatsby"
import * as Styles from "../../styles/intro.module.css"

export default function Intro() {
    return (
        <div className={`uk-section uk-section-large ${Styles.introSection}`}>
            <div className="uk-container uk-container-expand">
                <div data-uk-grid>
                    <div className="uk-width-1-3@s uk-light">
                        <div className="uk-width-large">
                            <h2 className="uk-heading-small">Uniquely Designed for What Matters to You</h2>
                            <Link to="" className="uk-button uk-button-primary">Learn more about us</Link>
                        </div>
                    </div>
                    <div className="uk-width-expand@s">
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta excepturi quidem! Ad vitae blanditiis atque, eius itaque inventore debitis id doloribus laborum tenetur explicabo facilis minus dignissimos voluptatibus quaerat!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam perferendis quo laudantium praesentium. Beatae!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}