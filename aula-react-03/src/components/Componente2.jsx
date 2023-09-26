import styled from "styled-components"
const DivComp2 = styled.div`
    background-color: lightgreen;
    border: 2px solid green;
    h2{
        text-align: center;
        color: darkgreen;
    }
    p{
        text-align: justify;
        color: darkgreen;
    }
`
function Componente2(){
    return(
        <DivComp2>
            <h2>Componente 2</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </DivComp2>
    )
}
export default Componente2