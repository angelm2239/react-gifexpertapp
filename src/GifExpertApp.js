import React, {useState} from "react";
import { AddCategorias } from "./components/AddCategoria";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    //const categorias = ['One pice','Samurai X','Dragon Ball'];
    const [categorias, setcategorias] = useState(['Dragon Ball']);
    
    //const handleAdd = () => {
    //    setcategorias([...categorias,'Naruto' ]);
    //}
    return (
        /// se utiliza el componente AddCategorias para enviar el objeto setcategorias una vez que se envie lo recibira el compon
        <>
            <h2>GifExpertApp</h2>
            <AddCategorias setcategorias={setcategorias}/>
            <hr/>
            <ol>
                {
                    categorias.map(category =>
                        (<GifGrid 
                            key={category}
                            categoria={category}
                        />
                    ))
                }
            </ol>
        </>

    )
}
