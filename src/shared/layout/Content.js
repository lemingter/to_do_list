import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Content = ({children}) => {
    return (
        <main>
            {children}
        </main>
    );
}

Header.propTypes = {
    children: PropTypes.element.isRequired
}

export default Content;