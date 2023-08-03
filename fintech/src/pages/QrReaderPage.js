import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import QrCodeReader, { QRCode } from "react-qrcode-reader";
import ModalWithdraw from "../components/Withdraw/ModalWithdraw";
import Modal from "react-modal";

const QrReaderPage = () => {
  const [val, setVal] = useState(""); // 사용할 출금 이후 입금할 fintechUseNo
  const [openModal, setOpenModal] = useState(false); //no camera : true

  const CustomStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "9",
    },
    content: {
      width: "95%",
      border: `0 solid black`,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "99999",
    },
  };

  const closeModal = () => {
      setOpenModal(false);
  };

  const handleRead = (val) => {
      setOpenModal(true);
      setVal(val);
  };
  return (
    <div>
        <AppHeader title={"qr 리더"}></AppHeader>
        <QrCodeReader delay={100} width={600} height={500} action={handleRead} />
        <Modal
          isOpen={openModal}
          style={CustomStyles}
          onRequestClose={closeModal}
        >
        <ModalWithdraw tofintechno={val}></ModalWithdraw>
        </Modal>

        <p>{val}</p>
    </div>
  );
};

export default QrReaderPage;