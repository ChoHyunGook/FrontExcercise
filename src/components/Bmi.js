import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Bmi(){
    const[name,setName]=useState();
    const[inch,setInch]=useState(0);
    const[weight,setWeight]=useState(0);
    const[result,setResult]=useState(0.0);
    const sum=()=>{
        let name =document.getElementById('name').value
        let inch=document.getElementById('inch').value
        let weight=document.getElementById('weight').value
        setName(name)
        setInch(inch)
        setWeight(weight)
        setResult(Number(weight)/Number(inch)*Number(inch))
    }
return <Layout><h1>Bmi 계산기</h1>
        <label htmlFor="">이름</label><br/>
        <input id="name" type=""></input>
        <label htmlFor="">키</label><br/>
        <input id="inch" type=""></input>
        <label htmlFor="">몸무게</label><br/>
        <input id="weight" type=""></input><br/>
        <button onClick={()=>{sum()}}>입력</button><br/>
        <>당신의 Bmi지수는 {result}입니다.</>
    </Layout>
}
