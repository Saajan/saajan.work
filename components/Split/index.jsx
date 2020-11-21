import React from 'react';
import Link from 'next/link';
import { SplitLayout, RightSplit, LeftSplit } from './styled';
import styles from '../../styles/Split.module.css'

export default () => {
    return (
        <SplitLayout>
            <LeftSplit>
                <div className={styles.introContent}>
                    <Link href={`/engineer`}>
                        <div>
                            <div className={styles.profile}>
                                <img src="images/profile1.png" alt="engineer"></img>
                            </div>
                            <h1>
                                <span>Software Engineer</span>
                            </h1>
                        </div>
                    </Link>
                </div>
            </LeftSplit>
            <RightSplit>
                <div className={styles.introContent}>
                    <Link href={`/music`}>
                        <div>
                            <div className={styles.profile}>
                                <img src="images/profile2.png" alt="dj"></img>
                            </div>
                            <h1>
                                <span>DJ (The Beatlog)</span>
                            </h1>
                        </div>
                    </Link>
                </div>
            </RightSplit>
        </SplitLayout>
    )
}