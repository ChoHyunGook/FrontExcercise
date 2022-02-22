import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Calc(){
    const[num1,setNum1]=useState(0);
    const[op,setOp]=useState();
    const[num2,setNum2]=useState(0);
    const[result,setResult]=useState(0);
    const sum =()=>{
        let num1=document.getElementById('num1').value
        let num2=document.getElementById('num2').value
        let op=document.getElementById('op').value
        setNum1(num1)
        setNum2(num2)
        setOp(op)
        setResult=(Number(num1) + Number(num2))
    
    }


return <Layout><h1>계산기</h1>
    <label htmlFor="">num1</label><br/>
    <input id="num1" type=""></input><br/>
    <select name="연산자" id="op">
        <option value="">+</option>
        <option value="">-</option>
        <option value="">*</option>
        <option value="">/</option>
        <option value="">%(나머지)</option>
    </select>
    <br/>
    <label htmlFor="">num2</label><br/>
    <input id="num2" type=""></input><br/>
    <button onClick={()=>{sum()}}>실행</button><br/>
    <>{num1}{op}{num2}={result}</>
    </Layout>

}