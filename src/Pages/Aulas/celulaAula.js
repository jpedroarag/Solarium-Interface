import React from "react";
import { Link } from "react-router-dom";

class CelulaAula extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="w-auto">
                {/*Título*/}
                <div style={{ display: "inline-block" }}>
                    <h1 className="mx-2 px-1 pt-3 text-xl font-semibold text-gray-600" 
                        style={{ display: "inline-block" }}>
                            {this.props.title}
                    </h1>
                    <Link to={`/editor/${this.props.id}`}>
                            <button className="bg-gray-300 rounded-lg px-2 py-1 text-gray-700 font-semibold hover:bg-gray-400 focus:bg-gray-300" onClick={event => this.props.onEdit()} 
                                //style={{ display: "inline-block", textDecoration: "underline", color: "blue" }}
                                >
                                    Editar
                        </button>
                    </Link>
                    &nbsp;
                    <button className="bg-gray-300 rounded-lg px-2 py-1 text-gray-700 font-semibold hover:bg-red-400 focus:bg-gray-300" onClick={event => this.props.onRemove()} 
                            //style={{ display: "inline-block", textDecoration: "underline", color: "blue" }}
                            >
                                Remover
                    </button>
                </div>
                {/*Data */}
                <h1 className="mx-2 px-1  text-sm font-semibold text-gray-500"><i>A partir de {this.props.date}</i></h1>
                {/*Preview da aula*/}
                <h2 className="rounded-lg  mx-2 px-1 mt-4 font-semibold text-gray-400">
                    <div id="htmlText"
                         style={{   lineHeight: `${this.props.lineHeight}em`, 
                                    maxHeight: `${this.props.numberOfLines*this.props.lineHeight}em`, 
                                    overflow: "hidden" }}
                         dangerouslySetInnerHTML={{ __html: this.props.body }}/>
                </h2>
                <hr className="my-2 mx-2 border-gray-300 " />
            </div>
        );
    }
}

export default CelulaAula;
