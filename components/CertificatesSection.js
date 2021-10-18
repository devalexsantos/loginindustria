import CustomModal from './Modal';
import { certificates } from './ItemsCertificates';

export default function PremmysAndCertificates() {

  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h4 className="text-4xl font-bold text-primary py-4">Prêmios e Certificados</h4>
      <div className="flex flex-wrap justify-center container">
        {certificates.map((item, index)=> (
                  <CustomModal
                  key={index} 
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  />
        ))}        
      </div>        
    </div>
  )
}