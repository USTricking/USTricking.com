import React from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Editor from "rich-markdown-editor";

const Home = () => {
  return (
    <div className='home'>
      <main className={styles.main}>
        <h2 className={styles.title}>Our Mission:</h2>
        <p className={styles.description}>
          "To make tricking more accessible in the US through expanding and innovating events."
        </p>
        <div className={styles.button}>
          Read More
        </div>

        <div className={styles.column}>
          <Link href="/faq">
            <a className={styles.card}>
              <h3>Hosting a Gathering - FAQ &rarr;</h3>
              <p>Find in-depth information about how to host a gathering from the hosts of your favorites!</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home;