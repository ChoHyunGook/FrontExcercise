import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Week(){
    const[name,setName]=useState();
    const[time,setTime]=useState(0);
    const[money,setMoney]=useState(0);
    const[day,setDay]=useState(0);
    const[result,setResult]=useState(0);
    const sum =()=>{
        let name=document.getElementById('name').value
        let time=document.getElementById('time').value
        let money=document.getElementById('money').value
        let day=document.getElementById('day').value
        setName(name)
        setTime(time)
        setMoney(money)
        setDay(day)
        setResult(Number(day)*Number(time)*Number(money))    
    }
    

    return <Layout><h1>주급계산기</h1>
    <label htmlFor="">이름</label><br/>
    <input id="name" type=""></input><br/>
    <label htmlFor="">일하는 시간</label><br/>
    <input id="time" type=""></input><br/>
    <label htmlFor="">시급</label><br/>
    <input id="money" type=""></input><br/>
    <label htmlFor="">일하는 날짜(1주기준)</label><br/>
    <input id="day" type=""></input><br/>
    <button onClick={()=>{sum()}}>입력</button><br/>
    <>{name}님은 1주일에 {day}일 동안 {time}을 일하시며,<br/>시급{money} 주급 {result}를 받습니다. </>
    </Layout>
}