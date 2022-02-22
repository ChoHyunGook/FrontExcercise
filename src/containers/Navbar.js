import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar(){
    return(<div>
        <nav>
        <Ul>
            <Li><Link to={"/"}>홈</Link></Li>
            <Li><Link to="/bmi">Bmi계산기</Link></Li>   
            <Li><Link to="/calc">계산기</Link></Li>
            <Li><Link to="/change">300원 자판기</Link></Li>
            <Li><Link to="/week">주급 계산기</Link></Li>
            <Li><Link to="/circle">원넓이 계산기</Link></Li>
            <Li><Link to="/counter">숫자 카운터</Link></Li>
            <Li><Link to="/grade">성적표</Link></Li>
            <Li><Link to="/login">로그인</Link></Li>
        </Ul>
        </nav>
        </div>)
}
const Ul =styled.ul`
background-color: #FFDAB9;
text-decoration: none;
text-align: center;
`

const Li =styled.li`
float: left;
margin-left: 1em;
font-size: 20px;
text-align: center;
display: inline-block
`