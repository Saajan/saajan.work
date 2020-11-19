import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src="/loading.svg" alt="Loading" className={styles.logo} />
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
