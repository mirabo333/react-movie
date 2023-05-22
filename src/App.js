import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {

    return (
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );

  // 1. TODO List

  // const [toDo, setTodo] = useState("");
  // const [toDos, setTodos] = useState([]);
  // const onChange = (event) => {
  //   setTodo(event.target.value);
  // }
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   if (toDo === "") return;
  //   setTodos((currentArray) => [toDo, ...currentArray]); // or [...currentArray, toDo]
  //   setTodo("");
  // }
  // console.log(toDos)
  // return (
  //   <div>
  //     <h1>My To Dos ({toDos.length})</h1>
  //     <form onSubmit={onSubmit}>
  //       <input
  //         value={toDo}
  //         onChange={onChange}
  //         type="text"
  //         placeholder="write your to do..."
  //       />
  //       <button>Add To Do</button>
  //     </form>
  //     <hr />
  //     <ul>
  //       {toDos.map((toDo, index) => {
  //         return <li key={index}>{toDo.toUpperCase()} :)</li>;
  //       })}
  //     </ul>
  //   </div>
  // );



  // 2. Coin Tracker

  // const [loading, setLoading] = useState(true);
  // const [coins, setCoins] = useState([])
  // const [num, setNum] = useState(0);
  // const [result, setResult] = useState(0);
  // const [coinName, setCoinName] = useState("");

  // const onChangeValue = (e) => setNum(e.target.value);
  // const onChange = (e) => {
  //   const selected = coins.filter((coin) => coin.id === e.target.value);
  //   const price = selected[0].quotes.USD.price;
  //   if (num === 0 || !num) {
  //     setResult(0);
  //     setCoinName("");
  //   } else {
  //     setResult(num / price);
  //     setCoinName(selected[0].name);
  //   }
  // }
  
  // useEffect(() => {
  //   fetch("https://api.coinpaprika.com/v1/tickers")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setCoins(json);
  //       setLoading(false);
  //     });
  // }, [])
  // return (
  //   <div>
  //     <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
  //     {loading ? (
  //       <strong>loading...</strong>
  //     ) : (
  //       <>
  //         <label htmlFor='USD'>USD</label>
  //         <input
  //           value={num}
  //           onChange={onChangeValue}
  //           type="number"
  //           placeholder="Put number you want"
  //           />
  //       <hr />
  //       <select onChange={onChange}>
  //         {coins.map((coin) => {
  //           return (
  //             <option key={coin.id} value={coin.id}>
  //               {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
  //             </option>
  //           );
  //         })}
  //           </select>
  //           <br />
  //           {result} {coinName}
  //       </>
  //     )}
  //   </div>
  // );

}

export default App;
