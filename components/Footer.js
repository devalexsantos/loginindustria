export default function Footer() {
  return (
    <div className="flex flex-wrap justify-center py-10 lg:py-20 px-10 lg:px-10 bg-footerColor text-secondary">
      
      <div className="px-2 py-4 w-full lg:w-1/5 items-center leading-8">
        <h2 className="text-3xl font-bold text-white">Login Informática</h2>
        <div>Com mais de 25 anos de mercado, a Login Informática 
        é uma das empresas pioneiras na fabricação de computadores,
        notebooks e netbooks.
        <p className="text-white underline"><a href="https://loja.login.com.br/nossa-historia/" target="_blank" rel="external">Conheça mais sobre a Login.</a></p>
        </div>
      </div>

      <div className="px-2 py-4 lg:pl-14 w-full lg:w-1/4 items-center leading-9">
      <h2 className="text-3xl font-bold text-white">Acesso Rápido</h2>
        <ul className="list-none">
          <li>Central de Downloads</li>
          <li>Prêmios e Certificados</li>
          <li>Fale Conosco</li>
          <li>PC Verde</li>
          <li>Suporte Técnico</li>
        </ul>
      </div>

      <div className="px-2 py-4 w-full lg:w-1/5 items-center">
      <h2 className="text-3xl font-bold text-white">Informações para Contato</h2>
        <p className="text-white"><i className="fa fa-phone p-3"></i> Telefones</p>
        <span>(71) 2106-2730 / 0800 703 9002</span>

        <p className="text-white"><i className="fa fa-envelope p-3"></i> E-mail Principal</p>
        <span>suportetecnico@login.com.br</span>

        <p className="text-white"><i className="fa fa-map-marker p-3"></i> E-mail Principal</p>
        <span>Alameda das Cajazeiras, 560 - Caminho das Árvores, Salvador - BA, 41820-470
</span>
      </div>
      </div>
  )
}