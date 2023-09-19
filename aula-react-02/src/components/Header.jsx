import style from "./Header.module.css"
function Header(){
    return(
        <header style={style.header}>
            <div className="container">
                <h1>FIAP</h1>
                <p>Faculdade de Informatica e Adiministração Paulista</p>
            </div>
        </header>
    )
}
export default Header