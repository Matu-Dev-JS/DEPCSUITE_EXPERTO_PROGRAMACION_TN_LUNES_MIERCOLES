import { useState } from "react"

const useForm = (
    {
        initial_form_fields,
        onSubmit
    }
) => {
    const [form_state, setFormState] = useState(initial_form_fields)

    const onChangeFieldValue = (event) => {
        const {name, value} = event.target

        setFormState(
            (prevFormState) => {
                return {...prevFormState, [name]: value}
            }
        )
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        onSubmit(form_state)
    }

    return {
        form_state,
        onChangeFieldValue,
        onSubmitForm
    }
}

export default useForm