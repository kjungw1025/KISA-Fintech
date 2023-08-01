import React, { useState } from 'react';
import Welcome from "./Welcome";

const ListComponent = () => {
    const [users, setUsers] = useState([
        {username: "홍길동", age : 12, major : "소프트웨어"},
        {username: "고길동", age : 22, major : "컴퓨터공학"},
        {username: "김길동", age : 32, major : "모바일시스템공학"},
    ]);

    return (
        <div>
            {users.map((user) => {
                return <Welcome userName={ user.username } age={ user.age }></Welcome>
            })}
        </div>
    )
}

export default ListComponent;
// 자동 완성 : rafce, useStateSnippet