import React from "react";
import { Link } from "react-router-dom";
import Ckeditor from "./ckeditor"




const editor = (props) => {

    {/* Ckeditor fuction */ }
    return (
        <>
            <div>
                <nav class="bg-gray-800">
                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div class="relative flex items-center justify-between h-16">
                            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span class="sr-only">Open main menu</span>


                                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>

                                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div class="flex-shrink-0 flex items-center">
                                    {/*Logo superior esquerdo*/}


                                    <img class="hidden lg:block h-5 w-auto" src="./Imagens/logo.png" alt="Workflow" />


                                </div>

                            </div>
                            {/*itens barra superior direita*/}
                            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div class="ml-3 relative">
                                    <div className="flex mt-1">
                                        <button type="button" class="mx-2 px-2 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span class="sr-only">Open user menu</span>
                                            <img class="h-8 w-8 rounded-full" src="./imagens/aluno.jpeg" alt="" />
                                            <h1 className="mt-1 px-2 text-white font-bold">Helô</h1>
                                        </button>
                                    </div>


                                </div>
                                <div className="flex">
                                    <h1 className="text-white">|  </h1>
                                    <a href="#" className="text-white font-semibold hover:text-blue-500 mx-4">Acessibilidade</a>
                                </div>
                                <Link to={'/'}>
                                    <button className="flex px-4 py-3">
                                        <svg class="h-8 w-8 mx-1 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                                        <h1 className=" pt-1 font-bold text-white ">Sair</h1>
                                    </button>
                                </Link>




                            </div>
                        </div>
                    </div>



                </nav>
            </div>
            <div>
                <Link to={'/aulas'}>
                
                <button className="flex my-3 mx-12">
                    <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                    <h1 className="text-white font-bold my-1 ml-1">
                        Voltar
                    </h1>
                </button>
                </Link>
            </div>

            <div className="relative mt-6 mx-16 rounded-lg flex ">
                <div>

                    <h1 className="text-white text-2xl font-bold mb-2">Editor de Aulas</h1>
                    <input type="text" placeholder=" Título"></input>

                </div>


                <div className="flex absolute right-0">
                    <button className=" block bg-yellow-500 hover:bg-yellow-400 px-6 py-2 mx-1 rounded-lg font-semibold text-white focus:bg-yellow-500">Salvar</button>
                    <button className=" block bg-yellow-500 hover:bg-yellow-400 px-6 py-2 mx-1 rounded-lg font-semibold text-white focus:bg-yellow-500">Publicar aula</button>
                </div>

            </div>
            <div className="mx-16">
                <Ckeditor />
            </div>



        </>

    );
}

export default editor;