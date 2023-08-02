import React, { useState, useEffect } from "react";
import AppHeader from '../components/common/AppHeader';
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from 'axios';

const BalancePage = () => {
    let accessToken = "";
    let userSeqNo = "";
    const [balance, setBalance] = useState("아직없음");

    const queryParams = useLocation().search;
    const fintechUseNum = queryString.parse(queryParams).fintechUseNum;

    const generateRandom9DigitNumber = () => {
        const min = 100000000; // Minimum value (smallest 9-digit number)
        const max = 999999999; // Maximum value (largest 9-digit number)
    
        const random9DigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return random9DigitNumber.toString();
    };

    const genTransId = () => {
        const clientNo = process.env.REACT_APP_BANK_TRAN_ID; //이용기관번호 본인것 입력
        let countnum = generateRandom9DigitNumber();
        let transId = clientNo + "U" + countnum;
        return transId;
    };    

    const generateTime = () => {
        const today = new Date();

        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);
        const hours = ('0' + today.getHours()).slice(-2); 
        const minutes = ('0' + today.getMinutes()).slice(-2);
        const seconds = ('0' + today.getSeconds()).slice(-2); 
        console.log(year + month + day + hours + minutes + seconds);

        return (year + month + day + hours + minutes + seconds);
    };

    useEffect(() => {
      console.log(localStorage.getItem("accessToken"));
      console.log(localStorage.getItem("userSeqNo"));
      console.log(fintechUseNum);
      console.log(genTransId);
      accessToken = localStorage.getItem("accessToken");
      userSeqNo = localStorage.getItem("userSeqNo");
      getBalance();
    }, []);

    const getBalance = () => {
        const sendObj = {
            bank_tran_id: genTransId(),
            fintech_use_num: fintechUseNum,
            tran_dtime: generateTime(),
            };
        
            const option = {
            method: "GET",
            url: "v2.0/account/balance/fin_num",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Authorization: `Bearer ${accessToken}`,
            },
            params: sendObj,
            };
        
            axios(option).then(({ data }) => {
            console.log(data);
            setBalance(data);
            });       
    };

    return (
        <div>
            <AppHeader title="잔액조회"></AppHeader>
            {balance}
        </div>
    )
}

export default BalancePage