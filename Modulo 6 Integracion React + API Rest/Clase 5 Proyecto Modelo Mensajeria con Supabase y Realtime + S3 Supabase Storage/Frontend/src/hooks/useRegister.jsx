import { register } from "../services/authService"
import useForm from "./useForm"
import useRequest from "./useRequest"

function useRegister (){
     const {loading, error, response, sendRequest} = useRequest()

    const form_initial_state = {
        username: '',
        password: '',
        email: ''
    }

    async function enviarRegistro (form_state){
        sendRequest(
            () => {
                return register(form_state.username, form_state.password, form_state.email)
            }
        )
    }

    const {
        form_state,
        onChangeFieldValue,
        onSubmitForm
    } = useForm(
        {
            initial_form_fields: form_initial_state,
            onSubmit: enviarRegistro
        }
    )

    return {
        form_state,
        onChangeFieldValue,
        onSubmitForm,
        loading,
        error,
        response
    }
}

export default useRegister