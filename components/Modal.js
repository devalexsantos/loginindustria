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

export default function CustomModal({title, image, description}) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return(
    <>
    <div onClick={onOpen} className="cursor-pointer p-2 flex flex-col items-center justify-center w-[200px] m-3 bg-white rounded shadow text-center">
          <img src={image}/>
          <h2 className="font-bold">{title}</h2>
            <span className="text-sm">Clique para ampliar</span>
    </div>
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay />
              <ModalContent>
              <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>
                      {description}
                    </p>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            </>
  )
}