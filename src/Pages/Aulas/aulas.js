import React from "react";
import { Link } from "react-router-dom";
const colors = require('tailwindcss/colors')
const aulas = props => {
    return (
        <div className="align-middle ">

            {/* barra superior */}
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>


                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                {/*Logo superior esquerdo*/}


                                <img className="hidden lg:block h-5 w-auto" src="./Imagens/logo.png" alt="Workflow" />

                            </div>

                        </div>
                        {/*itens barra superior direita*/}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="ml-3 relative">
                                <div className="flex mt-1">
                                    <button type="button" className="mx-2 px-2 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="./imagens/aluno.jpeg" alt="" />
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
                                    <svg className="h-8 w-8 mx-1 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                                    <h1 className=" pt-1 font-bold text-white ">Sair</h1>
                                </button>
                            </Link>




                        </div>
                    </div>
                </div>



            </nav>
            {/* componete 1 */}
            <div className="flex relative">
                {/* Barra esquerda*/}
                <div className="bg-white xl:w-80 h-max rounded-lg px-1 py-1 content-center mt-16 ml-36 mb-16  ">
                    <div className=" hover:bg-gray-200 focus:bg-gray-300">
                        <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                            {/* icone casa*/}
                            <svg className="h-7 w-7 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            <h1 className=" mx-2 mt-px font-semibold text-gray-500">Início</h1>

                        </a>
                    </div>
                    <div className=" hover:bg-gray-200 focus:bg-gray-300">
                        <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                            {/* icone conteudo*/}
                            <svg className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>

                            <h1 className=" mx-2 mt-px font-semibold text-gray-500">Conteúdo</h1>
                            {/* icone seta baixo*/}
                            <svg className="h-6 w-6 mt-1 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                        </a>
                    </div>
                    <div className=" hover:bg-gray-200 focus:bg-gray-300">
                        <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                            {/* icone lápis*/}
                            <svg className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>

                            <h1 className=" mx-2 mt-px font-semibold text-gray-500">Atividades</h1>
                            {/* icone seta baixo*/}
                            <svg className="h-6 w-6 mt-1 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>


                        </a>
                    </div>
                    <div className=" hover:bg-gray-200 focus:bg-gray-300">
                        <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                            {/* icone info*/}
                            <svg className="h-7 w-7 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                            <h1 className=" mx-2 mt-px font-semibold text-gray-500">Informações gerais</h1>
                            {/* icone seta baixo*/}
                            <svg className="h-6 w-6 mt-1 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                        </a>
                    </div>
                    <div className=" hover:bg-gray-200 focus:bg-gray-300">
                        <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                            {/* icone carta*/}
                            <svg className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                            <h1 className=" mx-2 mt-px font-semibold text-gray-500">Mensagens</h1>
                        </a>
                    </div>
                    <div className=" hover:bg-gray-200 focus:bg-gray-300">
                        <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                            {/* icone V*/}
                            <svg className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <h1 className=" mx-2 mt-px font-semibold text-gray-500">Matrículas</h1>
                        </a>
                    </div>



                </div>


                {/* navegação esquerda*/}
                <div className="xl:w-1/2 ">

                    <div className=" flex mt-16 ml-3 ">

                        <svg className="h-8 w-8 text-yellow-500 mx-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="8" y="4" width="12" height="12" rx="2" />  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" /></svg>
                        <h1 className="font-bold text-xl text-white">
                            Aulas
                        </h1>
                    </div>
                    <div className=" bg-white lt:w1/2 h-screen rounded-lg px-1 py-1 content-center items-center mt-2 ml-3 mb-16">
                        {/* Abade de aulas */}
                        <h1 className="my-2 mx-2 font-bold text-xl text-gray-600">Publicadas</h1>
                        <hr className="my-3 mr-3 border-gray-300 w-full" />

                        <div className="">


                            <h1 className=" bg-gray-200 rounded-lg  m-2 px-6 py-3 text-xl font-semibold text-gray-500">Você não possui aulas publicadas</h1>

                        </div>

                        {/* Criar nova aula*/}
                        <div className="">
                            <Link to={'/editor'}>
                                <button className=" bg-yellow-500 flex hover:bg-yellow-400 focus:bg-yellow-500
                                                     px-4 py-2 ml-auto mr-1 realtive my-4 rounded-lg font-semibold 
                                                     text-white ">Criar nova aula</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default aulas;