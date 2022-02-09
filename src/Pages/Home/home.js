import React from "react";
import { Link } from "react-router-dom";




const home = props => {
    return (
        <div className="align-middle ">

            {/* barra superior */}
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
                                <Link to={'/home'}>
                                <a href="#">
                                <img class="hidden lg:block h-5 w-auto" src="./Imagens/logo.svg" alt="Workflow" />
                                </a>
                                </Link>
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
            {/* componete 1 */}
            <div className="flex mx-auto items-center ">
                {/* Agenda calenário*/}
                <div className="bg-white  xl:w-80  h-screen rounded-lg px-1 py-1 content-center items-center mt-16 ml-36 mb-16  ">
                    <div>
                        <h1 className=" bg-gray-200 rounded-lg m-2 px-6 py-3 text-xl font-semibold text-gray-500">Entre na sua conta :D</h1>
                    </div>
                    <div>
                        <h1 className=" bg-gray-200 rounded-lg m-2 px-6 py-3 text-xl font-semibold text-gray-500">Entre na sua conta :D</h1>
                    </div>
                </div>
                {/* disciplinas*/}
                <div className="xl:w-1/2 ">

                    <div className=" flex mt-6 ml-3 ">

                        <svg class="h-8 w-8 text-yellow-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="8" y="4" width="12" height="12" rx="2" />  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" /></svg>
                        <h1 className="font-bold text-lg text-white">
                            Disciplinas ativas
                        </h1>
                    </div>
                    <div className="bg-white lt:w1/2 h-screen rounded-lg px-1 py-1 content-center items-center mt-2 ml-3 mb-16">
                         {/* projeto 1 */}
                         <Link to={'/aulas'}>
                        <div className="">
                            <a href="#" className="">
                                <h1 className=" bg-gray-200 rounded-lg  m-2 px-6 py-3 text-xl font-semibold hover:text-yellow-500 focus:outline-none text-gray-500">Projeto Integrado I</h1>
                            </a>
                        </div>
                        </Link>
                        <div>
                            <h1 className=" bg-gray-200 rounded-lg m-2 px-6 py-3 text-xl font-semibold text-gray-500">Entre na sua conta :D</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default home;