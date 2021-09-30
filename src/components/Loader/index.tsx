import React from 'react';
import { LoaderProps } from "./interface";

const Loader = ({ spin, icon }: LoaderProps) => {
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
