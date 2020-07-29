import styled from 'styled-components';

const Button = styled.button`
color: var(--white);
border: 1px solid #e43f5a;
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 5px;
text-decoration: none;
transition: .3s;
display: inline-block;
&:hover,
&:focus {
    background-color: #e43f5a;
    }`;

export default Button;