const StateComponent = () => {
    let username = "홍길동";

    // setInterval(() => {
    //     username = "고길동";
    //     console.log(username);
    // }, 5000);
    // 위와 같이 작성한다고 바뀌지 않음. 상태 값들의 변화들을 인지하기 위해 사용하는게 state의 개념

    return (
      <div>
        <p>상태 관련 코드</p>
        이름 : {username}
      </div>
    );
};

  export default StateComponent;