import './App.css';
import {useState} from "react";

function App() {
  const [value, setValue] = useState('0');
  const [result, setResult] = useState('0');

  function parseEval(str){
    let arr = str.split(" ");
    
    //console.log(arr)

    if (arr.includes("*") || arr.includes("/")){
      for(let i = 0; i < arr.length; i++){
        if(arr[i] === "*"){
          arr[i + 1] = (Number(arr[i-1]) * Number(arr[i+1]))
          console.log(arr)
        }else if(arr[i] === "/"){
          arr[i + 1] = (Number(arr[i-1]) / Number(arr[i+1]))
        }
      }
    }
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "+"){
          arr[i + 1] = (Number(arr[i-1]) + Number(arr[i+1]))
        }else if(arr[i] === "-"){
          arr[i + 1] =(Number(arr[i-1]) - Number(arr[i+1]))
        }
      }
    return arr[arr.length-1];
  }

  function handleClick(e){
    if(value === '0'){
      setValue(e.target.value);
      setResult(e.target.value);
    }
    else if(e.target.value === "+" || e.target.value === "-" || e.target.value === "*" || e.target.value === "/"){
      setResult(result + " " + e.target.value + " ");
      setValue(value.concat(e.target.value))
    }
    else{
      setValue(value.concat(e.target.value));
      setResult(result.concat(e.target.value))
    }
  }

  function handleClickDelete(){
    setValue('0');
  }

  function handleClickDeleteOne(){
    if(value.length > 1){
      setValue(value.slice(0, value.length - 1))
    }else{
      setValue('0')
    }
  }

  function handlePercent(){
    setValue(value / 100)
  }

  function calculate(){
    if(!parseEval(result)){
      setValue('ERROR')
    }
    else{
      setValue(parseEval(result).toString());
    }
  }

  return (
    <div className="container">
      
      <div className = 'result'>
        <div className = "retroDetail">
          <h5 className = "retrocalculator">RETROCALCULATOR</h5>
        </div>
        <div className = 'greyConteiner'>
          <input className = 'input' value = {value}></input>
        </div>
      </div>

      <div className = 'keypad'>
        <div className = 'row'>
        <button className = 'topKeys' onClick = {handleClickDelete}>AC</button>
        <button className = 'topKeys' onClick = {handleClickDeleteOne}>C</button>
        <button className = 'key' value = {"%"} onClick = {handlePercent}>%</button>
        <button className = 'key' value = {"/"} onClick = {handleClick}>÷</button>
        </div>

        <div className = 'row'>
        <button className = 'key' value = {"7"} onClick = {handleClick}>7</button>
        <button className = 'key' value = {"8"} onClick = {handleClick}>8</button>
        <button className = 'key' value = {"9"} onClick = {handleClick}>9</button>
        <button className = 'key' value = {"*"} onClick = {handleClick}>X</button>
        </div>

        <div className = 'row'>
        <button className = 'key' value = {"4"} onClick = {handleClick}>4</button>
        <button className = 'key' value = {"5"} onClick = {handleClick}>5</button>
        <button className = 'key' value = {"6"} onClick = {handleClick}>6</button>
        <button className = 'key' value = {"-"} onClick = {handleClick}>-</button>
        </div>

        <div className = 'row'>
        <button className = 'key' value = {"1"} onClick = {handleClick}>1</button>
        <button className = 'key' value = {"2"} onClick = {handleClick}>2</button>
        <button className = 'key' value = {"3"} onClick = {handleClick}>3</button>
        <button className = 'key' value = {"+"} onClick = {handleClick}>+</button>
        </div>

        <div className = 'row'>
        <button className = 'key' value = {"0"} onClick = {handleClick}>0</button>
        <button className = 'key' value = {"."} onClick = {handleClick}>.</button>
        <button className = 'bottomKey' onClick = {calculate}>=</button>
        </div>

      </div>
      
    </div>
  );
}

export default App;
