import React from "react";
import { Link } from "react-router-dom";

const logo = process.env.REACT_APP_PUBLIC_URL + "/Imagens/logo.svg";
const ilustracao = process.env.REACT_APP_PUBLIC_URL + "/Imagens/ilustracao.png";
const ufcLogo = process.env.REACT_APP_PUBLIC_URL + "/Imagens/ufcimg.png";
const authCheck = require("../../authCheck");

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: null
        };
    }

    componentDidMount() {
        const path = window.location.pathname;
        const id = path.substring(path.lastIndexOf('/') + 1);
        const isVerification = (id != null || id == "verificarEmail") && id != "";
        
        if(isVerification) {
            authCheck.signout();
            this.verifyEmail(id);
            return;
        }

        if(authCheck.isAuthorized()) {
            this.redirectToList();
        }
    }

    verifyEmail(userId) {
        const headers = new Headers({
            "Content-Type": "application/json"
        });
        const request = new Request(`${process.env.REACT_APP_API_BASE_URL}/auth/verify`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ id: userId })
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
            
            alert("Email verificado com sucesso!");
        })
        .catch(error => {
            alert("Link inválido.")
        })
    }

    updateEmail(event) {
        this.setState({
            email: event.target.value,
            password: this.state.password
        });
    }

    updatePassword(event) {
        this.setState({
            email: this.state.email,
            password: event.target.value
        });
    }

    signin(event) {
        event.preventDefault();
        const content = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });
        const headers = new Headers({
            "Content-Type": "application/json"
        });
        const request = new Request(`${process.env.REACT_APP_API_BASE_URL}/auth/signin`, {
            method: "POST",
            headers: headers,
            body: content
        });
        fetch(request)
        .then((response) => {
            return response.ok ? response.json() : Promise.reject(response.status);
        })
        .then(json => {
            authCheck.signin(json.name, json.accessToken);
            this.redirectToList();
        })
        .catch(error => {
            const errorString = error === 401 ? "Senha inválida!" : "Houve um erro. Confira as credenciais e tente novamente."
            alert(errorString)
        })
    }

    redirectToList() {
        const newUrl = `${process.env.REACT_APP_CLIENT_URL}/aulas`;
        document.location.replace(newUrl);
    }

    render() {
        return (
            <div>
                <section className='flex  md:flex-row   '>
                    
                    <div className="w-full inset-0 relative content-center items-center md:w-1/2 xl:w-2/3 xl: ">
                        <div className="lg:items-center ">
                            <img className="mx-auto mt-8 w-2/6 w:auto " src={logo} alt="" />
                            <img  className="w-1/2 mx-auto"src={ilustracao} alt="" />
                            <img  className="w-1/3  mx-auto"src={ufcLogo} alt="" />
    
                        </div>
                        <div className="px-16 " >
                            <Link to={'/cadastro'}>
                            <button className="  block bg-yellow-500 object-none hover:bg-yellow-400 
                            px-4 py-3 mt-6  left-0 my-4 mx-auto rounded-lg font-semibold text-white focus:bg-yellow-500">Não tem uma conta? Cadastre-se;)</button>
                            </Link>
                        </div>
                        <div className=" absolute bottom-0 inset-x-0 bg-gray-700 pl-16 ">
                            <h1 className=" text-white text-center text-sm">
                            Ambiente Virtual de Aprendizagem da Universidade Federal do Ceará   | <a href="#" className="text-white hover:text-yellow-500 focus:outline-none"> Política de privacidade</a>  |<a href="#" className="text-white hover:text-yellow-500 focus:outline-none"> Ajuda</a>
                            </h1>
                            
                        </div> 
                        
                    
    
                    </div>
    
                    {/* */}
    
    
                    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                                    flex items-center justify-center">
                        <div className=" w-full my-28 h-100 ">
    
                            <h1 className="text-xl font-semibold text-gray-500">Entre na sua conta :D</h1>
    
                            <form onSubmit={event => this.signin(event)} className="mt-4">
                                <div className="mt-4">
    
                                    <input type="email" placeholder="Login" onChange={event => this.updateEmail(event)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" autoFocus required />
                                </div>
    
                                <div className="mt-4">
    
                                    <input type="password" placeholder="Senha" minLength="8" onChange={event => this.updatePassword(event)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" required />
                                </div>
                                <button className="w-full block bg-yellow-500 hover:bg-yellow-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-yellow-500" type="submit"  >Acessar</button>
                                <div className="mt-4 ">
                                    <Link to={'/recuperacao'}>
                                    <a href="#" className="text-gray-500 hover:text-blue-700 focus:outline-none">Esqueci minha senha</a>
                                    </Link>
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
}

export default Login;