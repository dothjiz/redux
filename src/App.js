import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "./state/index"


function App() {
  const account = useSelector((state)=>state.account);
  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="App">
        <span>{account}</span>
      <button onClick={()=>depositMoney(100)}>Deposit</button>
      <button onClick={()=>withdrawMoney(100)}>Withdraw</button>

    </div>
  );
}

export default App;
