import { useNavigate } from "react-router"
import { useState } from "react"
import useRequest from "./useRequest"
import { createWorkspace } from "../services/workspaceService"
import useForm from "./useForm"

const useCreateWorkspace = () => {
    const navigate = useNavigate()
    const { loading, error, sendRequest } = useRequest()
    const [errors, setErrors] = useState({})

    const handleCreateWorkspace = async (form_values) => {
        const newErrors = {};

        if (!form_values.title || form_values.title.trim() === '') {
            newErrors.title = 'El título del espacio de trabajo es obligatorio.';
        }

        if (!form_values.description || form_values.description.trim() === '') {
            newErrors.description = 'La descripción es obligatoria.';
        } else if (form_values.description.length > 1000) {
            newErrors.description = 'La descripción no puede superar los 1000 caracteres.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            await sendRequest(async () => {
                await createWorkspace(form_values)
                navigate('/home')
            })
        }
    }

    const { form_state, onChangeFieldValue, onSubmitForm } = useForm({
        initial_form_fields: {
            title: '',
            description: ''
        },
        onSubmit: handleCreateWorkspace
    })

    return {
        form_state,
        onChangeFieldValue,
        onSubmitForm,
        isLoading: loading,
        error,
        errors
    }
}

export default useCreateWorkspace
