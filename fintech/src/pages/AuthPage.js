import React from 'react'
import AppHeader from '../components/common/AppHeader';
import styled from "styled-components";

const AuthBlock = styled.div`
    border: 1px solid #3366FF;
    border-radius: 10px;
    background-color: #3366FF;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10rem 2rem;
`;

const AuthPage = () => {
    const handleClick = () => {
        const clientId = process.env.REACT_APP_CLIENT_ID; //<-- 본인의 client id
        window.open(`https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`, "_parent");
    };

    return (
        <div>
        <AppHeader title={"인증시작"}> </AppHeader>
        <AuthBlock onClick={handleClick}>사용자 인증 받기</AuthBlock>
        </div>
    )
}

export default AuthPage