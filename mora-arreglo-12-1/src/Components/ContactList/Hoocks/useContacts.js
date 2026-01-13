import React, { useState } from 'react'

function useContacts() {
  const [Contact, setContact] = useState(null)
  const [loadContacts, setLoadContacts] = useState(true)
}
export default useContacts