import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactContext } from '../../Context/ContactContext'

export default function HomeScreen() {
  const {updateContactById, contacts} = useContext(ContactContext)
  return (
    <div>
        <h1>Pantalla principal</h1>
        <button
            onClick={
                () => {
                    updateContactById(
                        {...contacts[0], contact_name: 'ratatoulle'},
                        1
                    )
                }
            }
        >Cambiar</button>
        <ContactSidebar/>
    </div>
  )
}
