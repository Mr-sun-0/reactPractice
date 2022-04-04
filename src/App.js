import './App.css';

function App() {
  function fetchData() {
    const url = new Request(`https://bill-processer.qiankun.workers.dev`);
    fetch(url).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="App">
      <p>请求回来的信息是：{}</p>
      <button onClick={fetchData}>请求数据</button>
    </div>
  );
}

export default App;
