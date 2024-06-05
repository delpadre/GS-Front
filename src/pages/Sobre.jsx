import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import CardCompletoProj from "./CardCompletoProj"

export default function Sobre(){
    return(
        <>
            <div className="bg-teal-900 from-bg-1-nos to-bg-2-nos antialiased">
                <Header/> <br />
                <br /><h1 class="text-4xl font-semibold leading- text-cyan-100 text-center">Meu Projeto!<span class="font-light"></span></h1>
                    <CardCompletoProj/>
                <Footer/>
            </div>
            
        </>
    )
}