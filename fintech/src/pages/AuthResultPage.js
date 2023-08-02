import React, { useState } from 'react'
import AppHeader from '../components/common/AppHeader';
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const AuthResultPage = () => {
    const queryParams = useLocation().search;
    console.log(queryParams.replace("?", "").split("&")[0].split("=")[1]);
    const parsed = queryString.parse(queryParams);
    console.log(parsed.code);
    const authCode = parsed.code;

    const [accessToken, setAccessToken] = useState("");
    const [userSeqNo, setUserSeqNo] = useState("");

    const handleClick = () => {
        let requestOption = {
            url: "/oauth/2.0/token",    // 이렇게 하면 앞 주소 부분은 proxy로 인식
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            data: {
                code: authCode,
                client_id: process.env.REACT_APP_CLIENT_ID, // 본인 클라이언트 ID
                client_secret: process.env.REACT_APP_CLIENT_SECRET, // 클라이언트 Secret
                redirect_uri: "http://localhost:3000/authResult",
                grant_type: "authorization_code",               
            },
        };

        axios(requestOption).then(({ data }) => {
            setAccessToken(data.access_token);
            setUserSeqNo(data.user_seq_no);
    
            if (data.rsp_code !== "O0001") {
              localStorage.setItem("accessToken", data.access_token);
              localStorage.setItem("userSeqNo", data.user_seq_no);
              alert("저장 완료");
            } else {
              alert("인증에 실패했습니다 다시 시도해 주세요");
            }
        });
    };

    return (
        <div>
            <AppHeader title={"인증결과 / 토큰 생성"}></AppHeader>
            <p>코드 : {authCode}</p>
            <button onClick={handleClick}>accessToken 요청</button>
            <p>accessToken: {accessToken}</p>
            <p>user_seq_no: {userSeqNo}</p>
        </div>
    )
}

export default AuthResultPage