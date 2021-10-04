import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";

export default function PremmysAndCertificates() {

  const { isOpen: isOpenIso9001, onOpen: onOpenIso9001, onClose: onCloseIso9001 } = useDisclosure();
  const { isOpen: isOpenIso14001, onOpen: onOpenIso14001, onClose: onCloseIso14001 } = useDisclosure();
  const { isOpen: isOpenIec, onOpen: onOpenIec, onClose: onCloseIec } = useDisclosure();
  const { isOpen: isOpenLinux, onOpen: onOpenLinux, onClose: onCloseLinux } = useDisclosure();
  const { isOpen: isOpenDmtf, onOpen: onOpenDmtf, onClose: onCloseDmtf } = useDisclosure();
  const { isOpen: isOpenEpeat, onOpen: onOpenEpeat, onClose: onCloseEpeat } = useDisclosure();
  const { isOpen: isOpen80Plus, onOpen: onOpen80Plus, onClose: onClose80Plus } = useDisclosure();
  const { isOpen: isOpenCopy, onOpen: onOpenCopy, onClose: onCloseCopy } = useDisclosure();
  const { isOpen: isOpenIntel, onOpen: onOpenIntel, onClose: onCloseIntel } = useDisclosure();
  const { isOpen: isOpenRedHat, onOpen: onOpenRedHat, onClose: onCloseRedHat } = useDisclosure();
  const { isOpen: isOpenPpb, onOpen: onOpenPpb, onClose: onClosePpb } = useDisclosure();
  const { isOpen: isOpenPe, onOpen: onOpenPe, onClose: onClosePe } = useDisclosure();
  const { isOpen: isOpenUefi, onOpen: onOpenUefi, onClose: onCloseUefi } = useDisclosure();
  const { isOpen: isOpenTrusted, onOpen: onOpenTrusted, onClose: onCloseTrusted } = useDisclosure();


  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h4 className="text-4xl font-bold text-primary py-4">Prêmios e Certificados</h4>
      <div className="flex flex-wrap justify-center container">
        <div onClick={onOpenIso9001} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/iso9001.png"/>
          <h2 className="font-bold">ISO9001</h2>
            <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenIso14001} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/iso14001.png"/>
          <h2 className="font-bold">ISO14001</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenIec} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/iec.png"/>
          <h2 className="font-bold">IEC</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenLinux} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/linux.png"/>
          <h2 className="font-bold">HCL Linux</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenDmtf} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/dmtf.png"/>
          <h2 className="font-bold">DMTF DMI</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenEpeat} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/epeat.png"/>
          <h2 className="font-bold">Epeat Gold</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpen80Plus} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/80plus.png"/>
          <h2 className="font-bold">80 Plus</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenCopy} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/copy.png"/>
          <h2 className="font-bold">Copyright BIOS</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenIntel} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/intel.png"/>
          <h2 className="font-bold">Intel Technology Provider Platinum</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenRedHat} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/redhat.png"/>
          <h2 className="font-bold">RED HAT</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenPpb} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/ppb.png"/>
          <h2 className="font-bold">PPB</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenPe} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/abnt.png"/>
          <h2 className="font-bold">PE 290.01 E PE 351.01</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenUefi} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/uefi.png"/>
          <h2 className="font-bold">UEFI</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

        <div onClick={onOpenTrusted} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src="/certificates/trusted.png"/>
          <h2 className="font-bold">Trusted Computing Group</h2>
          <span className="text-sm">Clique para ampliar</span>
        </div>

      </div>


      <Modal isOpen={isOpenIso9001} onClose={onCloseIso9001} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>ISO 9001</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    Padrão reconhecido internacionalmente a respeito de gestão de qualidade. Atesta que a empresa possui um sistema de gestão de qualidade nos processos internos e externos.
                    </p>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseIso9001}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>


            <Modal isOpen={isOpenIso14001} onClose={onCloseIso14001} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>ISO 14001</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    A ISO 14001 é uma norma internacional que define os requisitos de Sistema de Gestão Ambiental. O objetivo é que a empresa minimize os efeitos nocivos ao ambiente causados pelas suas atividades. A Login Informática através da implantação do Sistema de Gestão Ambiental demonstra seu comprometimento com o meio ambiente, estando conforme as leis ambientais vigentes e gerenciando melhor seus riscos ambientais. Os aspectos ambientais, tais como consumo de água, energia e o descarte de materiais foram definidos e a empresa desenvolveu um programa para minimizar os impactos por eles causados.
                    </p>                
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseIso14001}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal> 

            <Modal isOpen={isOpenIec} onClose={onCloseIec} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>Certificado IEC 60950/61000/CISPR22/24 (Portaria 170/2012)</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    Atesta que os computadores Login Informática não oferecem riscos aos usuários. Esta certificação, reconhecida pelo INMETRO, assegura a integridade do usuário durante a utilização do equipamento a respeito de segurança elétrica (combustão ou choque elétrico, por exemplo) e sobre ferimentos por superfície cortante. Além disso, demonstra que uma unidade foi avaliada em laboratório especializado e não emite interferência eletromagnética.
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseIec}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpenLinux} onClose={onCloseLinux} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>HCL Linux</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    Demonstra que o os equipamentos oferecidos pela Login Informática foram submetidos a testes de compatibilidade com determinadas distribuições do Linux e aprovados.
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseLinux}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpenDmtf} onClose={onCloseDmtf} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>DMTF DMI</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    Demonstra que os equipamentos oferecidos pela Login Informática possuem compatibilidade com plataforma de gerenciamento e inventário remoto baseada no padrão DMI (desktop management interface).
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseDmtf}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpenEpeat} onClose={onCloseEpeat} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>Certificado Epeat Gold</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    Demonstra que o produto atende às mais rígidas normas internacionais de controle de impacto ambiental, como reciclagem, embalagem, retorno e eficiência energética.
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseEpeat}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpen80Plus} onClose={onClose80Plus} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>80 Plus</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    Demonstra que a fonte do equipamento possui eficiência energética de até 92%.
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose80Plus}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpenCopy} onClose={onCloseCopy} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>Copyright BIOS</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                      Demonstra que o fabricante detém direitos sobre a BIOS do equipamento, podendo modificá-la para melhor adequação ao projeto final.
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseCopy}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpenIntel} onClose={onCloseIntel} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>Intel Technology Provider Platinum</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    A Login Informática é parceiro Intel Technology Provider Platinum. Há mais de 20 anos esse programa global cultiva valiosas parcerias baseadas em uma combinação de reconhecimento, experiência e suporte. Com a Intel compartilhamos o compromisso de aprimorar as relações com o cliente, aprofundar o conhecimento e ampliar os negócios.
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseIntel}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal> 

            <Modal isOpen={isOpenRedHat} onClose={onCloseRedHat} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>RED HAT</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    Distribuidora Linux. Comprova a compatibilidade dos equipamentos Login Informática com o sistema operacional Linux.
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseRedHat}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpenPpb} onClose={onClosePpb} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>PPB</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    Baseado na Lei de Informática (Leis 8.248, 10.176 e 11.077), que apoia empresas produtoras de equipamentos de informática e que tenham por prática investir em pesquisa e desenvolvimento (P&D).
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClosePpb}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal> 

            <Modal isOpen={isOpenPe} onClose={onClosePe} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>Rótulo Ambiental – PE 290.01 E PE 351.01</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    A linha Corporate possui o Rótulo Ecológico ABNT é um Programa de rotulagem ambiental (Ecolabelling), que é uma metodologia voluntária de certificação e rotulagem de desempenho ambiental de produtos ou serviços que vem sendo praticada ao redor do mundo. É um importante mecanismo de implementação de políticas ambientais dirigido aos consumidores, auxiliando-os na escolha de produtos menos agressivos ao meio ambiente.
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClosePe}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal> 

            <Modal isOpen={isOpenUefi} onClose={onCloseUefi} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>UEFI</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    Através de uma abordagem colaborativa com empresas, instituições e especialistas de classe mundial, o Fórum UEFI promove a inovação nos padrões de tecnologia de firmware. Essas especificações UEFI extensíveis e adotadas globalmente trazem nova funcionalidade e segurança aprimorada para a evolução de dispositivos, firmware e sistema operacional.
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseUefi}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal> 

            <Modal isOpen={isOpenTrusted} onClose={onCloseTrusted} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>Trusted Computing Group</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                    Por meio de padrões e especificações abertas, o Trusted Computing Group (TCG) permite a computação segura. Os benefícios das tecnologias TCG incluem a proteção de dados e sistemas críticos para os negócios, autenticação segura e forte proteção de identidades de usuários, e o estabelecimento de forte identidade de máquina e integridade de rede.
                    </p>
                </ModalBody>
                    
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onCloseTrusted}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>           
    </div>
  )
}