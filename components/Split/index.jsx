import React from 'react';
import Link from 'next/link';
import { SplitLayout, RightSplit, LeftSplit, LeftImg, RightImg, LinkWrapper } from './styled';

const Split = () => {
    return (
        <SplitLayout>
            <LeftSplit>
                <LinkWrapper>
                    <Link href={`/profession`}>
                        <div>
                            <div>
                                <LeftImg></LeftImg>
                            </div>
                            <h1>
                                <span>Profession</span>
                            </h1>
                        </div>
                    </Link>
                </LinkWrapper>
            </LeftSplit>
            <RightSplit>
                <LinkWrapper>
                    <Link href={`/diversion`}>
                        <div>
                            <div>
                                <RightImg></RightImg>
                            </div>
                            <h1>
                                <span>Diversion</span>
                            </h1>
                        </div>
                    </Link>
                </LinkWrapper>
            </RightSplit>
        </SplitLayout>
    )
}

export default Split;