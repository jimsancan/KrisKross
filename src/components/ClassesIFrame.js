import React from 'react';


const Iframe = () => {
    return (
        <div>
            <iframe
                id="sutraWidgetIframe"
                src="https://widgets.sutra.fit/iframe/kriskrosslive/schedule"
                width="100%"
                frameBorder="0" height="100%"
                allowFullScreen>
            </iframe>
            <script src="https://widgets.sutra.fit/scripts/embed.js"></script>
        </div>
    );
}

export default Iframe;