import Head from 'next/head';
import Header from '../components/Header';
import Script from 'next/script';
import BannerTop from '../components/BannerTop';
import InfoPallet from '../components/InfoPallet';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login Indústria</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Setor Coorporativo da Login Informática"></meta>
      </Head>

      <main className="bg-gray-100">
        <Header/>
        <BannerTop />
        <InfoPallet />
      </main>

      <footer>
      <Script src="https://kit.fontawesome.com/33c943d672.js" crossorigin="anonymous"></Script>
      </footer>
    </div>
  )
}
