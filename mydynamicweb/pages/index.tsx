import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
const TypingText = () => {
  return (
    <p className={styles['animate_typing']}>
      <span><i>A curious tech lover with a solid CS background and good communication skills</i></span>
    </p>
  );
}; 
const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <title>Bill YC Hsu's Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by clicking&nbsp;
            <code className={styles.code}>
              About Me
            </code> 
          </p>

          <div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>@2023 All right reserved by Bill YC Hsu</i>
              <br></br>
              <Image
                src="/pics/logo.png"
                alt="Bill YCH Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className='text-center'>
          <div className={styles.description}>
            <h1><b>Bill Hsu</b></h1>
          </div>
          <TypingText></TypingText>
        </div>


        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <Image
                className={styles.logo}
                src="/pics/resume_photo.jpg"
                alt="Next.js Logo"
                width={400}
                height={500}
                priority
              />
            </div>
            <div className={styles.col}>
                <br></br><br></br>
                <div className={styles.row} >
                  <div className={styles.col}>
                    <Image
                      className={styles.logo}
                      src="/pics/ncu_icon.png"
                      alt="NCU"
                      width={140}
                      height={120}
                      priority
                    />
                  </div>
                  <div className={styles.col}>
                    <Image
                      className={styles.logo}
                      src="/pics/sensors_icon.png"
                      alt="NCU"
                      width={140}
                      height={120}
                      priority
                    />
                  </div>
                  <div className={styles.col}>
                    <Image
                      className={styles.logo}
                      src="/pics/wiwynn_icon.png"
                      alt="NCU"
                      width={140}
                      height={120}
                      priority
                    />
                  </div>
                </div>
                <br></br>
                <div className={styles.row}>
                  <div className={styles.col}>
                      <Image
                        className={styles.logo}
                        src="/pics/ucsd_icon.png"
                        alt="NCU"
                        width={140}
                        height={120}
                        priority
                      />
                    </div>
                    <div className={styles.col}>
                      <Image
                        className={styles.logo}
                        src="/pics/amazon_icon.png"
                        alt="NCU"
                        width={140}
                        height={120}
                        priority
                      />
                    </div>
                  <div className={styles.col}>
                    <Image
                      className={styles.logo}
                      src="/pics/alexa_icon.png"
                      alt="NCU"
                      width={140}
                      height={120}
                      priority
                    />
                  </div>
                </div>
                <br></br>
                <div className={styles.row}>
                  <div className={styles.col}>
                  <Image
                      className={styles.logo}
                      src="/pics/sccn_icon.png"
                      alt="NCU"
                      width={140}
                      height={120}
                      priority
                    />
                  </div>
                  <div className={styles.col}>
                  <Image
                      className={styles.logo}
                      src="/pics/amazon.png"
                      alt="NCU"
                      width={140}
                      height={120}
                      priority
                    />
                  </div>
                </div>
            </div>

          </div>
        </div>
        <br></br>
        <div className={styles.grid}>
          <a
            href="/about_me"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              About Me <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Please give me <b>3 minutes</b> to impress you!
            </p>
          </a>

          <a
            href="/work_exp"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              Work Exp <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Learn more about my work experience.
            </p>
          </a>

          <a
            href="/projects"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              CS Projects <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Learn more about software projects I have done. 
            </p>
          </a>

          <a
            href="/contacts"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              Contacts <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Here's my contacts if you're interested!
            </p>
          </a>

        </div>

      </main>
    </>
  )
}
