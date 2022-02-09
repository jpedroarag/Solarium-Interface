import React from "react";
import { Link } from "react-router-dom";
import CelulaAula from "./celulaAula";

const placeholderUserImage = process.env.REACT_APP_PUBLIC_URL + "/Imagens/smile.png";
const authCheck = require("../../authCheck");
const colors = require('tailwindcss/colors');

class Aulas extends React.Component {
    constructor(props) {
        super(props);

        if (!authCheck.isAuthorized()) {
            this.redirectToLogin();
            return;
        }

        this.state = { lessons: [] }
        this.fetchAllLessons();
    }

    signout(event) {
        authCheck.signout();
        this.redirectToLogin();
    }

    redirectToLogin() {
        const newUrl = `${process.env.REACT_APP_CLIENT_URL}`;
        document.location.replace(newUrl);
    }

    fetchAllLessons() {
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("accessToken")
        });
        const request = new Request(`${process.env.REACT_APP_API_BASE_URL}/lessons/fetch`, {
            method: "GET",
            headers: headers
        });
        fetch(request)
        .then((response) => {
            return response.ok ? response.json() : Promise.reject(response.status);
        })
        .then(array => {
            this.setState({ lessons: array });
        })
        .catch(error => {
            console.log(error)
        })
    }

    removeElement(name) {
        this.setState({ lessons: 
            this.state.lessons.filter((value, index, array) => {
                return value.name != name;
            })
        });
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("accessToken")
        });
        const request = new Request(`${process.env.REACT_APP_API_BASE_URL}/lessons/delete`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ name: name })
        });
        fetch(request)
        .then((response) => {
            return response.ok ? response.json() : Promise.reject(response.status);
        })
        .catch(error => {
            console.log(error)
        })
    }

    getFormattedDateFrom(string) {
        const parsed = Date.parse(string);
        const date = new Date(parsed);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formatted = (day < 10 ? "0" + day.toString() : day.toString()) + "/" 
                        + (month < 10 ? "0" + month.toString() : month.toString()) + "/" 
                        + year.toString();
        return formatted;
    }

    render() {
        const userName = localStorage.getItem("userName");
        const allLessons = this.state.lessons.map(element => {
            return (
                <CelulaAula key={element._id}
                            id={element._id}
                            title={element.name}
                            lineHeight={1.8}
                            numberOfLines={5}
                            body={element.htmlString}
                            date={this.getFormattedDateFrom(element.createdAt)}
                            onRemove={() => this.removeElement(element.name)}>
                </CelulaAula>
            );
        })
        const lessonList = !allLessons.isEmpty ? allLessons : (
            <h1 className=" bg-gray-200 rounded-lg  m-2 px-6 py-3 text-xl font-semibold text-gray-500">
                Você não possui aulas publicadas
            </h1>
        )
        return (
            <div className="">

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


                                    <img class="hidden lg:block h-5 w-auto" src="./Imagens/logo.png" alt="Workflow" />

                                </div>

                            </div>
                            {/*itens barra superior direita*/}
                            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div class="ml-3 relative">
                                    <div className="flex mt-1">
                                        <button type="button" class="mx-2 px-2 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span class="sr-only">Open user menu</span>
                                            <img class="h-8 w-8 rounded-full" src={placeholderUserImage} alt="" />
                                            <h1 className="mt-1 px-2 text-white font-bold">{userName}</h1>
                                        </button>
                                    </div>


                                </div>

                                <div className="flex">
                                    <h1 className="text-white">|  </h1>
                                    <a href="#" className="text-white font-semibold hover:text-blue-500 mx-4">Acessibilidade</a>
                                </div>
                                <button onClick={event => this.signout(event)} className="flex px-4 py-3">
                                    <svg class="h-8 w-8 mx-1 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                                    <h1 className=" pt-1 font-bold text-white ">Sair</h1>
                                </button>




                            </div>
                        </div>
                    </div>



                </nav>
                {/* componete 1 */}
                <div className="">
                    <div className="flex ">
                        {/* Barra esquerda*/}
                        <div className="bg-white xl:w-80 h-max rounded-lg px-1 py-1 content-center mt-16 ml-36 mb-16  ">
                            <div className=" hover:bg-gray-200 focus:bg-gray-300">
                                <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                                    {/* icone casa*/}
                                    <svg class="h-7 w-7 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                    <h1 className=" mx-2 mt-px font-semibold text-gray-500">Início</h1>

                                </a>
                            </div>
                            <div className=" hover:bg-gray-200 focus:bg-gray-300">
                                <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                                    {/* icone conteudo*/}
                                    <svg class="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                    </svg>

                                    <h1 className=" mx-2 mt-px font-semibold text-gray-500">Conteúdo</h1>
                                    {/* icone seta baixo*/}
                                    <svg class="h-6 w-6 mt-1 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                                </a>
                            </div>
                            <div className=" hover:bg-gray-200 focus:bg-gray-300">
                                <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                                    {/* icone lápis*/}
                                    <svg class="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>

                                    <h1 className=" mx-2 mt-px font-semibold text-gray-500">Atividades</h1>
                                    {/* icone seta baixo*/}
                                    <svg class="h-6 w-6 mt-1 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>


                                </a>
                            </div>
                            <div className=" hover:bg-gray-200 focus:bg-gray-300">
                                <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                                    {/* icone info*/}
                                    <svg class="h-7 w-7 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                                    <h1 className=" mx-2 mt-px font-semibold text-gray-500">Informações </h1>
                                    {/* icone seta baixo*/}
                                    <svg class="h-6 w-6 mt-1 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                                </a>
                            </div>
                            <div className=" hover:bg-gray-200 focus:bg-gray-300">
                                <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                                    {/* icone carta*/}
                                    <svg class="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <h1 className=" mx-2 mt-px font-semibold text-gray-500">Mensagens</h1>
                                </a>
                            </div>
                            <div className=" hover:bg-gray-200 focus:bg-gray-300">
                                <a href="#" className="flex m-4 px-4 py-1 text-xl realtive my-4">
                                    {/* icone V*/}
                                    <svg class="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <h1 className=" mx-2 mt-px font-semibold text-gray-500">Matrículas</h1>
                                </a>
                            </div>



                        </div>


                        {/* navegação direita*/}
                        <div className="mr-32 w-2/3">

                            <div className=" relative flex mt-16 ml-3">
                                <div className="flex mt-5">
                                    <svg class="h-8 w-8 text-yellow-500 mx-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="8" y="4" width="12" height="12" rx="2" />  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" /></svg>
                                    <h1 className="font-bold text-xl text-white ">
                                        Aulas
                                    </h1>
                                </div>
                                {/* Criar nova aula*/}
                                <div className="absolute right-0 mt-2">
                                    <Link to={'/editor'}>
                                        <button type='button' className=" block bg-yellow-500 hover:bg-yellow-400 px-6 py-2 mx-1 rounded-lg font-semibold text-white focus:bg-yellow-500">Criar nova aula
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="  relative bg-white lt:w1/2 h-screen rounded-lg px-1 py-1 content-center items-center mt-2 ml-3 mb-16">
                                {/* Abade de aulas */}
                                <h1 className="my-2 mx-2 font-bold text-xl text-gray-600">Publicadas</h1>
                                <hr className="my-3 mr-3 border-gray-300 " />

                                <div className="overflow-auto  hover:overflow-scroll h-3/5 ">
                                    {lessonList}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aulas;