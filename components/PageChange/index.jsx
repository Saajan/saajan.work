import React from "react";
import { PageTransitionWrapper, Loading } from './styled';

const PageChange = (props) => {
    return (
        <PageTransitionWrapper>
            <div className="page-transition-loading">
                <Loading src="/loading.svg" alt="Loading" />
            </div>
        </PageTransitionWrapper>
    );
}

export default PageChange;
