import React from "react";
import { Link } from "react-router-dom";
const authCheck = require("../../authCheck");

class Cadastro extends React.Component {


    render() {
        return (
            <div>
                <section className='flex  md:flex-row realtive  '>

                    <div className="w-full realative content-center items-center md:w-1/2 xl:w-2/3 xl: ">
                        <div className="lg:items-center ">
                            <img className="mx-auto mt-8 w-2/6 w:auto " src='./Imagens/logo.png' alt="" />
                            <img className="w-1/2 mx-auto" src="./Imagens/ilustracao.png" alt="" />
                            <img className="w-1/3  mx-auto" src="./Imagens/ufcimg.png" alt="" />

                        </div>
                        <div className="px-16" >
                            <Link to={'/cadastro'}>
                                <button className="  block bg-yellow-500 object-none  block  hover:bg-yellow-400 
                            px-4 py-3 mt-6  left-0 my-4 mx-auto rounded-lg font-semibold text-white focus:bg-yellow-500">Não tem uma conta? Cadastre-se;)</button>
                            </Link>
                        </div>
                        <div className=" inset-x-0 top-0 bg-gray-700 pl-16 ">
                            <h1 className=" text-white text-center">
                                Ambiente Virtual de Aprendizagem da Universidade Federal do Ceará   | <a href="#" className="text-white hover:text-blue-700 focus:outline-none"> Política de privacidade</a>  |<a href="#" className="text-white hover:text-blue-700 focus:outline-none"> Ajuda</a>
                            </h1>

                        </div>



                    </div>

                    {/* */}


                    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                                    flex items-center justify-center">
                        <div className=" w-full my-28 h-100 ">

                            <h1 className="text-xl font-semibold text-gray-500">Recuperação de Senha</h1>

                            <form onSubmit={event => this.signup(event)} className="mt-4">

                                <div className="mt-4">
                                    <input type="email" placeholder="Email" onChange={event => this.updateEmail(event)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" autoFocus required />
                                </div>

                                <Link to={'/redefinicao'}>
                                    <button className="w-full block bg-yellow-500 hover:bg-yellow-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-yellow-500" type="submit"  >Recuperar
                                    </button>
                                </Link>

                            </form>


                        </div>

                    </div>

                </section>
            </div>
        );
    }
}

export default Cadastro;