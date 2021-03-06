import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";

export default function CorporateLine() {
  const { isOpen: isOpen01, onOpen: onOpen01, onClose: onClose01 } = useDisclosure();
  const { isOpen: isOpen02, onOpen: onOpen02, onClose: onClose02 } = useDisclosure();
  const { isOpen: isOpen03, onOpen: onOpen03, onClose: onClose03 } = useDisclosure();

  const { isOpen: isOpenPC01, onOpen: onOpenPC01, onClose: onClosePC01 } = useDisclosure();
  const { isOpen: isOpenPC02, onOpen: onOpenPC02, onClose: onClosePC02 } = useDisclosure();
  const { isOpen: isOpenPC03, onOpen: onOpenPC03, onClose: onClosePC03 } = useDisclosure();


  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="flex py-20 bg-white justify-center">
        <div className="container text-center m-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">Linha Corporate</h3>
        <div className="px-[10%]">
        <Slider {...config}>
          <div className="card-wrapper">
            <div className="card">
            <div className="border-4 m-4">
              <a className="cursor-pointer" onClick={onOpen01}><img src="/computers/desktop_01.jpg" /></a>
            </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
            <div className="border-4 m-4">
            <a className="cursor-pointer" onClick={onOpen02}><img src="/computers/desktop_02.jpg" /></a>
            </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
            <div className="border-4 m-4">
            <a className="cursor-pointer" onClick={onOpen03}> <img src="/computers/desktop_03.jpg" /></a>
            </div>
            </div>
          </div>
        </Slider>
        <p>
        Computadores produzidos sob medida, com a mais avan??ada tecnologia e padr??o internacional de qualidade.
        Verifique o modelo de seu equipamento e visualize o cat??logo correspondente.
        Caso n??o encontre aqui o cat??logo de seu produto, entre em contato conosco pelo
        formul??rio de contato no final desta p??gina.
        </p>
        <div className="flex flex-col justify-center py-10 my-20 items-center border border-borderprimary">
          <h4 className="text-4xl font-bold text-primary py-4">Cat??logos</h4>
          <div className="container max-w-[700px]">
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "#096d86", color: "white"}}>
                    <Box flex="1" textAlign="center">
                      <div className="text-xl font-bold">Section 1 title</div>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                L4100 LOG Q370
                </AccordionPanel>
                <AccordionPanel pb={4}>
                L4100 LOG Q370
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "#096d86", color: "white"}}>
                    <Box flex="1" textAlign="center">
                      <div className="text-xl font-bold">Section 1 title</div>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                L4100 LOG Q370
                </AccordionPanel>
                <AccordionPanel pb={4}>
                L4100 LOG Q370
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="flex flex-col justify-center pb-10 items-center border border-borderprimary">
          <h4 className="text-4xl font-bold text-primary py-4">Componentes</h4>
          <div className="container max-w-[700px]">
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "#096d86", color: "white"}}>
                    <Box flex="1" textAlign="center">
                      <div className="text-xl font-bold">Section 1 title</div>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                L4100 LOG Q370
                </AccordionPanel>
                <AccordionPanel pb={4}>
                L4100 LOG Q370
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "#096d86", color: "white"}}>
                    <Box flex="1" textAlign="center">
                      <div className="text-xl font-bold">Section 1 title</div>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                L4100 LOG Q370
                </AccordionPanel>
                <AccordionPanel pb={4}>
                L4100 LOG Q370
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="flex flex-col justify-center pb-10 items-center">
        <h4 className="text-4xl font-bold text-primary py-4">Manuais</h4>
        </div>

        <div className="flex flex-col justify-center items-center">
        <h4 className="text-4xl font-bold text-primary py-4">Linha de Produ????o</h4>
        <p>
        F??brica instalada no Polo Industrial de Ilh??us com 15 mil metros quadrados. 
        O processo de fabrica????o possui certifica????o ISO 9001.
        </p>
        </div>

        <div className="container">
        <Slider {...config}>
          <div className="card-wrapper">
            <div className="card">
            <div className="border-4 m-4">
              <a className="cursor-pointer" onClick={onOpenPC01}><img src="/computers/g1.jpg" /></a>
                <p className="text-center bg-secondary text-white p-2">
                  Equipamentos de produ????o com alta tecnologia e performance.
                </p>
              
            </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
            <div className="border-4 m-4">
            <a className="cursor-pointer" onClick={onOpenPC02}><img src="/computers/g2.jpg" /></a>
              <p className="text-center bg-secondary text-white p-2">
                Fabrica????o de placas m??e e mem??rias para notebooks e desktops
              </p>
            
            </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
            <div className="border-4 m-4">
            <a className="cursor-pointer" onClick={onOpenPC03}> <img src="/computers/g3.jpg" /></a>
            <p className="text-center bg-secondary text-white p-2">
                Componentes de qualidade que garantem maior desempenho e durabilidade.
              </p>
            
            </div>
            </div>
          </div>
        </Slider>
        </div>

        </div>
        </div>
            <Modal isOpen={isOpen01} onClose={onClose01} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <img src="/computers/desktop_01.jpg"/>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose01}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpen02} onClose={onClose02} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                <img src="/computers/desktop_02.jpg"/>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose02}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpen03} onClose={onClose03} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                <img src="/computers/desktop_03.jpg"/>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose03}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpenPC01} onClose={onClosePC01} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <div className="mt-10">
                <img src="/computers/g1.jpg"/>
                </div>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClosePC01}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpenPC02} onClose={onClosePC02} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                <div className="mt-10">
                <img src="/computers/g2.jpg"/>
                </div>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClosePC02}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isOpenPC03} onClose={onClosePC03} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                <div className="mt-10">
                <img src="/computers/g3.jpg"/>
                </div>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClosePC03}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
    </div>
  )
}