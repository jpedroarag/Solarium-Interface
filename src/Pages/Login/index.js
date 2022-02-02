import React from "react";
import { Link } from "react-router-dom";
const Login = props => {
    return (
        <div>

            <section className='flex  md:flex-row realtive  '>

            
                <div className="w-full realative content-center items-center md:w-1/2 xl:w-2/3 xl: ">
                    <div className="lg:items-center ">
                        <img className="mx-auto mt-8 w-2/6 w:auto " src='./Imagens/logo.png' alt="" />
                        <img  className="w-1/2 mx-auto"src="./Imagens/ilustracao.png" alt="" />
                        <img  className="w-1/3  mx-auto"src="./Imagens/ufcimg.png" alt="" />

                    </div>
                    <div className="px-16" >
                        <button className="  block bg-yellow-500 object-none  block  hover:bg-yellow-400 
                        px-4 py-3 mt-6  left-0 my-4 mx-auto rounded-lg font-semibold text-white focus:bg-yellow-500">Não tem uma conta? Cadastre-se;)</button>
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

                        <h1 className="text-xl font-semibold text-gray-500">Entre na sua conta :D</h1>

                        <form className="mt-4" action="#" method="POST">
                            <div className="mt-4">

                                <input type="email" placeholder="Login" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" autocomplete autofocus required />
                            </div>

                            <div className="mt-4">

                                <input type="password" placeholder="Senha" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                            </div>
                            <Link to="/aulas">
                                <button  className="w-full block bg-yellow-500 hover:bg-yellow-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-yellow-500" type="submit"  >Acessar</button>
                            </Link>
                            <div className="mt-4 ">
                                <a href="#" className="text-gray-500 hover:text-blue-700 focus:outline-none">Esqueci minha senha</a>
                            </div>


                            <hr className="my-6 border-gray-300 w-full" />
                            <div className="mb-6 text-yellow-600">
                                <label>Alunos e professores do presencial devem utilizar mesmo login e senha do SIGAA. </label>
                            </div>

                            <div>
                                <a href="#" className="mt-2 text-yellow-600 hover:text-blue-700">Professor, para importar suas disciplinas, habilite
                                    o uso do Solar no SIGAA.</a>
                            </div>

                        </form>


                    </div>

                </div>
           
            </section>
        </div>
    );
}
export default Login;