import React,{useState}from "react";
import  PropTypes  from "prop-types";
//se recibe setcategorias 
export const AddCategorias = ({setcategorias}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    //se agrega a la funcion handleSubmit y lo que hace es agregar el valor
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setcategorias( cats=>[inputValue,...cats] );
            setInputValue('');
        }
        
    }

    return ( 
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            ></input>
        </form>

    )
   
}
AddCategorias.propTypes = {
    setcategorias: PropTypes.func.isRequired
}