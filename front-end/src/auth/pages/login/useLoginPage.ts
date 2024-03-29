//* Importing custom hooks
import { useState } from "react";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { useForm } from "../../../hooks/useForm";

export const useLoginPage = () => {
  
    //* Attributes
    const stylesTextfield = {
        '& fieldset': {
          borderColor: '#494949', //! Color del borde
        },
        '& .Mui-focused fieldset': {
          borderColor: '#494949', //! Color del borde cuando el TextField está enfocado
        },
        '& .MuiInputBase-input': {
          color: '#ffffff', //! Color del texto
          fontFamily: 'Poppins'
        },
        '& .MuiInputLabel-root': {
          color: '#929292', //! Color del label
          fontFamily: 'Poppins'
        },
        '&:hover fieldset': {
          borderColor: '#494949 !important', //! Color del borde al pasar el mouse
        },
    };

    const { formState, onInputChange } = useForm( {email: '', password: ''} );
    const { onHandleLoginUser, errorMessage } = useAuthStore();

    //! Temporal. Se debe quitar
    const [errorLogin, setErrorLogin] = useState<boolean>(false);

    //* Methods
    const onClickLogIn = async(): Promise<void> => {

      await onHandleLoginUser({
        email: formState.email,
        password: formState.password
      });

      if(!errorMessage) return setErrorLogin(true);

    }
  
    return {
        //* Attributes
        stylesTextfield,
        formState,
        errorLogin,

        //* Methods
        onInputChange,
        onClickLogIn
    }

}
