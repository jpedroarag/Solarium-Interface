import React from "react";

class  celulaAulas extends React.Component {
    render(){
        return(
            <div className="">
                 {/*Título*/}
                <h1 className="mx-2 px-1 pt-3 text-xl font-semibold text-gray-600">
                Introdução a Projeto Integrado I</h1>
                {/*Data */}
                <h1 className="mx-2 px-1  text-sm font-semibold text-gray-500"><i>A partir de 30/11/2021</i></h1>
                {/*Preview da aula*/}
                <h2 className="rounded-lg  mx-2 px-1 mt-4 font-semibold text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur interdum nibh neque, a ultricies ex fringilla quis. 
                Duis eu nisi in ligula tristique viverra in at risus. Sed finibus magna at tortor porttitor,
                 nec sagittis turpis [...]
                </h2>
                <hr className="my-2 mx-2 border-gray-300 " />
            </div>
        );
    }
}

export default celulaAulas;
