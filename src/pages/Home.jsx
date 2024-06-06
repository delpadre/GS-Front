import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CarrosselPage from './CarrosselPage';

export default function Home() {
  return (
    <>
      <div className="">
        <div class="bg-teal-900 flex justify-between my-48 h-full">
          <div class="text-white max-w-lg lg:ml-48">
            <h1 class="text-6xl font-semibold leading- text-white">
              Ocean Watch<span class="font-light"></span>
            </h1>
            <br />
            <p class="text-lg pt-2 text-white">
              Implementar um sistema (simulação) integrado de monitoramento e
              controle de espécies invasoras em habitats marinhos, utilizando
              tecnologias de detecção para preservar a biodiversidade nativa
            </p>
            <div class="mt-10 mb-10 mr-6">
              <a
                href="#"
                class="bg-teal-800 rounded-3xl shadow-2xl border-transparent border-r border-b border-l border-t py-3 px-10 font-medium inline-block mr-4 hover:bg-cyan-600  hover:text-white duration-300 hover:border border"
              >
                Leia Mais!
              </a>
            </div>
          </div>
          <div className="container mx-auto p-4"></div>
          <div class=" xl:w-96 justify-center align-bottom flex lg:mr-50"></div>
          <CarrosselPage />
        </div>
      </div>
          
      <Footer />
    </>
  );
}
