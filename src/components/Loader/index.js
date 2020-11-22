import React from 'react';

const Loader = (props) => {
    let { spin, icon } = props;
    if (typeof icon == 'undefined') {
        icon = "fa-2x fa fa-television";
    }

    if (spin) {
        icon = "fa-2x fa fa-spinner fa-spin";
    }
    return (
        <span className={icon}></span>
    )
}

export default Loader;
