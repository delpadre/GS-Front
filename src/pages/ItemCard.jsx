export default function Item({Links}){
  return(
      <ul>
      {
          Links.map((link)=>
              <div class=" lg:max-w-2/3 lg:pr-28 lg:pl-28 p-2 lg:flex my-7">
          <div class="flex flex-col bg-teal-800 rounded-b-2xl rounded-t-2xl border-b border-l border-r border-t p-2 leading-normal text-white shadow-2xl lg:rounded-b-2xl lg:rounded-r-2xl lg:border-l lg:border-t border-teal-800">
            <div class="mb-8">
              <div class="mb-2 text-xl font-bold text-white">{link.nome}</div>
              <p class="text-base text-gray-200">{link.texto}</p>
            </div>
            <div class="flex items-center">
              <img class="mr-4 h-15 w-20" src={link.img} alt="" />
              <div class="text-sm">
                <p class="leading-none text-gray-200">{link.nome}</p>
                <p class="text-gray-300">30 de maio</p>            
              </div>
            </div>
          </div>
        </div>
          )
      }
      </ul>
  )
}
