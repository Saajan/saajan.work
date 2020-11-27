import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Timeline from '../components/Timeline';
import { MdHome } from "react-icons/md";
import { HomeLinker } from './styled';
import Layout from '../components/Layout';
let easing = [0.175, 0.85, 0.42, 0.96];

export default function Engineer() {
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
          <section>
            <Link href={`/`}>
              <HomeLinker>
                <Fragment>
                  <MdHome className="home-icon" />
                </Fragment>
              </HomeLinker>
            </Link>
            <Timeline />
            <div>
              Angular.js, React.js, React-Native, Node.js, Express, Python Flask, Docker ,Puppeteer, D3.js, MongoDB, MySQL ,Microsoft Bot Framework, Grunt.js, Gulp.js,Angular
              Styled-Components, Antd, Material, Bootstrap, Semantic-UI, Wordpress, AWS, Heroku, Git, SVN, Jenkins, Nginx.
				</div>
          </section>
        </Layout>
      </motion.div>
    </motion.div>
  )
}
