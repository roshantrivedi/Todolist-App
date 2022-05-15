import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

 function Header(props) {
    return (
        <div className="text-center">
                <p className="text-warning h3">{props.title}</p><br/>
                {/* {props.subtitle}<br/> */}
                {/* <Link to="/">{props.title}</Link> */}
                <p>
                <Link to="/">Home</Link>  | <Link to="/about">About</Link>
                </p>
        </div> 
    )
}

Header.defaultProps = {
    title: "Default Title",
    subtitle: "Default subtitle"
}

Header.propTypes = {
    title : PropTypes.string,
    subtitle: PropTypes.string
}

export default Header;
