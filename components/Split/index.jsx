import React from 'react';
import Link from 'next/link';
import { SplitLayout, RightSplit, LeftSplit, LeftImg, RightImg, LinkWrapper } from './styled';

const Split = () => {
    return (
        <SplitLayout>
            <LeftSplit>
                <LinkWrapper>
                    <Link href={`/professional`} prefetch>
                        <div>
                            <div>
                                <LeftImg></LeftImg>
                            </div>
                            <h1>
                                <span>Professional</span>
                            </h1>
                        </div>
                    </Link>
                </LinkWrapper>
            </LeftSplit>
            <RightSplit>
                <LinkWrapper>
                    <Link href={`/personal`} prefetch>
                        <div>
                            <div>
                                <RightImg></RightImg>
                            </div>
                            <h1>
                                <span>Personal</span>
                            </h1>
                        </div>
                    </Link>
                </LinkWrapper>
            </RightSplit>
        </SplitLayout>
    )
}

export default Split;