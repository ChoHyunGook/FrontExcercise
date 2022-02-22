import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Circle(){
    const[pi,setPi]=useState(0.0);
    const[half,setHalf]=useState(0.0);
    const[result,setResult]=useState(0.0);
    const sum=()=>{
        let pi=document.getElementById('pi').value
        let half=document.getElementById('half').value
        setPi(pi)
        setHalf(half)
        setResult(pi*half*half)
    }

    return <Layout><h1>원넓이 계산기</h1>
        <label htmlFor="">원주율</label><br/>
        <input id="pi" type=""></input><br/>
        <label htmlFor="">반지름</label><br/>
        <input id="half" type=""></input>
        <button onClick={()=>{sum()}}>입력</button><br/>
        <>원주율 {pi}<br/> 반지름 {half}의 원넓이는<br/>{result}입니다.</>
    </Layout>
}