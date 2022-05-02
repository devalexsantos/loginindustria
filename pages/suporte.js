import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from "react";

export default function Suporte() {
  const [route, setRoute] = useState("atendimento");

  const handleMenu = (menu) => {
    if (menu === "atendimento") setRoute("atendimento");
    if (menu === "politica") setRoute("politica");
    if (menu === "chamados") setRoute("chamados");
    if (menu === "assistencias") setRoute("assistencias");
  };

  return (
    <div>
      <Head>
        <title>Suporte - Login Indústria</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Setor Coorporativo da Login Informática"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="bg-gray-100 font-body">
        <Header />
        <div className="flex justify-center bg-white py-20">
          <div className="flex flex-col items-center container">
            <h3 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">
              Suporte
            </h3>
            <div className="flex flex-wrap justify-center md:px-20 lg:px-30 items-center w-full">
              <div className="md:w-1/4 sm:w-full text-center">
                <ul>
                  <li
                    className={`cursor-pointer p-1 ${
                      route === "atendimento" && "bg-primary rounded text-white"
                    }`}
                    onClick={() => handleMenu("atendimento")}
                  >
                    Canais de Atendimento
                  </li>
                  <li
                    className={`cursor-pointer p-1 ${
                      route === "chamados" && "bg-primary rounded text-white"
                    }`}
                    onClick={() => handleMenu("chamados")}
                  >
                    Abertura de Chamados
                  </li>
                  <li
                    className={`cursor-pointer mt-1 p-1 ${
                      route === "politica" && "bg-primary rounded text-white"
                    }`}
                    onClick={() => handleMenu("politica")}
                  >
                    Política de Garantia
                  </li>
                  <li
                    className={`cursor-pointer mt-1 p-1 ${
                      route === "assistencias" &&
                      "bg-primary rounded text-white"
                    }`}
                    onClick={() => handleMenu("assistencias")}
                  >
                    Assistências Autorizadas
                  </li>
                </ul>
              </div>
              <div className="md:w-3/4  sm:w-full text-left">
                {route === "atendimento" && <p>Atendimento</p>}
                {route === "chamados" && <p>Abertura de Chamados</p>}
                {route === "politica" && <p>Política de Garantia</p>}
                {route === "assistencias" && <p>Assistências Autorizadas</p>}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
