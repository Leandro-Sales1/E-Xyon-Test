import { MainContent } from "../../components/mainContent/MainContent"
import { SideBar } from "../../components/sideBar/SideBar"
import "./register.css"


export const Register = () => {
  return (
    <>
      <header>
        <h1 className="title">Cadastros</h1>
      </header>
      <main className="mainContent">
        <SideBar />
        <MainContent />
      </main>
    </>
  )
}


