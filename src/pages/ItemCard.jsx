export default function Item({Links}){
    return(
        <ul>
        {
            Links.map((link)=>
                <div class=" lg:max-w-2/3 lg:pr-28 lg:pl-28 p-2 lg:flex my-7">
            <div class="flex flex-col justify-between rounded-b-2xl rounded-t-2xl border-b border-l border-r border-t border-gray-500 bg-cyan-600 p-4 leading-normal text-white shadow-2xl lg:rounded-b-2xl lg:rounded-r-2xl lg:border-l lg:border-t lg:border-gray-500 lg:border-">
              <div class="mb-8">
                <div class="mb-2 text-xl font-bold text-white">{link.nome}</div>
                <p class="text-base text-gray-200">{link.texto}</p>
              </div>
              <div class="flex items-center">
                <img class="mr-4 h-14 w-16 rounded-full" src={link.img} alt="Avatar of Jonathan Reinink" />
                <div class="text-sm">
                  <p class="leading-none text-gray-200">{link.nome}</p>
                  <p class="text-gray-300">5 de Maio</p>            
                </div>
              </div>
            </div>
          </div>
            )
        }
        </ul>
    )
}
