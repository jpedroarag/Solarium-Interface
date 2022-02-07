import React from "react";

class CelulaAula extends React.Component {
    render(){
        return(
            <div className="">
                 {/*Título*/}
                <h1 className="mx-2 px-1 pt-3 text-xl font-semibold text-gray-600">{this.props.title}</h1>
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
