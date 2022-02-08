import React from "react";
import { Link } from "react-router-dom";

const logo = process.env.REACT_APP_PUBLIC_URL + "/Imagens/logo.png";
const ilustracao = process.env.REACT_APP_PUBLIC_URL + "/Imagens/ilustracao.png";
const ufcLogo = process.env.REACT_APP_PUBLIC_URL + "/Imagens/ufcimg.png";
const authCheck = require("../../authCheck");

// http://localhost:3000/redefinicao/1b10486d130057bcd733ca310623adb5e97b6eaa54674cdbd77e3c9a7caf40f1/61feb616a8b74ab9e862c6fb

class Redefinicao extends React.Component {
    constructor(props) {
        super(props);

        const path = window.location.pathname;
        const pathname = "redefinicao/";
        const userId = path.substring(path.lastIndexOf('/') + 1);
        const resetToken = path.substring(
            path.lastIndexOf(`${pathname}`) + pathname.length, 
            path.lastIndexOf('/')
        );

        this.state = {
            token: resetToken,
            id: userId,
            password: ""
        };

        if(authCheck.isAuthorized()) {
            this.redirectToList();
        }
    }

    redirectToList() {
        const newUrl = `${process.env.REACT_APP_CLIENT_URL}/aulas`;
        document.location.replace(newUrl);
    }

    redirectToLogin() {
        const newUrl = `${process.env.REACT_APP_CLIENT_URL}`;
        document.location.replace(newUrl);
    }
    
    validatePasswordConfirmation() {
        const password = document.getElementById("passwordField").value;
        const confirmation = document.getElementById("confirmField").value;
        return password == confirmation
    }

    updatePassword(event) {
        this.setState({
            token: this.state.token,
            id: this.state.id,
            password: event.target.value
        });
    }

    resetPassword(event) {
        event.preventDefault();

        if(!this.validatePasswordConfirmation()) {
            alert("As senhas não correspondem!");
            return;
        }

        const content = JSON.stringify({ 
            token: this.state.token,
            id: this.state.id,
            password: this.state.password 
        });
        const headers = new Headers({
            "Content-Type": "application/json"
        });
        const request = new Request(`${process.env.REACT_APP_API_BASE_URL}/auth/resetPassword`, {
            method: "POST",
            headers: headers,
            body: content
        });
        fetch(request)
        .then((response) => {
            return response.ok ? response.json() : Promise.reject(response.status);
        })
        .then(json => {
            alert("Senha redefinida com sucesso!");
            this.redirectToLogin();
        })
        .catch(error => {
            const errorString = error === 400 ? "Link expirado!" : "Houve um erro ao tentar redefinir a senha, tente novamente."
            alert(errorString);
        })  
    }

    render() {
        return (
            <div>
                <section className='flex  md:flex-row relative  '>

                    <div className="w-full relative content-center items-center md:w-1/2 xl:w-2/3 xl: ">
                        <div className="lg:items-center ">
                            <img className="mx-auto mt-8 w-2/6 w:auto " src={logo} alt="" />
                            <img className="w-1/2 mx-auto" src={ilustracao} alt="" />
                            <img className="w-1/3  mx-auto" src={ufcLogo} alt="" />

                        </div>
                        <div className="px-16" >
                            <Link to={'/cadastro'}>
                                <button className="  block bg-yellow-500 object-none  block  hover:bg-yellow-400 
                            px-4 py-3 mt-6  left-0 my-4 mx-auto rounded-lg font-semibold text-white focus:bg-yellow-500">Não tem uma conta? Cadastre-se;)</button>
                            </Link>
                        </div>
                        <div className=" absolute bottom-0 inset-x-0 bg-gray-700 pl-16 ">
                            <h1 className=" text-sm text-white text-center">
                                Ambiente Virtual de Aprendizagem da Universidade Federal do Ceará   | <a href="#" className="text-white hover:text-yellow-500 focus:outline-none"> Política de privacidade</a>  |<a href="#" className="text-white hover:text-yellow-500 focus:outline-none"> Ajuda</a>
                            </h1>

                        </div>



                    </div>

                    {/* */}


                    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                                    flex items-center justify-center">
                        <div className=" w-full my-28 h-100 ">

                            <h1 className="text-xl font-semibold text-gray-500">Redefinir senha</h1>

                            <form onSubmit={event => this.resetPassword(event)} className="mt-4">



                                <div className="mt-4">
                                    <input type="password" id="passwordField" placeholder="Senha" minLength="8" onChange={event => this.updatePassword(event)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" required />
                                </div>
                                <div className="mt-4">
                                    <input type="password" id="confirmField" placeholder="Confirmar senha" minLength="8" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" required />

                                </div>
                                <button className="w-full block bg-yellow-500 hover:bg-yellow-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-yellow-500" type="submit"  >Redefinir</button>

                            </form>
                        </div>

                    </div>

                </section>
            </div>
        );
    }
}

export default Redefinicao;