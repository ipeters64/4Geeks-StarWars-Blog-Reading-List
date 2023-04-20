import React from "react";
import propTypes from "prop-types";

// text is an imported variable defined in propTypes //
export const Title = ({text}) => {
    return(
        <h1 className="display-5">{text}</h1>
    );
};
Title.prototypes = {
    text: propTypes.string,
};