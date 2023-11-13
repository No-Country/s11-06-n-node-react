import Modal from "react-modal";
Modal.setAppElement("#root");
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";

import { ImageProfileUserMedium } from "../Images/ImageProfileUser";

const ModalUserActive = ({ selectedUser, openModal, closeModal, modal }) => {
    
  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        className={"overflow-y-scroll h-full"}
      >
        <div className="flex justify-center items-center h-full text-sm text-greenPrimary">
          <div className="border border-graySecundary max-w-md  w-full sm:p-8 shadow-2xl bg-white rounded-lg relative flex flex-col justify-center items-center">
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-2xl text-greenSecundary"
              >
                <GrClose />
              </button>
            </div>
            <div className="px-7 py-5 flex flex-col max-w-4xl mx-auto">
              <div className="flex justify-between items-center gap-x-5 mb-10">
                <div>
                  <ImageProfileUserMedium imagen={selectedUser.avatar} />
                </div>
                <div className="flex flex-col gap-y-2 items-center">
                  <p className="text-xl font-bold text-center">
                    {selectedUser.name} {selectedUser.lastname}
                  </p>
                  <div className="flex items-center gap-2 justify-center">
                    Habla:
                    {selectedUser.languages?.map((image, index) => (
                      <img
                        src={image.flag}
                        key={index}
                        alt="idioma"
                        className="w-[15%] mr-1"
                      />
                    ))}
                  </div>
                  <div className="mr-1 text-md -ml-1 flex items-center">
                    <CiLocationOn />
                    {selectedUser.location}
                  </div>
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Comenzar charla"
              className="bg-greenPrimary p-2 text-white font-bold w-fit  rounded-md cursor-pointer hover:bg-greenSecundary duration-75"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalUserActive;
