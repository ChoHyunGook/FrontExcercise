import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Grade(){
    const[name,setName]=useState();
    const[kor,setKor]=useState(0);
    const[eng,setEng]=useState(0);
    const[math,setMath]=useState(0);
    const[result,setResult]=useState(0.0);
    const sum=()=>{
        let name=document.getElementById('name').value
        let kor=document.getElementById('kor').value
        let eng=document.getElementById('eng').value
        let math=document.getElementById('math').value
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setResult((Number(kor)+Number(eng)+Number(math))/3)
    }

    return <Layout><h1>성적표</h1>
    <label htmlFor="">이름</label><br/>
    <input id="name" type=""></input><br/>
    <label htmlFor="">국어점수</label><br/>
    <input id="kor" type=""></input><br/>
    <label htmlFor="">영어점수</label><br/>
    <input id="eng" type=""></input><br/>
    <label htmlFor="">수학점수</label><br/>
    <input id="math" type=""></input><br/>
    <button onClick={()=>{sum()}}>입력</button><br/>
    <>이름:{name}<br/>국어점수:{kor}<br/>영어점수:{eng}<br/>수학점수:{math}<br/>평균:{result}</>
    
    </Layout>
}