"use client";
import { useState, useEffect } from "react";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import Image from "next/image";
import { MdClose } from "react-icons/md";

const PropertyModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // const modalCheck = sessionStorage.getItem("bijouModal");
    // if (!modalCheck) {
    //   onOpen();
    // }
    onOpen();
  }, [])

  // const checkModal = () => {
  //   sessionStorage.setItem("bijouModal", "checked");
  // }

  const bijouModel = "/bijou.png";
  const foreclosedModel = "/foreclosed.png";
  const foreclosedPdf = "/properties_for_sale.pdf";

  const openForeclosedProperties = () => {
    // checkModal();
    window.open(foreclosedPdf, "_blank");
  };

  // Set modal size based on window width
  const modalSize = windowWidth < 850 ? "xl" : "3xl";



  return (
    <Modal
      isOpen={isOpen}
      className="over"
      size={modalSize}
      onOpenChange={onOpenChange}
      hideCloseButton
      backdrop="blur"
    >
      <ModalContent className="over">
        {(onClose) => (
          <ModalBody>
            <section className="py-8 px-6 flex gap-5 justify-between sm-screen:flex-col sm-screen:gap-10">
              <section className="flex flex-col items-center gap-4 sm-screen:gap-0">
                <div className="w-72 h-52 relative sm-screen:w-40 sm-screen:h-32">
                  <Image alt="" src={bijouModel} fill objectFit="contain" />
                </div>
                <Button
                  onPress={() => {
                    onClose();
                    // checkModal();
                  }}
                  radius="none"
                  variant="bordered"
                  className="flex m-auto relative group border w-max text-primary border-primary sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3"
                >
                  <span className="flex z-20 text-primary uppercase text-[0.8rem] font-extrabold group-hover:text-white">
                    Bijou Homes
                  </span>
                  <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-primary group-hover:w-full transition-all"></div>
                </Button>
              </section>

              <section className="flex flex-col items-center gap-4 sm-screen:gap-0">
                <div className="w-72 h-52 relative sm-screen:w-40 sm-screen:h-32">
                  <Image alt="" src={foreclosedModel} fill objectFit="contain" />
                </div>
                <Button
                  onPress={openForeclosedProperties}
                  radius="none"
                  variant="bordered"
                  className="flex m-auto relative group border w-max text-primary border-primary sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3"
                >
                  <span className="flex z-20 text-primary uppercase text-[0.8rem] font-extrabold group-hover:text-white">
                    Foreclosed Properties
                  </span>
                  <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-primary group-hover:w-full transition-all"></div>
                </Button>
              </section>

              <Button onPress={() => {
                onClose();
                // checkModal();
              }} isIconOnly radius="full" color="danger" className="absolute top-0 right-0"><MdClose /></Button>
            </section>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PropertyModal;




// "use client";
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@heroui/react";
// import Image from "next/image";

// const PropertyModal = () => {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   const bijouModel = "/bijou.png";
//   const foreclosedModel = "/foreclosed.png";

//   const foreclosedPdf = "/properties_for_sale.pdf";

//   const openForeclosedProperties = () => {
//     window.open(foreclosedPdf, '_blank');
//   }

//   return (
//     <section>
//       <Button onPress={onOpen}>Open Modal</Button>
//       <Modal isOpen={isOpen} className="over" size="xl" hideCloseButton={true} onOpenChange={onOpenChange} backdrop="blur">
//         <ModalContent className="over">
//           {(onClose) => (
//             <ModalBody>
//               <section className="py-8 px-6 flex gap-5 justify-between sm-screen:flex-col sm-screen:gap-10">
//                 <section className="flex flex-col items-center gap-4 sm-screen:gap-0">
//                   <div className="w-72 h-52 relative sm-screen:w-40 sm-screen:h-32">
//                     <Image alt="" src={bijouModel} fill objectFit="contain" />
//                   </div>
//                   <Button onPress={() => onClose()} radius="none" variant="bordered" className="flex m-auto relative group border w-max text-primary border-primary sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3">
//                     <span className="flex z-20 text-primary uppercase text-[0.8rem] font-extrabold group-hover:text-white">Bijou Homes</span>
//                     <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-primary group-hover:w-full transition-all"></div>
//                   </Button>
//                 </section>
//                 <section className="flex flex-col items-center gap-4 sm-screen:gap-0">
//                   <div className="w-72 h-52 relative sm-screen:w-40 sm-screen:h-32">
//                     <Image alt="" src={foreclosedModel} fill objectFit="contain" />
//                   </div>
//                   <Button onPress={openForeclosedProperties} radius="none" variant="bordered" className="flex m-auto relative group border w-max text-primary border-primary sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3">
//                     <span className="flex z-20 text-primary uppercase text-[0.8rem] font-extrabold group-hover:text-white">Foreclosed Properties</span>
//                     <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-primary group-hover:w-full transition-all"></div>
//                   </Button>
//                 </section>
//               </section>
//             </ModalBody>
//           )}
//         </ModalContent>
//       </Modal>
//     </section>
//   );
// }

// export default PropertyModal;