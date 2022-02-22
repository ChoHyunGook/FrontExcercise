import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Change(){
    const[input,setInput]=useState(0);
    const[result,setResult]=useState(0);
    const sum =()=>{
        let input=document.getElementById('input').value
        setInput(input)
        setResult(Number(input)-300)
    }

    return <Layout><h1>300원 커피 자판기 거스름돈</h1>
    <label htmlFor="">투입하실 금액</label><br/>
    <input id="input" type=""></input><br/>
    <button onClick={()=>{sum()}}>입력</button><br/>
    <>투입금액{input}<br/> 거스름돈{result}</>
    </Layout>
}