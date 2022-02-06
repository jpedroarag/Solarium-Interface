import React from "react";
import { Link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Popup from "../../Componente/Popup";

const logo = process.env.REACT_APP_PUBLIC_URL + "/Imagens/logo.png";
const placeholderUserImage = process.env.REACT_APP_PUBLIC_URL + "/Imagens/smile.png";
const authCheck = require("../../authCheck");

class Editor extends React.Component {
    constructor(props) {
        super(props);

        if(!authCheck.isAuthorized()) {
            this.redirectToLogin();
            return;
        }
        
        const path = window.location.pathname;
        const id = path.substring(path.lastIndexOf('/') + 1);
        const isNew = (id == null || id == "editor");

        this.state = {
            name: "Nova aula",
            newName: "Nova aula",
            htmlString: "",
            shouldDisplayPopup: false,
            isNew: isNew,
            editor: null
        };

        if(!isNew) {
            this.fetchLessonFromServer(id);
        }
    }

    fetchLessonFromServer(id) {
        const body = JSON.stringify({ id: id });
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("accessToken")
        });
        const request = new Request(`${process.env.REACT_APP_API_BASE_URL}/lessons/fetchSingle`, {
            method: "POST",
            headers: headers,
            body: body
        });
        fetch(request)
        .then((response) => {
            return response.ok ? response.json() : Promise.reject(response.status);
        })
        .then(lesson => {
            const editor = this.state.editor;
            
            if(editor) {
                editor.setData(lesson.htmlString);
            }

            this.setState({ 
                name: lesson.name,
                newName: lesson.name,
                htmlString: lesson.htmlString,
                shouldDisplayPopup: this.state.shouldDisplayPopup,
                isNew: this.state.isNew,
                editor: this.state.editor
            });
        })
        .catch(error => {
            console.log(error)
        })
    }

    saveChanges() {
        const lessonData = {
            name: this.state.newName,
            htmlString: this.state.htmlString
        }
        const body = this.state.isNew ? lessonData : {
            name: this.state.name,
            update: lessonData
        }
        const endpoint = this.state.isNew ? "create" : "update"
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("accessToken")
        });
        const request = new Request(`${process.env.REACT_APP_API_BASE_URL}/lessons/${endpoint}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });
        fetch(request)
        .then((response) => {
            return response.ok ? response.json() : Promise.reject(response.status);
        })
        .then(json => {
            this.setState({
                name: json.name,
                newName: json.name,
                htmlString: this.state.htmlString,
                shouldDisplayPopup: this.state.shouldDisplayPopup,
                isNew: false,
                editor: this.state.editor
            });
            alert("Salvo com sucesso!");
        })
        .catch(error => {
            alert("Houve um erro ao tentar salvar, tente novamente!");
        })
    }

    signout() {
        authCheck.signout();
        this.redirectToLogin();
    }

    redirectToLogin() {
        const newUrl = `${process.env.REACT_APP_CLIENT_URL}`;
        document.location.replace(newUrl);
    }

    updateEditor(editor) {
        this.setState({
            name: this.state.name,
            newName: this.state.newName,
            htmlString: this.state.htmlString,
            shouldDisplayPopup: this.state.shouldDisplayPopup,
            isNew: this.state.isNew,
            editor: editor
        });
    }

    updateNewName(name) {
        this.setState({
            name: this.state.name,
            newName: name,
            htmlString: this.state.htmlString,
            shouldDisplayPopup: this.state.shouldDisplayPopup,
            isNew: this.state.isNew,
            editor: this.state.editor
        });
    }

    updateHtmlString(htmlString) {
        this.setState({
            name: this.state.name,
            newName: this.state.newName,
            htmlString: htmlString,
            shouldDisplayPopup: this.state.shouldDisplayPopup,
            isNew: this.state.isNew,
            editor: this.state.editor
        });
    }

    changePopupVisibility(isVisible) {
        this.setState({ 
            name: this.state.name,
            newName: this.state.newName,
            htmlString: this.state.htmlString,
            shouldDisplayPopup: isVisible,
            isNew: this.state.isNew,
            editor: this.state.editor
        });
    }

    render() {
        const userName = localStorage.getItem("userName")
        const popup = !this.state.shouldDisplayPopup ? null : (
            <Popup  initialName={this.state.newName}
                    onTitleChange={name => this.updateNewName(name)}
                    onClose={() => this.changePopupVisibility(false)}
                    onSave={() => { 
                       this.saveChanges();
                       this.changePopupVisibility(false);
                    }} 
            />
        )
        return (
            <>
                <div>
                    <nav className="bg-gray-800">
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>


                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>

                                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        {/*Logo superior esquerdo*/}


                                        <img className="hidden lg:block h-5 w-auto" src={logo} alt={"Logo"} />


                                    </div>

                                </div>
                                {/*itens barra superior direita*/}
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <div className="ml-3 relative">
                                        <div className="flex mt-1">
                                            <button type="button" className="mx-2 px-2 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src={placeholderUserImage} alt="" />
                                                <h1 className="mt-1 px-2 text-white font-bold">{userName}</h1>
                                            </button>
                                        </div>


                                    </div>
                                    <div className="flex">
                                        <h1 className="text-white">|  </h1>
                                        <a href="#" className="text-white font-semibold hover:text-blue-500 mx-4">Acessibilidade</a>
                                    </div>
                                    <button onClick={event => this.signout()} className="flex px-4 py-3">
                                        <svg className="h-8 w-8 mx-1 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                                        <h1 className=" pt-1 font-bold text-white ">Sair</h1>
                                    </button>




                                </div>
                            </div>
                        </div>



                    </nav>
                </div>
                <div>
                    <Link to={'/aulas'}>
                    
                    <button className="flex my-3 mx-12">
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
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

                    </div>


                    <div className="flex absolute right-0">
                        <button type='button' 
                                className=" block bg-yellow-500 hover:bg-yellow-400 px-6 py-2 mx-1 rounded-lg font-semibold text-white focus:bg-yellow-500" 
                                onClick={event=> this.changePopupVisibility(true)}>
                            Salvar
                        </button>
                        {/*<button className=" block bg-yellow-500 hover:bg-yellow-400 px-6 py-2 mx-1 rounded-lg font-semibold text-white focus:bg-yellow-500">Publicar aula</button>*/}
                    </div>
                </div>

                {/* Editor */}
                <div className="mx-16" style={{ display: "flex", flexDirection: "column" }}>
                    <div className='' style={{ width: '100%', height: '100%', marginTop: '1rem', display: 'inline-block', textAlign: 'left' }}>
                        {/*<div style={{ width: '100%', height: '100%', display: 'inline-block', textAlign: 'right', marginBottom: '5px' }}></div>*/}
                        <CKEditor editor={ClassicEditor} 
                                  onReady={editor => this.updateEditor(editor)}  
                                  onChange={(e, editor) => this.updateHtmlString(editor.getData())} />
                    </div>
                </div>
                {popup}
            </>
        );
    }
}

export default Editor;