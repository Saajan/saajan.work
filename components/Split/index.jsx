import React from 'react';
import Link from 'next/link';
import { SplitLayout, RightSplit, LeftSplit } from './styled';
import styles from '../../styles/Split.module.css'

export default () => {
    return (
        <SplitLayout>
            <LeftSplit>
                <div className={styles.introContent}>
                    <Link href={`/profession`}>
                        <div>
                            <div className={styles.profile}>
                                <img src="images/profile1.png" alt="engineer"></img>
                            </div>
                            <h1>
                                <span>Profession</span>
                            </h1>
                        </div>
                    </Link>
                </div>
            </LeftSplit>
            <RightSplit>
                <div className={styles.introContent}>
                    <Link href={`/diversion`}>
                        <div>
                            <div className={styles.profile}>
                                <img src="images/profile2.png" alt="dj"></img>
                            </div>
                            <h1>
                                <span>Diversion</span>
                            </h1>
                        </div>
                    </Link>
                </div>
            </RightSplit>
        </SplitLayout>
    )
}