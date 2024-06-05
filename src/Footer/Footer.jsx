import ItemsContainer from "./ItemsContainer"
import SocialIcon from "./SocialIcon"

export default function Footer(){
    return(
        <>
            <footer className="bg-teal-800 text-white">
                <ItemsContainer/>
                <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-10 text-center pt-1 text-gray-400 text-sm pn-8">
                    <span className="self-center">© 2024 Todos os direitos reservados.</span>
                    <span className="self-center">Termos de Politica e Privacidade</span>
                    <SocialIcon/>
                </div>
            </footer>
        </>
    )
}