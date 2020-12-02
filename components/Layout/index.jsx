import React, { useEffect } from 'react';
import { Wrapper } from './styled';
import { initGA, logPageView } from '../../utils/analytics'

const Layout = ({ children }) => {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
    }, []);
    return <Wrapper>{children}</Wrapper>
}

export default Layout;