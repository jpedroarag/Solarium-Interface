import React from "react";
import { Link } from "react-router-dom";
const authCheck = require("../../authCheck");

class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            error: null
        };
        if(authCheck.isAuthorized()) {
            this.redirectToList();
        }
    }

    validatePasswordConfirmation() {
        const password = document.getElementById("passwordField").value;
        const confirmation = document.getElementById("confirmField").value;
        return password == confirmation
    }

    updateName(event) {
        this.setState({
            name: event.target.value,
            email: this.state.email,
            password: this.state.password
        });
    }

    updateEmail(event) {
        this.setState({
            name: this.state.name,
            email: event.target.value,
            password: this.state.password
        });
    }

    updatePassword(event) {
        this.setState({
            name: this.state.name,
            email: this.state.email,
            password: event.target.value
        });
    }

    signup(event) {
        event.preventDefault();

        if(!this.validatePasswordConfirmation()) {
            alert("As senhas não correspondem!");
            return;
        }

        const content = JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        });
        const headers = new Headers({
            "Content-Type": "application/json"
        });
        const request = new Request(`${process.env.REACT_APP_API_BASE_URL}/auth/signup`, {
            method: "POST",
            headers: headers,
            body: content
        });
        fetch(request)
        .then((response) => {
            return response.ok ? response.json() : Promise.reject(response.status);
        })
        .then(json => {
            var expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 1);

            localStorage.setItem("userName", json.name);
            localStorage.setItem("accessToken", json.accessToken);
            localStorage.setItem("expirationDate", expirationDate);
            
            this.redirectToList();
        })
        .catch(error => {
            alert("Usuário já cadastrado com o email informado.")
        })
    }

    redirectToList() {
        const newUrl = `${process.env.REACT_APP_CLIENT_URL}/aulas`;
        document.location.replace(newUrl);
    }

    render() {
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
                            <Link to={'/'}>
                            <button className="  block bg-yellow-500 object-none  block  hover:bg-yellow-400 
                            px-4 py-3 mt-6  left-0 my-4 mx-auto rounded-lg font-semibold text-white focus:bg-yellow-500">Já possui uma conta? Faça o login!</button>
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
    
                            <h1 className="text-xl font-semibold text-gray-500">Cadastro</h1>
    
                            <form onSubmit={event => this.signup(event)} className="mt-4">
                                <div className="mt-4">
                                    <input type={'text'} placeholder="Nome" onChange={event => this.updateName(event)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" autoFocus required />
                                </div>
                                <div className="mt-4">
                                    <input type="email" placeholder="Email" onChange={event => this.updateEmail(event)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" autoFocus required />
                                </div>
    
    
                                <div className="mt-4">
                                    <input type="password" id="passwordField" placeholder="Senha" minLength="8" onChange={event => this.updatePassword(event)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" required />
                                </div>
                                <div className="mt-4">
                                    <input type="password" id="confirmField" placeholder="Confirmar senha" minLength="8" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" required />
                                </div>
                                <button className="w-full block bg-yellow-500 hover:bg-yellow-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-yellow-500" type="submit"  >Cadastrar</button>
                               
    
    
                                <hr className="my-6 border-gray-300 w-full" />
    
                            </form>
    
    
                        </div>
    
                    </div>
               
                </section>
            </div>
        );
    }
}

export default Cadastro;