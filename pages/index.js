import Head from "next/head";
import Image from "next/image";
import { fetchAPI, getHomeData, getGlobalData } from "../lib/api";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const [homeData, globalData] = await Promise.all([
    getHomeData(),
    getGlobalData(),
  ]);
  return {
    props: { homeData: homeData, globalData },
    revalidate: 1,
  };
}

export default function Home({ homeData, globalData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout globalData={globalData}>
        <main className={styles.main}>
          <div>{homeData.testText}</div>
          <Image
            src={homeData.testPhoto.data.attributes.url}
            width="400px"
            height="400px"
            objectFit="cover"
          />
          <div
            dangerouslySetInnerHTML={{ __html: homeData.testRichText }}
          ></div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </Layout>
    </div>
  );
}
