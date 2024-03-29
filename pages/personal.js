import React, { Fragment } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdHome } from "react-icons/md";
import Personal from '../components/Personal';
import Layout from '../components/Layout';
import { HomeLinker } from '../styles/styled';

let easing = [0.175, 0.85, 0.42, 0.96];

export default function DiversionPage() {
  const textVariants = {
    exit: { x: -100, opacity: 0, transition: { duration: 1, ease: easing } },
    enter: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.1, duration: 1, ease: easing }
    }
  };
  return (
    <motion.div initial="exit" animate="enter" exit="exit">
      <motion.div variants={textVariants}>
        <Layout>
          <section className="container mx-auto py-20">
            <Link href={`/`}>
              <HomeLinker>
                <Fragment>
                  <MdHome className="home-icon" />
                </Fragment>
              </HomeLinker>
            </Link>
            <Personal />
          </section>
        </Layout>
      </motion.div>
    </motion.div>
  )
}
