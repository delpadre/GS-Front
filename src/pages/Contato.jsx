import Header from "../Header/Header"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import { useState } from "react"

export default function Contato(){
    
    
    const onSubmit = (e) =>{
        e.preventDefault();
        const data = {
            nomeCompleto: e.target.elements.nomeCompleto.value,
            emailContato:e.target.elements.emailContato.value,
            msg:e.target.elements.msg.value
        }
        console.log(data)
    }

    return (
      <>
        <Header />
        <div className="">
          <div className="bg from-bg-1-nos to-bg-2-nos antialiased">
            <div className="flex min-h-screen w-full items-center justify-center">
              <div
                className="bg-teal-800 flex flex-col md:flex-row md:space-x-6 max-w-5xl space-y-6 rounded-xl 
                bg-teal-800 rounded-3xl shadow-2xl  mr-4 p-8 text-white shadow-lg overflow-hidden"
              >
                <div className=" flex flex-col justify-between space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold tracking-wide">
                      Contate-nos
                    </h1>
                    <p className="pt-2 text-sm text-cyan-100">
                      Nos envie uma mensagem ou faça o login
                    </p>
                    <a href="conta.html" className="text-black hover:underline">
    Login
  </a>
                  </div>

                  <div className="flex flex-col space-y-6">
                    <div className="inline-flex items-center space-x-2">
                      <ion-icon
                        name="call"
                        className="text-teal-300 text-xl "
                      ></ion-icon>
                      <span>+(123) 951-7441</span>
                    </div>

                    <div className="inline-flex items-center space-x-2">
                      <ion-icon
                        name="mail"
                        className="text-teal-300 text-xl"
                      ></ion-icon>
                      <span>delpadrerafa@gmail.com</span>
                    </div>

                    <div className="inline-flex items-center space-x-2">
                      <ion-icon
                        name="location"
                        className="text-teal-300 text-xl"
                      ></ion-icon>
                      <span>São Paulo, Brasil</span>
                    </div>
                  </div>
                  <div className="flex space-x-4 text-lg">
                    <Link>
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </Link>
                  </div>
                </div>
                <div className="relative ">
                  

                  <div className="relative z-1 w-full bg-teal-700 rounded-xl space-y-4 shadow-lg p-8 text-gray-600 flex flex-col md:w-80">
                    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                      <div>
                        <label className="text-sm text-white ">Seu nome</label>
                        <input
                          type="text"
                          placeholder="Nome completo"
                          className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                          id="nome"
                          name="nomeCompleto"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-white">E-mail</label>
                        <input
                        id="emailContato"
                          type="email"
                          placeholder="E-mail"
                          className="ring-1 ring-gray-300 w-full rounded-md md:w-64 px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                          name="emailContato"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-white">
                          Mensagem
                        </label>
                        <textarea
                          placeholder="Mensagem"
                          rows="4"
                          className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                          id="msg"
                          name="msg"
                        ></textarea>
                      </div>
                      <button className="bg-teal-800 rounded-2xl shadow-2xl border-transparent border-r border-b border-l border-t py-2 px-10 font-medium mr-2 text-white duration-300 hover:border border">
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
}