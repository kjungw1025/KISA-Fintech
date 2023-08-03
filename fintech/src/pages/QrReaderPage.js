import React, { useState } from 'react';
import AppHeader from '../components/common/AppHeader';
import QrCodeReader, { QRCode } from 'react-qrcode-reader';

const QrReader = () => {
    const [val, setVal] = useState('');
    const handleQrAction = (val) => {
      console.log(val);
    };

    return (
      <div>
          <AppHeader title={"QR 리더"}></AppHeader>
          <QrCodeReader delay={100} width={500} height={500} action={setVal} />
          <p>{val}</p>
      </div>
    )
}

export default QrReader