import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Counter (){
    const[count,setCount]=useState(0);
    return <Layout><h1>숫자 카운터</h1><br/>
    <button onClick={()=>setCount(count+1)}>+</button><br/>
    <button onClick={()=>setCount(count-1)}>-</button><br/>
    <>{count}</>
    </Layout>
}