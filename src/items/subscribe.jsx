import React from 'react';
import PropTypes from 'prop-types';

subscribe.propTypes = {
    icons: PropTypes.string,
    text: PropTypes.string
};

function subscribe(props) {
    return (
        <div className="subscribe">
            <div className="subscribe_icons"><span class="material-icons">{props.icons}</span></div>
            <div className="subscribe_text">{props.text}</div>
        </div>
    );
}

export default subscribe;