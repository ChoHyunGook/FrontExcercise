import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Login(){
    const[id,setId]=useState();
    const[pw,setPw]=useState();
    const[res,setRes]=useState();
    const sum=()=>{
        let id =document.getElementById('id').value
        let pw =document.getElementById('pw').value
        setId(id)
        setPw(pw)
        setRes("로그인성공")
    }

    return <Layout><h1>로그인 서비스</h1>
    <label htmlFor="">아이디</label><br/>
    <input id="id" type=""></input><br/>
    <label htmlFor="">비밀번호</label><br/>
    <input id="pw" type=""></input><br/>
    <button onClick={()=>{sum()}}>로그인</button><br/>
    <>{id}<br/>{pw}<br/> {res}</>
    </Layout>
}