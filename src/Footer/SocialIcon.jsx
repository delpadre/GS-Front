import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function SocialIcon(){
    return(
        <span className="text-black-500 mb-6">
            <FaGithub className="inline-flex items-center p-2 cursor-pointer rounded-full bg-gray-700 mx-1.5 text-4xl hover:text-gray-100 hover:bg-teal-500 duration-300"/>
            <FaLinkedin className="inline-flex items-center p-2 cursor-pointer rounded-full bg-gray-700 mx-1.5 text-4xl hover:text-gray-100 hover:bg-teal-500 duration-300"/>
        </span>
    )
}