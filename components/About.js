import Image from 'next/image';

export default function About() {
  return (
    <div className="flex justify-center bg-white py-20">
      <div className="flex flex-col items-center container">
      <h3 className="text-4xl md:text-5xl font-bold text-primary text-center">Mais sobre a Login Informática</h3>
        <div className="flex flex-wrap justify-center lg:px-40 p-6 items-center">
          <div className="lg:flex-1 px-4 lg:px-12">
            <h4 className="text-xl text-center lg:text-left font-bold text-secondary">Mais de 24 anos de mercado</h4>
            <p className="text-center lg:text-left leading-6 lg:leading-8">
            A Login Informática é uma das empresas pioneiras na fabricação de computadores,
            notebooks e netbooks. Situada no pólo industrial de Ilhéus, nossa fábrica ocupa 
            uma área de 7500m², a estrutura logística de produção é informatizada e altamente 
            moderna, assim como sua estrutura de armazenagem.
            </p>
            <div className="text-center lg:text-left mt-4">
            <a className="text-sm border hover:border-0 border-gray-600 px-3 py-2 inline uppercase hover:bg-primary hover:text-white rounded mx-2">
              Leia Mais
            </a>
            </div>
          </div>
          <div className="lg:flex-1 mt-4 md:p-0">
          <img className="w-full" src="/banner_mid.jpg"/>
          </div>
        </div>
      </div>
    </div>
  )
}