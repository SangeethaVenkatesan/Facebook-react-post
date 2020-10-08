import React from 'react'

import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">

            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6714963134513336320"
                height="100%" width="340" frameborder="0"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
                title="Profile"
            ></iframe>

        </div>
    )
}

export default Widgets
