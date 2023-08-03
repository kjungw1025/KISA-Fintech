import React from 'react';
import AppHeader from '../components/common/AppHeader';
import { QRCodeSVG } from 'qrcode.react';
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const QrCodePage = () => {
    const queryParams = useLocation().search;
    const parsed = queryString.parse(queryParams);
    const fintechUseNum = parsed.fintechUseNum;

    return (
        <div>
            <AppHeader title="QR 코드 생성"></AppHeader>
            <QRCodeSVG value={fintechUseNum} size={256}/>
            <p>{fintechUseNum}</p>
        </div>
    );
};

export default QrCodePage;