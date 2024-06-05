import { PROJETOS } from "./MenuModalProj"
import ItemCardProj from "./ItemCardProj"

export default function CardCompletoProj(){
    return(
        <div className="flex justify-center gap-24 'bg-teal-900'">
            <ItemCardProj props = {PROJETOS}/>
        </div>
        
    )
}