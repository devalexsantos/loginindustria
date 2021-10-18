import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Suporte() {
  return (
    <div>
      <Head>
        <title>Suporte - Login Indústria</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Setor Coorporativo da Login Informática"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700;800&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="bg-gray-100 font-body">
        <Header/>

        <Footer/>
      </main>
    </div>
  )
}