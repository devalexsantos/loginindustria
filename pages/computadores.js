import Head from 'next/head';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CorporateLine from '../components/CorporateLine';
import CertificatesSection from '../components/CertificatesSection';

export default function Computadores() {
  return(
    <div>
      <Head>
        <title>Computadores - Login Indústria</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Setor Coorporativo da Login Informática"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700;800&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="bg-gray-100 font-body">
      <Header/>
        <CorporateLine/>
        <CertificatesSection />
      <Footer/>
      </main>

      <footer>
      <Script src="https://kit.fontawesome.com/33c943d672.js" crossorigin="anonymous"></Script>
      </footer>
    </div>
  )
}