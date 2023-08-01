import { useState } from "react";

const InputComponents = () => {
    let [userName, setUserName] = useState("홍길동");
    const handleClick = () => {
        console.log(userName);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setUserName(value);
        console.log(value);
    };

    return (
        <div>
            <b>{userName}</b>
            <br></br>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>이름 바꾸기</button>
        </div>
    );
};

export default InputComponents;