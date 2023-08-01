import './App.css';

const Welcome = (props) => {
  console.log(props);
  return (
    <div>
      <p>안녕하세요 {props.userName}님! {props.age}세 입니다.</p>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Welcome userName="홍길동" age={14}></Welcome>
    </div>
  );
}

export default App;
