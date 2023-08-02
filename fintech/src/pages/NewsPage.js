import React, { useState } from 'react';
import HeaderTitle from "../components/News/HeaderTitle";
import SearchInput from "../components/News/SearchInput";
import NewsList from "../components/News/NewsList";
import axios from "axios";

const NewsPage = () => {
    const [searchInput, setSearchInput] = useState("검색어");
    const [newsList, setNewsList] = useState([]);

    const getMonthAgo = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth())).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
    
        return year + "-" + month + "-" + day;        
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);
    };

    const handleClick = () => {
        console.log(searchInput);

        const monthago = getMonthAgo();
        console.log(monthago);

        axios.get(`https://newsapi.org/v2/everything?q=${searchInput}&from=${monthago}&sortBy=publishedAt&apiKey=8c46ef73473840f3864537c01252b0d5`)
        .then((response) => {
            console.log(response.data);
            setNewsList(response.data.articles);
            console.log("응답 수신 완료");
        });
    };

    return (
        <div>
            <HeaderTitle title={"뉴스검색"}></HeaderTitle>
            <SearchInput handleChange={handleChange} handleClick={handleClick}></SearchInput>
            <NewsList newsList={newsList}></NewsList>
        </div>
    );
};

export default NewsPage;