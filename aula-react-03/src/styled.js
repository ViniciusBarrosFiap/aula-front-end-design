import styled from 'styled-components'

export const DivComp1 = styled.div`
    background-color: lightblue;
    border: 2px solid black;
    h2{
        text-align: center;
        color: darkblue;
    }
    p{
        text-align: justify;
        color: darkblue;
    }
`
export const Button = styled.button`
    background-color: ${(props)=>props.$isOn ? "#00f" : "#999"};
    border-radius: 10px;
    color: white;
    border: none;
`